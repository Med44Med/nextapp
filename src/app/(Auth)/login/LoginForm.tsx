"use client";

import { useActionState, useState,useEffect } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { login } from "../../../lib/reduxStore/slice/userSlice.ts";
import { useAppDispatch } from "../../../lib/reduxStore/hooks.ts";

import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { ImSpinner } from "react-icons/im";

import  {action}  from "./loginAction.ts";
import {useRouter} from 'next/navigation'

function LoginForm() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  
  const [state, loginAction] = useActionState( action , undefined);
  const [pwdVisible, setPwdVisible] = useState(false);

 useEffect(() => {
  console.log(state);
  if (state?.status === 200) {
    dispatch(login(state?.data))
    router.push('/dashboard')
  }
 }, [state])
 
  

  return (
    <form action={loginAction} className="bg-white text-black w-96 flex-grow rounded-md px-2 py-10 flex flex-col justify-start items-center shadow-md">
        <div className="flex flex-row justify-center items-center w-5/6 mb-4 relative">
            <input
                type="email"
                name="email"
                className="flex-grow outline-none border-b border-solid border-gray-500 w-full h-10 rounded-none  px-2 placeholder:text-sm transition-all duration-300 ease-in focus:border-green-400 focus:border-solid focus:border-b"
                placeholder='Email'
                autoFocus
            />
        </div>
        <div className="flex flex-row justify-center items-center w-5/6 mb-4 relative">
            <input
                type={pwdVisible ? "text":"password"}
                name="password"
                className="flex-grow outline-none border-b border-solid border-gray-500 w-full h-10 rounded-none  px-2 placeholder:text-sm transition-all duration-300 ease-in focus:border-green-400 focus:border-solid focus:border-b"
                placeholder='Password'
            />
            {pwdVisible 
            ?
            <FaRegEye className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer" onClick={()=>setPwdVisible(!pwdVisible)}/>
            :
            <FaRegEyeSlash className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer" onClick={()=>setPwdVisible(!pwdVisible)}/>
            }
        </div>
        <h4 className='w-5/6 font-normal text-sm text-gray-500 select-none'>
            you don`&apos`t have an account,
            <Link href="/register" className='text-gray-700 font-bold transition-all ease-out hover:text-black hover:underline select-none'>
                Register
            </Link>
      </h4>
      
      
    
        <SubmitButton />
    </form>
  )
}

export default LoginForm

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
          "Login"
        )}
      </button>
    );
  }