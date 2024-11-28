"use client"
import React,{useRef,useState,useEffect} from 'react'
import axios from 'axios'
import { useAppSelector,useAppDispatch } from "../../../../lib/reduxStore/hooks";
import { updateProfilPic,IUser} from "../../../../lib/reduxStore/slice/userSlice";
import app from '../../../../lib/firebase/app'
import { ref ,uploadBytesResumable,getDownloadURL,getStorage} from "firebase/storage";


const ChangeProfilePic = () => {

  const dispatch= useAppDispatch()
  const data : IUser = useAppSelector (state => state.user.data)
  const id = data.id
  
//profil picture handler

  const profilePictureRef = useRef<HTMLInputElement>(null)
  
  const [profilPic,setProfilPic] = useState<Blob | null>()
  const [isUploading,setIsUploading] = useState(false)
  const [uploadPercent,setIsUploadPercent] = useState(0)
  const [uploadMsg,setIsUploadMsg] = useState<string | null>(null)
  const [profilUrl,setProfilUrl] = useState("")

  const storage = getStorage(app);
  
  useEffect(() => {
    if (!profilPic) {
      return;
    } else {
      if (profilPic.size > 5242880) {
        alert("please choos a picture smaller than 5MB");
      } else {      
        setIsUploading(true);
        const storageRef = ref(storage, `profilePictures/${id}`);
        const uploading = uploadBytesResumable(storageRef, profilPic);
        uploading.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setIsUploadPercent(progress);
          },
          (error) => {
            console.log(error);
            setIsUploadMsg(error.message)
            setIsUploading(false);
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

const handleAvatar = async ()=>{
  try {
    if (!profilUrl) {return;}
    const response = await axios.post('http://localhost:3000/api/profilpicture',{ id,imageUrl:profilUrl })
    console.log(response);
    dispatch(updateProfilPic(response.data.avatar))
  } catch (error) {
    console.log(error);
    
  }
}
  return (
    <div className="bg-transparent border-2 border-solid border-main w-11/12 rounded-md flex flex-col justify-center items-center gap-6 py-6 sm:w-10/12">
      <h1 className="w-full text-xl md:text-2xl px-4">تحديث صورتك :</h1>
      <div
        onClick={() => {
          profilePictureRef?.current?.click();
        }}
        className="h-32 aspect-square rounded-full bg-foreground flex flex-col justify-center items-center cursor-pointer relative"
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
          src={data.avatar}
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
          if (!e.target.files) {return;}
          setProfilPic(e.target.files[0]);
        }}
        ref={profilePictureRef}
        className="hidden"
      />
      <button onClick={()=>{handleAvatar()}} className="bg-main w-5/6 text-foreground text-2xl font-bold px-14 py-2 mt-2 rounded-md transition-colors md:text-xl md:w-fit hover:bg-hard">تحديث</button>
      {uploadMsg && <h1>{uploadMsg}</h1>}
    </div>
  );
}

export default ChangeProfilePic