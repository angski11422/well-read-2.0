"use client";

import * as Dialog from "@radix-ui/react-dialog";
import styles from "@/components/modal/modal.module.scss";
import { IoClose } from "react-icons/io5";
import { IoBook } from "react-icons/io5";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function RegisterModal() {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    passWord: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    axios.post("/api/register", data).then(() => toast.success("Welcome!"));
    console.log("Signed Up Success");
    router.push("/");
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <IoBook className={styles.signin__icon} />
        Sign Up
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title className={styles.title}>Sign Up</Dialog.Title>
          <Dialog.Description className={styles.description}>
            Create a new profile here.
          </Dialog.Description>
          <form className={styles.form} onSubmit={registerUser}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              className={styles.input}
              id="passWord"
              name="passWord"
              type="password"
              autoComplete="current-password"
              required
              value={data.passWord}
              onChange={(e) => setData({ ...data, passWord: e.target.value })}
            />
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <input
              className={styles.input}
              id="name"
              type="text"
              name="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />

            <button className={styles.button}>Register</button>
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
