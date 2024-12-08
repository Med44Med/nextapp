'use client'

import {useEffect,useState} from 'react'
import { useLocalStorage } from "../../lib/assets/useLocalStorage";
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
      <>
        {theme === "dark" && <MdLightMode className="cursor-pointer" onClick={()=>changeTheme("light")}/>}
        {theme === "light" && <MdDarkMode className="cursor-pointer" onClick={()=>changeTheme("dark")}/>}
      </>
  )
  }
  