"use client";

import * as Dialog from "@radix-ui/react-dialog";
import styles from "./modal.module.scss";
import { IoClose } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

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
    }).then(() => toast.success("Welcome Back!"));
    console.log("Signed In Success");
    router.push("/");
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <IoBookmark className={styles.signin__icon} />
        Sign In
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title className={styles.title}>Sign In</Dialog.Title>
          <Dialog.Description className={styles.description}>
            Sign into you profile here.
          </Dialog.Description>
          <form className={styles.form} onSubmit={signInUser}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              className={styles.input}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <button className={styles.button}>Sign In</button>
          </form>

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
