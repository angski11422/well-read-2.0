import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from '../../../../lib/prisma';


export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: 'Email',
            credentials: {
                email: { label: 'Email', type: 'text'},
                password: { label: 'Password', type: 'password'}
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Please enter an email and password')
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    }
                })
                if (!user) {
                    throw new Error('No user found')
                }
                const isPasswordValid = await bcrypt.compare(
                    credentials.password, 
                    user.password
                )
                if (!isPasswordValid) {
                    throw new Error('No user found')
                }
                return user
            }
        })
        
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user = user);
            return token;
        },
        session: async ({ session, token }) => {
            session.user = token.user;
            return session;
        }
    },
    
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },

    
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}