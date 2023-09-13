"use client";

import * as Dialog from "@radix-ui/react-dialog";
import styles from "./modal.module.scss";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function Modal({ children }) {
  return <Dialog.Root defaultOpen>{children}</Dialog.Root>;
}

export function ModalContent({ title, children }) {
  const router = useRouter();
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.overlay} />
      <Dialog.Content
        className={styles.content}
        onInteractOutside={() => router.push("/")}
      >
        <Dialog.Title className={styles.title}>{title}</Dialog.Title>
        <Dialog.Close
          className={styles.button__icon}
          onClick={() => router.push("/")}
        >
          <IoClose />
        </Dialog.Close>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

Modal.Button = Dialog.Trigger;
Modal.Content = ModalContent;
