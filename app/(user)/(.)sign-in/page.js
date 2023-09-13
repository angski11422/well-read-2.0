"use client";

import styles from "../sign-in/sign-in.module.scss";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Modal from "@/components/ui/Modal";
import { IoBookmark } from "react-icons/io5";

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
    <Modal>
      <Modal.Button>
        <IoBookmark className={styles.signin__icon} />
        Sign In
      </Modal.Button>
      <Modal.Content title="Sign In">
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
      </Modal.Content>
    </Modal>
  );
}
