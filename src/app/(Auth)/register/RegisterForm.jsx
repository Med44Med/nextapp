"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";

import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { ImSpinner } from "react-icons/im";

import { register } from "./registerAction.ts";

function RegisterForm() {
  const [state, registerAction] = useActionState(register, undefined);
  const [pwdVisible, setPwdVisible] = useState(false);

  return (
    <form
      action={registerAction}
      className="bg-white text-black w-96 flex-grow rounded-md px-2 py-10 flex flex-col justify-start items-center shadow-md animate-appear"
    >
      <input
        type="text"
        name="username"
        className="outline-none border-b border-solid border-gray-500 w-5/6 h-10 rounded-none mb-4 px-2 placeholder:text-sm transition-all ease-in focus:border-green-400 focus:border-solid focus:border-b"
        placeholder="username"
        required
        autoFocus
      />
      {state?.errors.username && (<p className="text-red-500 w-5/6 text-sm">{state.errors.username}</p>)}
      <input
        type="email"
        name="email"
        className="outline-none border-b border-solid border-gray-500 w-5/6 h-10 rounded-none mb-4 px-2 placeholder:text-sm transition-all ease-in focus:border-green-400 focus:border-solid focus:border-b"
        placeholder="email"
      />
      {state?.errors.email && (<p className="text-red-500 w-5/6 text-sm">{state.errors.email}</p>)}
      <div className="flex flex-row justify-center items-center w-5/6 mb-4 relative">
        <input
          type={pwdVisible ? "text" : "password"}
          name="password"
          className="flex-grow outline-none border-b border-solid border-gray-500 w-full h-10 rounded-none  px-2 placeholder:text-sm transition-all duration-300 ease-in focus:border-green-400 focus:border-solid focus:border-b"
          placeholder="your password"
        />
        {pwdVisible ? (
          <FaRegEye
            className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => setPwdVisible(!pwdVisible)}
          />
        ) : (
          <FaRegEyeSlash
            className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => setPwdVisible(!pwdVisible)}
          />
        )}
      </div>
      {state?.errors.password && (<p className="text-red-500 w-5/6 text-sm">{state.errors.password}</p>)}
      <h4 className="w-5/6 font-normal text-sm text-gray-500 select-none">
        you already registred,
        <Link
          href="/login"
          className="text-gray-700 font-bold transition-all ease-out hover:text-black hover:underline select-none"
        >
          Login
        </Link>
      </h4>

      {/* google */}

      <SubmitButton />
    </form>
  );
}

export default RegisterForm;

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button 
        disabled={pending} 
        type="submit"
        className="w-48 flex flex-row justify-center items-center gap-4 bg-green-400 hover:bg-green-500 transition transition- text-white font-bold py-2 px-10 rounded-md mt-auto select-none"
        >
      {pending ? (
        <>
          Loading
          <ImSpinner className="animate-spin" />
        </>
      ) : (
        "Register"
      )}
    </button>
  );
}
