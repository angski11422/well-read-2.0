"use client";

import { getSession } from "@/actions/getCurrentUser";
import Dropdown from "./dropdown";
import SignInModal from "../modals/signIn";

export default async function UserNav() {
  const session = await getSession();

  if (!session) {
    return <SignInModal />;
  }
  return <Dropdown />;
}
