
// import { useState } from 'react';

import styles from './user-nav.module.scss';
import { IoLogIn } from 'react-icons/io5';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import Dropdown from './dropdown';




export default async function UserNav() {
   const session = await getServerSession(authOptions)
   
   
   if (!session) {
    return (
        <div className={styles.usernav}>
            <Link href='/api/auth/signin'>
                <button>
                   <IoLogIn className={styles.signin__icon}/>
                    Sign In
                </button> 
            </Link>
        </div>
    )
   }
   return (
    <Dropdown />
   )
  }