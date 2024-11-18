"use client"

import React,{useRef,useState,useEffect} from 'react'
import axios from 'axios'
import { useAppSelector,useAppDispatch } from "../../../lib/reduxStore/hooks.ts";
import {useRouter} from 'next/navigation'
import Image from 'next/image'
import app from '../../../lib/firebase/app.ts'
import { ref ,uploadBytesResumable,getDownloadURL,getStorage} from "firebase/storage";

function Dashboard() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const data = useAppSelector (state => state.user.data)

  
//profil picture handler

  const profilePictureRef = useRef(null)
  
  const [profilPic,setProfilPic] = useState()
  const [isUploading,setIsUploading] = useState(false)
  const [uploadPercent,setIsUploadPercent] = useState(0)

  const storage = getStorage(app);
  console.log(storage);
  
  useEffect(() => {
    if (!profilPic) {
      return;
    } else {
      console.log(profilPic);
    }
  }, [profilPic])
  

  return (
    <>
      <div>Profil page</div>
      <div>profil picture</div>
      <div className='bg-main w-11/12 h-1/2 rounded-md flex flex-col justify-center items-center sm:w-2/3'>
        <div onClick={()=>{profilePictureRef.current.click()}} className="h-1/2 aspect-square rounded-full bg-foreground flex flex-col justify-center items-center cursor-pointer">
          <img src="https://placehold.co/600x400?text=Hello+World" alt="logo" style={{borderRadius: '50%',height:'90%',width:'90%'}}/>
        </div>
        <input type="file" accept="image/png,image/jpeg" onChange={e=>{setProfilPic(e.target.files[0])}} ref={profilePictureRef} className="hidden"/>
      </div>
      <div>edit personel info</div>
      <div>delete account</div>

    </>
  )
}

export default Dashboard