import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from '../../../../lib/prisma';


export const authOptions = {
    adapter: PrismaAdapter(prisma),

    callbacks: {
        async signIn({ account, profile }) {
          if (account.provider === "google") {
            return profile.email_verified && profile.email.endsWith("@gmail.com")
          }
          return true // Do different verification for other providers that don't have `email_verified`
        },
    },

    session: {
        strategy: 'jwt'
    },

    providers: [
        CredentialsProvider({
            credentials: {
                username: { label: 'email', type: 'email'},
                password: { label: 'password', type: 'password'}
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    }
                })
                if (!user) {
                    return null
                }
                const isPasswordValid = await compare(
                    credentials.password, 
                    user.password
                )
                if (!isPasswordValid) {
                    return null
                }
                return {
                    id: user.id + '',
                    username: user.username
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ]
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}