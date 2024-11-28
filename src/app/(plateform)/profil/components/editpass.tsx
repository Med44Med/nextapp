"use client"
import React,{useActionState} from 'react'
import { useFormStatus } from "react-dom";
import { useAppSelector } from "../../../../lib/reduxStore/hooks";
import {IUser} from "../../../../lib/reduxStore/slice/userSlice"
import { ImSpinner } from "react-icons/im";



import {updatePass} from '../updateinfoAction'

const EditPass = () => {

  const data : IUser = useAppSelector (state => state.user.data)
  const id= data.id
  

  const [state,updatePassAction] = useActionState(updatePass,undefined)


  


  return (
    <div className="bg-transparent border-2 border-solid border-main w-11/12 rounded-md flex flex-col justify-start items-center gap-6 py-6 sm:w-10/12">
      
      <h1 className="w-full px-4 text-xl md:text-2xl font-bold">تغيير كلمة المرور الخاصة بك:</h1>
      
      <form action={updatePassAction} className="flex flex-col justify-start items-center w-5/6 gap-3">
        <input type="text" name="id" defaultValue={id} className="hidden" />
        <label className="w-full md:w-2/3">كلمة المرور السابقة :</label>
        <input
          type="password"
          name="oldpass"
          className="text-black outline-none border-b border-solid border-gray-500 w-full md:w-2/3 h-10 rounded-sm mb-4 px-2 placeholder:text-sm transition-all ease-in focus:border-green-400 focus:border-solid focus:border-b"
          placeholder="كلمة المرور السابقة"
        />
        {state?.errors?.oldpass && (<p className="text-red-500 w-5/6 text-sm">{state.errors.oldpass}</p>)}
        <label htmlFor="newpass" className="w-full md:w-2/3">كلمة المرور الجديدة :</label>
        <input
          type="password"
          name="newpass"
          className="text-black outline-none border-b border-solid border-gray-500 w-full md:w-2/3 h-10 rounded-sm mb-4 px-2 placeholder:text-sm transition-all ease-in focus:border-green-400 focus:border-solid focus:border-b"
          placeholder="كلمة المرور الجديدة"
        />
        {state?.errors?.newpass && (<p className="text-red-500 w-5/6 text-sm">{state.errors.newpass}</p>)}
        <label htmlFor="renewpass" className="w-full md:w-2/3">أعد إدخال كلمة المرور الجديدة :</label>
        <input
          type="password"
          name="renewpass"
          className="text-black outline-none border-b border-solid border-gray-500 w-full md:w-2/3 h-10 rounded-sm mb-4 px-2 placeholder:text-sm transition-all ease-in focus:border-green-400 focus:border-solid focus:border-b"
          placeholder="أعد إدخال كلمة المرور الجديدة"
        />
        {state?.errors?.renewpass && (<p className="text-red-500 w-5/6 text-sm">{state.errors.renewpass}</p>)}
        
        <SubmitButton />
      </form>
    </div>
  );
}

export default EditPass

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button 
        disabled={pending} 
        type="submit"
        className="bg-main w-full text-foreground text-2xl font-bold px-14 py-2 mt-2 rounded-md transition-colors md:text-xl md:w-fit hover:bg-hard"        >
      {pending ? (
        <>
          انتظر من فضلك
          <ImSpinner className="animate-spin" />
        </>
      ) : (
        <>حدث كلمة مرورك</>
      )}
    </button>
  );
}