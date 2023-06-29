'use client'

import * as Dialog from '@radix-ui/react-dialog';
import styles from './modal.module.scss';
import { IoClose } from 'react-icons/io5'



export default function RegisterModal(props) {
    const {setRegisterModal} = props;
    return (
            <Dialog.Portal>
                <Dialog.Overlay className={styles.overlay}/>
                <Dialog.Content className={styles.content}>
                    <Dialog.Title className={styles.title}>Sign Up</Dialog.Title>
                    <Dialog.Description className={styles.description}>Create a new profile here.</Dialog.Description>
                    <form className={styles.form}>
                        <label className={styles.label} htmlFor="email">Email</label>
                        <input className={styles.input} type="email" name="email" />
                        <label className={styles.label} htmlFor="password">Password</label>
                        <input className={styles.input} type="password" name="password" />
                        <label className={styles.label} htmlFor="name">Name</label>
                        <input className={styles.input} type="text" name="name" />
                        {/* <label className={styles.label} htmlFor="image">Profile Picture</label>
                        <input className={styles.input} type="text" name="image" />
                        <label className={styles.label} htmlFor="username">Username</label>
                        <input className={styles.input} type="text" name="username" /> */}
                    </form>
                    <Dialog.Close asChild>
                        <button className={styles.button}>Register</button>
                    </Dialog.Close>
                    <Dialog.Close asChild>
                        <button className={styles.button__icon}><IoClose /></button>
                    </Dialog.Close>
                    <h5>Already have an account?</h5>
                    <button onClick={() => setRegisterModal(false)} className={styles.button}>Sign In Now</button>
                </Dialog.Content>
            </Dialog.Portal>
    )
}