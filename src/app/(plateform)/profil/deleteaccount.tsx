"use client"
import React,{useState,useEffect} from 'react'


import { FiAlertTriangle } from "react-icons/fi";

const DeleteAccount = () => {

  const [deleteConfermation,setDeleteConfermation] = useState('')
  const [showDangerZone, setShowDangerZone]=useState(false)
  const [disableBtn, setDisableBtn] = useState(true)
  const [disableDelay, setDisableDelay] = useState(10)

useEffect(() => {
  if (showDangerZone === false) {
    setDisableDelay(10)
    setDisableBtn(true)
    return ;
  } else {
    const interval = setInterval(() => {
      setDisableDelay((perv) => {
        if (perv <= 1) {
          setDisableBtn(false);
          clearInterval(interval);
          return 0;
        }
        return perv - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }
}, [showDangerZone])



  const handleDelete = ()=>{
    if (deleteConfermation !== "DELETE") {
      alert('please enter the word DELETE !')
    } else {
      alert('deleted')
    }
  }
  


  return (
    <div className="bg-transparent border-2 border-solid border-danger w-11/12 rounded-md flex flex-col justify-start items-center gap-6 py-6 sm:w-10/12">
      <h1 className="w-full px-4 text-2xl font-bold">احذف حسابك :</h1>
      <FiAlertTriangle className="text-danger text-6xl" />
      <p className="w-full text-base font-bold text-justify px-14 md:w-fit">عند حذف حسابك، سيتم فقدان جميع بياناتك بشكل نهائي. لن تتمكن من استعادة أي معلومات مثل سجل الدروس، تقدمك، أو أي بيانات شخصية أخرى مرتبطة بحسابك. يرجى التأكد تمامًا من قرارك قبل المتابعة بحذف الحساب.</p>
      <button onClick={()=>{setShowDangerZone(true)}} className="bg-danger w-5/6 text-foreground text-2xl font-bold px-14 py-2  mt-5 rounded-md transition-colors md:text-xl md:w-1/3">احذف</button>
      
      <div className={`${showDangerZone? "flex" : "hidden"} fixed left-1/2 top-1/2 w-2/3 h-96 -translate-x-1/2 -translate-y-1/2 rounded-lg z-50 p-10 flex-col justify-start items-center gap-4 bg-white border-danger border-8`}>
        <h3 className="text-2xl text-black">هل أنت متأكد من حذف حسابك؟</h3>
        <p className="text-xl text-black leading-10 text-center">فريقنا حزين جدًا لرحيلك، ويتمنى لك المزيد من السعادة والنجاح في المستقبل. <br/>للتأكيد، يرجى إعادة كتابة كلمة <span className="bg-yellow-400 text-black rounded px-4 mx-2">DELETE</span> في الخانة أدناه .</p>
        <input className="border border-gray-400 w-2/3 h-10 rounded mt-3 text-center outline-none text-black" type="text" value={deleteConfermation} onChange={(e)=>{setDeleteConfermation(e.target.value)}}/>
        <div className="flex justify-center items-center gap-6 mt-auto">
            <button className="bg-danger font-bold text-xl w-44 py-2 rounded flex justify-center items-center gap-2 transition-colors disabled:bg-slate-300 disabled:text-black" onClick={handleDelete} disabled={disableBtn}><FiAlertTriangle /><span>{disableDelay !== 0 ?`انتظر ${disableDelay} ثواني`:'احذف'}</span></button>
            <button className="bg-main font-bold text-xl px-10 py-2 rounded" onClick={()=>{setShowDangerZone(false)}}>إلغاء</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccount