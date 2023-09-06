"use client";

import * as Dialog from "@radix-ui/react-dialog";
import styles from "./modal.module.scss";
import { IoClose } from "react-icons/io5";
import RegisterModal from "./register";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignInModal() {
  const [registerModal, setRegisterModal] = useState(false);

  return !registerModal ? (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.overlay} />
      <Dialog.Content className={styles.content}>
        <Dialog.Title className={styles.title}>Sign In</Dialog.Title>
        <Dialog.Description className={styles.description}>
          Sign into you profile here.
        </Dialog.Description>
        <form className={styles.form}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input className={styles.input} type="text" name="email" />
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input className={styles.input} type="password" name="password" />
        </form>
        <Dialog.Close asChild>
          <button className={styles.button}>Sign In</button>
        </Dialog.Close>
        <Dialog.Close asChild>
          <button className={styles.button__icon}>
            <IoClose />
          </button>
        </Dialog.Close>
        <h5>Don't have an account?</h5>
        <button
          onClick={() => setRegisterModal(true)}
          className={styles.button}
        >
          Sign Up Now
        </button>
      </Dialog.Content>
    </Dialog.Portal>
  ) : (
    <RegisterModal setRegisterModal={setRegisterModal} />
  );
}
