"use client"

import {useEffect} from 'react'
import { useLocalStorage } from "@uidotdev/usehooks";
import { MdDarkMode,MdLightMode  } from "react-icons/md";


export default function ThemeHandler(){

    const [theme,changeTheme]=useLocalStorage<string | null>("theme",null)
  
    const darkModeprefered = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    useEffect(()=>{
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
  