"use client";

import { useActionState,useEffect } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";

import { ImSpinner } from "react-icons/im";

import { forgot } from "../actions/forgotAction";
import {useRouter} from 'next/navigation'

function ForgotForm() {
  const router = useRouter()
  const [state, forgotAction] = useActionState(forgot, undefined);

 useEffect(() => {
  console.log(state);
  if (state?.status===200) {
    router.push('/dashboard')
  }
 }, [state])
 
  

  return (
    <form
      action={forgotAction}
      className="bg-white text-black w-96 flex-grow rounded-md px-2 py-10 flex flex-col justify-start items-center shadow-md"
    >
      <div className="flex flex-row justify-center items-center w-5/6 mb-4 relative">
        <label 
          htmlFor="" 
          className=""
          >
          email
        </label>
        <input
          type="email"
          name="email"
          className="flex-grow outline-none border-b border-solid border-gray-500 w-full h-10 rounded-none  px-2 placeholder:text-sm transition-all duration-300 ease-in focus:border-green-400 focus:border-solid focus:border-b"
          placeholder="Email"
          autoFocus
        />
      </div>
      {state?.error?.email && <h4 className="w-5/6 font-normal text-sm text-red-500 select-none">{state.error.email}</h4>}

      <SubmitButton />

      <Link href='/login'>go back</Link>
    </form>
  );
}

export default ForgotForm

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
          <>
            Submit
          </>
        )}
      </button>
    );
  }