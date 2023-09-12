import { getSession } from "@/actions/getCurrentUser";
import Dropdown from "./dropdown";
import Link from "next/link";

export default async function UserNav() {
  // const session = await getSession();

  return (
    <>
      <Link href="/register">Sign Up</Link>
      <Link href="/sign-in">Sign In</Link>
    </>
  );
}
