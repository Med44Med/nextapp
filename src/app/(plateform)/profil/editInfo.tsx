"use client"
import React,{useRef,useState,useEffect} from 'react'
import { useAppSelector,useAppDispatch } from "../../../lib/reduxStore/hooks.ts";
import app from '../../../lib/firebase/app.ts'
import { ref ,uploadBytesResumable,getDownloadURL,getStorage} from "firebase/storage";


const EditInfo = () => {

  const data = useAppSelector (state => state.user.data)
  const userID = data.userId
  
//profil picture handler

  const profilePictureRef = useRef(null)
  
  const [profilPic,setProfilPic] = useState()
  const [isUploading,setIsUploading] = useState(false)
  const [uploadPercent,setIsUploadPercent] = useState(0)
  const [uploadMsg,setIsUploadMsg] = useState("")
  const [profilUrl,setProfilUrl] = useState("")

  const storage = getStorage(app);
  
  useEffect(() => {
    if (!profilPic) {
      return;
    } else {
      if (profilPic.size > 5242880) {
        alert("please choos a picture < 5MB");
      } else {      
        setIsUploading(true);
        const storageRef = ref(storage, `profilePictures/${userID}`);
        const uploading = uploadBytesResumable(storageRef, profilPic);
        uploading.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setIsUploadPercent(progress);
          },
          (error) => {
            console.log(error);
            setIsUploadMsg(error)
          },
          () => {
            getDownloadURL(uploading.snapshot.ref).then((downloadURL) => {
              setProfilUrl(downloadURL);
              setIsUploading(false);
              setIsUploadPercent(0);
            });
          }
        );
      }
    }
  }, [profilPic]);


  return (
    <div className="bg-transparent border-2 border-solid border-main w-11/12 h-screen rounded-md flex flex-col justify-center items-center gap-6 sm:w-10/12">
      <form action="">

      </form>
    </div>
  );
}

export default EditInfo