"use client"

import {useState,useEffect} from 'react'
import { useLocalStorage } from "@uidotdev/usehooks";
import { MdDarkMode,MdLightMode  } from "react-icons/md";


import gsap from 'gsap';



export function ThemeHandler(){

  const [theme,changeTheme]=useLocalStorage("theme",null)

  const darkModeprefered = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  useEffect(()=>{
    if (darkModeprefered && theme === null ) {
      changeTheme("dark")
    } 
    if (!darkModeprefered && theme === null ) {
      changeTheme("light")
    } 

    if (theme === "dark") {
      document.querySelector("html").setAttribute("theme","dark")
    } else {
      document.querySelector("html").setAttribute("theme","light")
    }
  },[theme])
  
  return (
    <>
      {theme === "dark" && <MdLightMode className="cursor-pointer" onClick={()=>changeTheme("light")}/>}
      {theme === "light" && <MdDarkMode className="cursor-pointer" onClick={()=>changeTheme("dark")}/>}
    </>
)
}


export  function Anime() {



  const [y, setY] = useState(0)

  const handleNavigation = (e)=>{

    const header = document.querySelector("header");
    const scrollPosition = window.scrollY;

    if (y > scrollPosition) {
      header.classList.remove('hide')
    } else {
      header.classList.add('hide')
    }

    setY(scrollPosition);
  }

  useEffect(() => {
      
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => { 
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
    

  },[y])

  useEffect(() => {
    gsap.fromTo( ".title",
      { opacity: .8, y: 50 },
      { opacity: 1, y: 0, duration: .5 }
    )
  }, [])
  
  
  return ;
}