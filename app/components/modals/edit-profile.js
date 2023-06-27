'use client'

import * as Dialog from '@radix-ui/react-dialog';
import styles from './modal.module.scss'
import { IoClose } from 'react-icons/io5'



export default function EditProfileModal() {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className={styles.button}>Sign In</button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={styles.overlay}/>
                <Dialog.Content className={styles.content}>
                    <Dialog.Title className={styles.title}>Sign In</Dialog.Title>
                    <Dialog.Description className={styles.description}>Sign into you profile here.</Dialog.Description>
                    <form className={styles.form}>
                        <label className={styles.label} htmlFor="username">Username</label>
                        <input className={styles.input} type="text" name="username" />
                        <label className={styles.label} htmlFor="password">Password</label>
                        <input className={styles.input} type="password" name="password" />
                    </form>
                    <Dialog.Close asChild>
                        <button className={styles.button}>Sign In</button>
                    </Dialog.Close>
                    <Dialog.Close asChild>
                        <button className={styles.button__icon}><IoClose /></button>
                    </Dialog.Close>
                    
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}