import RegisterForm from './RegisterForm'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next App | Register",
  description: "this the register page",
};



function Register() {
  
  return (
    <RegisterForm />
  );
}

export default Register;
