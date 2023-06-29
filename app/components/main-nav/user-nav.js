
// import { useState } from 'react';

import styles from './user-nav.module.scss';
import SignInModal from '../modals/signIn';
import { IoLogIn } from 'react-icons/io5';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import Dropdown from './dropdown';




export default async function UserNav() {
   const session = await getServerSession(authOptions)
   
   
   if (!session) {
    return (
        <div>
            <Link href='/api/auth/signin' >
                <div><IoLogIn /></div>Sign In
            </Link>
        </div>
    )
   }
   return (
    <Dropdown />
   )
  }