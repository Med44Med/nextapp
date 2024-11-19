"use client"
import React,{useRef,useState,useEffect} from 'react'
import { useAppSelector,useAppDispatch } from "../../../lib/reduxStore/hooks.ts";
import app from '../../../lib/firebase/app.ts'
import { ref ,uploadBytesResumable,getDownloadURL,getStorage} from "firebase/storage";


const ChangeProfilePic = () => {

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
    <div className="bg-transparent border-2 border-solid border-main w-11/12 h-1/2 rounded-md flex flex-col justify-center items-center gap-6 sm:w-10/12">
      <div
        onClick={() => {
          profilePictureRef.current.click();
        }}
        className="h-1/2 aspect-square rounded-full bg-foreground flex flex-col justify-center items-center cursor-pointer relative"
      >
        <div
          className="absolute inset-0 rounded-full z-0"
          style={{
            backgroundImage: `conic-gradient(var(--main) ${
              uploadPercent / 100
            }turn, var(--foreground) 0turn)`,
          }}
        ></div>
        <img
          className="absolute top-1/2 left-1/2 -translate-y-1/2 w-11/12 -translate-x-1/2 aspect-square bg-cover rounded-full z-10"
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1732007989~exp=1732011589~hmac=1d1529410b178bd02abae2e4a6bd8ab67efcf7219054e4b5ee1f03750b123664&w=740"
          alt="logo"
        />
        {isUploading && (
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-11/12 -translate-x-1/2 aspect-square rounded-full z-20 bg-soft flex justify-center items-center font-bold text-5xl">
            % {uploadPercent}
          </div>
        )}
      </div>
      <input
        type="file"
        accept="image/png,image/jpeg"
        onChange={(e) => {
          setProfilPic(e.target.files[0]);
        }}
        ref={profilePictureRef}
        className="hidden"
      />
      <button className="bg-main text-foreground px-10 py-2 rounded-md transition-colors hover:bg-hard">Update</button>

    </div>
  );
}

export default ChangeProfilePic