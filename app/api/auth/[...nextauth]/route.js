import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const authOptions = {
    adapter: PrismaAdapter(prisma),

    session: {
        strategy: 'jwt'
    },

    providers: [
        CredentialsProvider({
            credentials: {
                username: { label: 'username', type: 'text'},
                password: { label: 'password', type: 'password'}
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    return null
                }
                const user = await prisma.user.findUnique({
                    where: {
                        username: credentials.username,
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
        })
    ]
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}