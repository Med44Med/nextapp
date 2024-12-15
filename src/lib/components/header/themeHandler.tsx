'use client'

import {useEffect,useState} from 'react'
import { useLocalStorage } from "../../assets/useLocalStorage";
import { MdDarkMode,MdLightMode  } from "react-icons/md";



export default function ThemeHandler(){

    const [theme,changeTheme]=useLocalStorage<string | null>("theme",null)
    const [darkModeprefered,setDarkModeprefered]=useState<string | null>(null)
    
    useEffect(()=>{

      setDarkModeprefered(window.matchMedia('(prefers-color-scheme: dark)').matches)

      if (darkModeprefered && theme === null ) {
        changeTheme("dark")
      } 
      if (!darkModeprefered && theme === null ) {
        changeTheme("light")
      } 
  
      if (theme === "dark") {
        document.querySelector("html")?.setAttribute("theme","dark")
      } else {
        document.querySelector("html")?.setAttribute("theme","light")
      }
    },[theme])
    
    return (
      <div className="relative w-full px-3 py-3 border border-main flex justify-center items-center rounded-2xl overflow-hidden">
        <MdLightMode className={`grow bg-transparent z-10 ${theme === 'light' ? "text-foreground" : "text-background" }`} onClick={()=>changeTheme("light")}/>
        <MdDarkMode className={`grow bg-transparent z-10  ${theme === 'dark' ? "text-foreground" : "text-background"}`} onClick={()=>changeTheme("dark")}/>
        <div className={`absolute top-0 left-0 h-full w-1/2 z-0 rounded-2xl bg-main  duration-300 ease-out transition-transform ${theme === 'light' && 'translate-x-full'}`}></div>
      </div>
  )
  }
  