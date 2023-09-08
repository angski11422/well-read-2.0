import { getSession } from "@/actions/getCurrentUser";
import Dropdown from "./dropdown";
import SignInModal from "../modals/signIn";
import RegisterModal from "../modals/register";

export default async function UserNav() {
  // const session = await getSession();

  return (
    <>
      <RegisterModal />
      <SignInModal />
    </>
  );
}
