import dynamic from "next/dynamic";

const SignInModal = dynamic(() => import("../sign-in/sign-in-form"));

export default function SignIn() {
  return (
    <div>
      <h3>New User</h3>
      <SignInModal />
    </div>
  );
}
