"use client"
import React,{useActionState,useRef,useState,useEffect} from 'react'
import { useAppSelector,useAppDispatch } from "../../../lib/reduxStore/hooks.ts";
import {update} from './updateinfoAction.ts'
import communes from "../../../lib/assets/Communes.json"

const EditInfo = () => {

  const data = useAppSelector (state => state.user.data)
  const userID = data.userId
  
//profil picture handler

  const [state,updateinfoAction] = useActionState(update,{firstname:"mohammed"})
  
  console.log(state);
  


  return (
    <div className="bg-transparent border-2 border-solid border-main w-11/12 h-screen rounded-md flex flex-col justify-start items-center gap-6 py-6 sm:w-10/12">
      <h1 className=" justify-self-start	">personel infromation:</h1>
      <form action={updateinfoAction}>
        <input
          type="text"
          name="username"
          className="outline-none border-b border-solid border-gray-500 w-5/6 h-10 rounded-none mb-4 px-2 placeholder:text-sm transition-all ease-in focus:border-green-400 focus:border-solid focus:border-b"
          placeholder="username"
          autoFocus
        />
        {state?.errors?.username && (<p className="text-red-500 w-5/6 text-sm">{state.errors.username}</p>)}
        <input
          type="text"
          name="firstname"
          className="outline-none border-b border-solid border-gray-500 w-5/6 h-10 rounded-none mb-4 px-2 placeholder:text-sm transition-all ease-in focus:border-green-400 focus:border-solid focus:border-b"
          placeholder="firstname"
        />
        <input
          type="text"
          name="lastname"
          className="outline-none border-b border-solid border-gray-500 w-5/6 h-10 rounded-none mb-4 px-2 placeholder:text-sm transition-all ease-in focus:border-green-400 focus:border-solid focus:border-b"
          placeholder="lastname"
        />
        <input
          type="text"
          name="lastname"
          className="outline-none border-b border-solid border-gray-500 w-5/6 h-10 rounded-none mb-4 px-2 placeholder:text-sm transition-all ease-in focus:border-green-400 focus:border-solid focus:border-b"
          placeholder="lastname"
        />
        <input
          type="date"
          name="birthdate"
          className="outline-none border-b border-solid border-gray-500 w-5/6 h-10 rounded-none mb-4 px-2 placeholder:text-sm transition-all ease-in focus:border-green-400 focus:border-solid focus:border-b"
          placeholder="birthdate"
        />
        <input
          type="text"
          name="aderesse"
          className="outline-none border-b border-solid border-gray-500 w-5/6 h-10 rounded-none mb-4 px-2 placeholder:text-sm transition-all ease-in focus:border-green-400 focus:border-solid focus:border-b"
          placeholder="adress"
        />
        <select value={state.wilaya} name="wilaya">
                <option value="">الرجاء اختيار الولاية</option>
                {/* {communes.filter((obj,index,self)=>{
                                  return index === self.findIndex((o)=> o.wilaya_name_ascii === obj.wilaya_name_ascii)
                                })
                         .map((wilaya)=>(
                            <option key={wilaya.id} value={wilaya.wilaya_name_ascii}>{wilaya.wilaya_name}</option>
                ))} */}
        </select>
      </form>
    </div>
  );
}

export default EditInfo