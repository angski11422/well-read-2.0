import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import { CredentialsProvider } from 'next-auth/providers';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../../lib/prisma';


export const authOptions = {
    adapter: PrismaAdapter(prisma),

    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: 'email', type: 'text'},
                password: { label: 'password', type: 'password'}
            },

            
        })
    ]
}