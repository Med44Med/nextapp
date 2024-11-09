"use client";
import React, { useState,useEffect } from "react";
import Link from "next/link";
import {useAppSelector} from '../../../lib/hooks.ts'




import { FaRegEyeSlash ,FaRegEye} from "react-icons/fa";

interface User {
    name: string;
    email: string;
    password: string;
  }

function Login() {

  const data = useAppSelector(state=>state)

  console.log(data);
  

  const [formData, setFormData] = useState<User>({
    name: "",
    email: "",
    password: "",
  });
  const [pwdVisible, setPwdVisible] = useState<boolean>(false)
  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  useEffect(() => {
   console.log(formData);

  }, [formData])
  
  return (
    <form className="bg-white text-black w-96 flex-grow rounded-md px-2 py-10 flex flex-col justify-start items-center shadow-md">
      <input
        type="email"
        className="outline-none border-b border-solid border-gray-500 w-5/6 h-10 rounded-none mb-4 px-2 placeholder:text-sm transition-all ease-in focus:border-green-400 focus:border-solid focus:border-b"
        placeholder='Email'
        value={formData.email}
        onChange={(e) => {
          setFormData((perv) => ({ ...perv, email: e.target.value }));
        }}
        autoFocus
      />
      <div
        className="flex flex-row justify-center items-center w-5/6 mb-4 relative"
      >
        <input
            type={pwdVisible ? "text":"password"}
            className="flex-grow outline-none border-b border-solid border-gray-500 w-full h-10 rounded-none  px-2 placeholder:text-sm transition-all duration-300 ease-in focus:border-green-400 focus:border-solid focus:border-b"
            placeholder='Password'
            value={formData.password}
            onChange={(e) => {setFormData((perv) => ({ ...perv, password: e.target.value }));}}/>
        {pwdVisible 
        ?
        <FaRegEyeSlash className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer" onClick={()=>setPwdVisible(!pwdVisible)}/>
        :
        <FaRegEye className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer" onClick={()=>setPwdVisible(!pwdVisible)}/>
        }
     </div>
      <h4
        className='w-5/6 font-normal text-sm text-gray-500 select-none'
      >
        you don't have an account,
        <Link 
            href="/register"
            className='text-gray-700 font-bold transition-all ease-out hover:text-black hover:underline select-none'>Register</Link>
      </h4>
      {/* google */}
      <button 
        type="submit"
        className="bg-green-400 hover:bg-green-500 transition transition- text-white font-bold py-2 px-10 rounded-md mt-auto select-none"
        onClick={()=>handleSubmit}
      >
        Login
      </button>
    </form>
  );
}

export default Login;
