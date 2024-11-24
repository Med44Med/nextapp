import LoginForm from './LoginForm'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next App | Login",
  description: "this the login page",
};






function Login() {

  return (
    <>
      <LoginForm />
      <h1 className='text-black'>gama44gama</h1>
    </>
  );
}

export default Login;
