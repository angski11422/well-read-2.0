"use client";

import * as Dialog from "@radix-ui/react-dialog";
import styles from "./modal.module.scss";
import { IoClose } from "react-icons/io5";
import { IoLogIn } from "react-icons/io5";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInModal() {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const signInUser = async (e) => {
    e.preventDefault();
    signIn("credentials", {
      ...data,
      redirect: false,
    });
    router.push("/profile");
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <IoLogIn className={styles.signin__icon} />
        Sign In
      </Dialog.Trigger>
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
            <button className={styles.button__icon} onClick={signInUser}>
              <IoClose />
            </button>
          </Dialog.Close>
          {/* <h5>Don't have an account?</h5>
          <button className={styles.button}>Sign Up Now</button> */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
