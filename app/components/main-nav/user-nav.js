'use client'
// import { useState } from 'react';

import styles from './user-nav.module.scss';
import SignInModal from '../modals/signIn';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { IoPerson, IoMenu, IoLibrary, IoBook, IoHome } from 'react-icons/io5';
import Link from 'next/link';


export default function UserNav() {
    //if user logged in, show dropdown menu with navigation
    //if not logged in, show sign in modal

  return (
    <div>
        <SignInModal />
        <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
            <button className={styles.button__icon} aria-label="Customise options">
                <IoMenu />
            </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
            <DropdownMenu.Content className={styles.content} sideOffset={5}>
                <Link href='/' className={styles.link}>
                    <DropdownMenu.Item className={styles.item}>
                        <div className={styles.icon__left}><IoHome/></div>Home
                    </DropdownMenu.Item>
                </Link>
                <Link href='/bookclubs' className={styles.link}>
                    <DropdownMenu.Item className={styles.item}>
                        <div className={styles.icon__left}><IoLibrary/></div>All Bookclubs   
                    </DropdownMenu.Item>
                </Link>
                <Link href='/' className={styles.link}>
                    <DropdownMenu.Item className={styles.item}>
                        <div className={styles.icon__left}><IoBook/></div>My Bookclubs
                    </DropdownMenu.Item>
                </Link>
                <Link href='/profile' className={styles.link}>
                    <DropdownMenu.Item className={styles.item}>
                        <div className={styles.icon__left}><IoPerson/></div>Profile
                    </DropdownMenu.Item>
                </Link>
            </DropdownMenu.Content>
        </DropdownMenu.Portal>
        </DropdownMenu.Root>
    </div>
    )
  }