"use client"

import {useState,useEffect} from 'react'


import gsap from 'gsap';





export  default function Anime() {



  const [y, setY] = useState(0)

  const handleNavigation = ()=>{

    const header = document?.querySelector("header");
    const scrollPosition = window.scrollY;

    if (y > scrollPosition) {
      header?.classList.remove('hide')
    } else {
      header?.classList.add('hide')
    }

    setY(scrollPosition);
  }

  useEffect(() => {
      
    window.addEventListener("scroll", () => handleNavigation());

    return () => { 
      window.removeEventListener("scroll", () => handleNavigation());
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