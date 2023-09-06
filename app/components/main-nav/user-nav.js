"use client";

import styles from "./user-nav.module.scss";
import { IoLogIn } from "react-icons/io5";
import { getSession } from "@/actions/getCurrentUser";
import Dropdown from "./dropdown";
import * as Dialog from "@radix-ui/react-dialog";
import SignInModal from "../modals/signIn";

export default async function UserNav() {
  const session = await getSession();

  if (!session) {
    return (
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>
            <IoLogIn className={styles.signin__icon} />
            Sign In
          </button>
        </Dialog.Trigger>
        <SignInModal />
      </Dialog.Root>
    );
  }
  return <Dropdown />;
}
