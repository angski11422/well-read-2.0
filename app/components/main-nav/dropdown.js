"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  IoPerson,
  IoMenu,
  IoLibrary,
  IoBook,
  IoHome,
  IoLogOut,
} from "react-icons/io5";

import styles from "./dropdown.module.scss";

export default function Dropdown() {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className={styles.button__icon}
            aria-label="Customise options"
          >
            <IoMenu />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className={styles.content}
            sideOffset={20}
            align="start"
            alignOffset={-200}
          >
            <Link href="/" className={styles.link}>
              <DropdownMenu.Item className={styles.item}>
                <div className={styles.icon__left}>
                  <IoHome />
                </div>
                Home
              </DropdownMenu.Item>
            </Link>
            <Link href="/bookclubs" className={styles.link}>
              <DropdownMenu.Item className={styles.item}>
                <div className={styles.icon__left}>
                  <IoLibrary />
                </div>
                All Bookclubs
              </DropdownMenu.Item>
            </Link>
            <Link href="/mybookclubs" className={styles.link}>
              <DropdownMenu.Item className={styles.item}>
                <div className={styles.icon__left}>
                  <IoBook />
                </div>
                My Bookclubs
              </DropdownMenu.Item>
            </Link>
            <Link href="/profile" className={styles.link}>
              <DropdownMenu.Item className={styles.item}>
                <div className={styles.icon__left}>
                  <IoPerson />
                </div>
                Profile
              </DropdownMenu.Item>
            </Link>
            <DropdownMenu.Item
              onSelect={() => signOut()}
              className={styles.item}
            >
              <div className={styles.icon__left}>
                <IoLogOut />
              </div>
              Sign Out
            </DropdownMenu.Item>
            <DropdownMenu.Arrow
              height={10}
              width={15}
              className={styles.arrow}
            />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
