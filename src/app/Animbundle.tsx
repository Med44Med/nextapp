"use client"

import {useState,useEffect} from 'react'
import gsap from 'gsap';

export default function Anime() {

  const [y, setY] = useState(0)

  const handleNavigation = (e)=>{
    const scroll = e.currentTarget.scrollY
    if (y> scroll) {
      console.log('scroll up');
    } else {
      console.log('scroll down');
    }
    setY(window.scrollY);
  }
  useEffect(() => {
      
    setY(window.scrollY);
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