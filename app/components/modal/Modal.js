"use client";

import * as Dialog from "@radix-ui/react-dialog";
import styles from "./modal.module.scss";
import { IoClose } from "react-icons/io5";

export default function Modal({ children }) {
  return <Dialog.Root>{children}</Dialog.Root>;
}

export function ModalContent({ title, children }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.overlay} />
      <Dialog.Content className={styles.content}>
        <Dialog.Title className={styles.title}>{title}</Dialog.Title>
        <Dialog.Close asChild>
          <button className={styles.button__icon}>
            <IoClose />
          </button>
        </Dialog.Close>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

Modal.Button = Dialog.Trigger;
Modal.Content = ModalContent;
