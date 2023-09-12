"use client";

import { useSession } from "next-auth/react";
import Dropdown from "./dropdown";
import Link from "next/link";

export default async function UserNav() {
  const session = await useSession();

  return (
    <div>
      {!session.data ? (
        // <Link href="/register">Sign Up</Link>
        <Link href="/sign-in">Sign In</Link>
      ) : (
        <Dropdown />
      )}
    </div>
  );
}
