"use client";

import * as Dialog from "@radix-ui/react-dialog";
import styles from "@/components/modal/modal.module.scss";
import { IoClose } from "react-icons/io5";

export default function EditProfileModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={styles.button}>Edit Profile</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title className={styles.title}>Edit</Dialog.Title>
          <Dialog.Description className={styles.description}>
            Edit your profile.
          </Dialog.Description>
          <form className={styles.form}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input className={styles.input} type="email" name="email" />
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input className={styles.input} type="password" name="password" />
            <label className={styles.label} htmlFor="firstName">
              Name
            </label>
            <input className={styles.input} type="text" name="firstName" />
            <label className={styles.label} htmlFor="image">
              Profile Picture
            </label>
            <input className={styles.input} type="text" name="image" />
            <label className={styles.label} htmlFor="username">
              Username
            </label>
            <input className={styles.input} type="text" name="username" />
          </form>
          <Dialog.Close asChild>
            <button className={styles.button}>Edit</button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <button className={styles.button__icon}>
              <IoClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
