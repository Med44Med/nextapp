"use client"
import React,{useActionState,useRef,useState,useEffect} from 'react'
import { useAppSelector,useAppDispatch } from "../../../lib/reduxStore/hooks.ts";
import {update} from './updateinfoAction.ts'
import communes from "../../../lib/assets/Communes.json"

const EditInfo = () => {

  const data = useAppSelector (state => state.user.data)
  const user = {
    username:data.username
  }
//profil picture handler

  const [wilaya, setWilaya] = useState("")
  const [commune, setCommune] = useState("")
  const [state,updateinfoAction] = useActionState(update,user)
  
  useEffect(() => {
    console.log(wilaya);
    
  }, [wilaya])
  
  


  return (
    <div className="bg-transparent border-2 border-solid border-main w-11/12 rounded-md flex flex-col justify-start items-center gap-6 py-6 sm:w-10/12">
      <h1 className="w-full text-xl md:text-2xl px-4">معلومات شخصية:</h1>
      <form action={updateinfoAction} className="flex flex-col justify-start items-center w-5/6 gap-3">
        <label htmlFor="username" className="w-full md:w-2/3">اسم المستخدم :</label>
        <input
          type="text"
          name="username"
          className="text-black outline-none border-b border-solid border-gray-500 w-full md:w-2/3 h-10 rounded-sm mb-4 px-2 placeholder:text-sm transition-all ease-in focus:border-green-400 focus:border-solid focus:border-b"
          placeholder={state?.username || "اسم المستخدم"}
          autoFocus
        />
        {state?.errors?.username && (<p className="text-red-500 w-5/6 text-sm">{state.errors.username}</p>)}
        <label htmlFor="firstname" className="w-full md:w-2/3">الإسم :</label>
        <input
          type="text"
          name="firstname"
          className="outline-none border-b border-solid border-gray-500 w-full md:w-2/3 h-10 rounded-none mb-4 px-2 placeholder:text-sm transition-all ease-in focus:border-green-400 focus:border-solid focus:border-b"
          placeholder={state?.firstname || "الإسم"}
          />
        <label htmlFor="lastname" className="w-full md:w-2/3">اللقب :</label>
        <input
          type="text"
          name="lastname"
          className="outline-none border-b border-solid border-gray-500 w-full md:w-2/3 h-10 rounded-none mb-4 px-2 placeholder:text-sm transition-all ease-in focus:border-green-400 focus:border-solid focus:border-b"
          placeholder={state?.lastname || "اللقب"}
        />
        <label htmlFor="lastname" className="w-full md:w-2/3">تاريخ الميلاد :</label>
        <input
          type="date"
          name="birthdate"
          className="text-black text-center outline-none border-b border-solid border-gray-500 w-full md:w-2/3 h-10 rounded-sm mb-4 px-2 placeholder:text-sm transition-all ease-in focus:border-green-400 focus:border-solid focus:border-b"
          placeholder={state?.birthday || ""}
        />
        <label htmlFor="lastname" className="w-full md:w-2/3">ولاية :</label>
        <select name="wilaya" onChange={e=>{setWilaya(e.target.value)}} className="w-full md:w-2/3 h-10 rounded-sm text-black mb-4 px-2">
                <option value="hello">الرجاء اختيار الولاية</option>
                {communes.filter((obj,index,self)=>{
                  return index === self.findIndex((o)=> o.wilaya_name_ascii === obj.wilaya_name_ascii)
                })
                .map((wilaya)=>(
                  <option key={wilaya.id} value={wilaya.wilaya_name_ascii}>{wilaya.wilaya_name}</option>
                ))}
        </select>
        <label htmlFor="lastname" className="w-full md:w-2/3">البلدية :</label>
        <select name="commune" className="w-full md:w-2/3 h-10 rounded-sm text-black mb-4 px-2">
                <option value="">الرجاء اختيار البلدية</option>
                {communes.filter((value)=>{return value.wilaya_name_ascii === wilaya})
                         .map((commune)=>(
                          <option key={commune.id} value={commune.commune_name_ascii}>{commune.commune_name}</option>
                         ))
                
                }
        </select>
        <label htmlFor="lastname" className="w-full md:w-2/3">عنوان :</label>
        <input
            type="text"
            name="address"
            className="outline-none border-b border-solid border-gray-500 w-full md:w-2/3 h-10 rounded-sm mb-4 px-2 placeholder:text-sm transition-all ease-in focus:border-green-400 focus:border-solid focus:border-b"
            placeholder={state?.address || "عنوان"}
        />
        <label htmlFor="lastname" className="w-full md:w-2/3">رقم الهاتف :</label>
        <input
            type="tel"
            name="tel"
            pattern="[0-9]{10}"
            className="text-black outline-none border-b border-solid border-gray-500 w-full md:w-2/3 h-10 rounded-sm mb-4 px-2 placeholder:text-sm transition-all ease-in focus:border-green-400 focus:border-solid focus:border-b"
        />
        <button type="submit" className="bg-main w-full text-foreground text-2xl font-bold px-14 py-2 mt-2 rounded-md transition-colors md:text-xl md:w-fit hover:bg-hard">حدث معلوماتك</button>
      </form>
    </div>
  );
}

export default EditInfo