'use client'

import * as Dialog from '@radix-ui/react-dialog';
import styles from './modal.module.scss'
import { IoClose } from 'react-icons/io5'



export default function CreateClubModal() {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className={styles.button}>Create Bookclub</button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={styles.overlay}/>
                <Dialog.Content className={styles.content}>
                    <Dialog.Title className={styles.title}>Create New Bookclub</Dialog.Title>
                    <Dialog.Description className={styles.description}>Not finding what you are looking for? Start you own Bookclub.</Dialog.Description>
                    <form className={styles.form}>
                        <label className={styles.label} htmlFor="name">Name</label>
                        <input className={styles.input} type="text" name="name" />
                        <label className={styles.label} htmlFor="location">Location</label>
                        <input className={styles.input} type="text" name="location" />
                    </form>
                    <Dialog.Close asChild>
                        <button className={styles.button}>Create</button>
                    </Dialog.Close>
                    <Dialog.Close asChild>
                        <button className={styles.button__icon}><IoClose /></button>
                    </Dialog.Close>
                    
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}