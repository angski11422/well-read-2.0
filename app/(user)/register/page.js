import dynamic from "next/dynamic";

const RegisterModal = dynamic(() => import("../register/register-form"));

export default function Register() {
  return (
    <div>
      <h3>New User</h3>
      <RegisterModal />
    </div>
  );
}
