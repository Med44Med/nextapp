import {useState} from 'react';

import { FaRegFileAlt } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { FaPerson } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { FaShip } from "react-icons/fa";





const CategoryBox = ({className,value,setValue}) => {

    const iconType = ()=>{
        switch (value.name) {
            case 'persons':return <FaPerson className="size-8"/>
            case 'files':return <FaRegFileAlt className="size-8"/>
            case 'packages':return <FiPackage className="size-8"/>
            case 'merchandises':return <FaTruckFast className="size-8"/>
            case 'forwarding':return <FaShip className="size-8"/>
        
            default:return null
        }
    }

    const [show, setShow] = useState('packages')

    const handleGoBack = ()=>{
        setShow('list')
        setPersonsForm({
            name:'persons',
            number:1,
            disabilities:false,
            description:''
        })

    }

    //persons Form
    const [personsForm, setPersonsForm] = useState({
        name:'persons',
        number:1,
        disabilities:false,
        description:''
    })

    const handlePersonsSubmit =(e)=>{
        e.preventDefault()
        setValue(personsForm)     
        setShow('')

    }

    //files Form

    const [filesForm, setFilesForm] = useState({
        name:'files',
        title:'',
        description:''
    })

    const handleFilesSubmit =(e)=>{
        e.preventDefault()

        setValue(filesForm)  

        setShow('')
        setFilesForm({
            name:'files',
            title:'',
            description:''
        })

    }
    
    //packages Form

    const [packagesForm, setPackagesForm] = useState({
        name:'packages',
        title:'',
        dimensions:{
            width:1,
            length:1,
            height:1,
        },
        fragile:false,
        description:''
    })

    const handlePackagesSubmit =(e)=>{
        e.preventDefault()

        setValue(packagesForm)  

        setShow('')
        setPackagesForm({
            name:'packages',
            title:'',
            dimensions:{
                width:1,
                length:1,
                height:1,
            },
            fragile:false,
            description:''
        })

    }
  
    return (
    <div className={className}>
        <div
            onClick={()=>{setShow('list')}}
            className="w-full h-full bg-yellow-300 rounded-md border py-6 px-3 cursor-pointer flex items-center justify-center gap-3"
            >
            {iconType()}
            <span
                className="text-xl font-semibold uppercase"
            >
                {value.name}
            </span>
        </div>
        {show && <div className="fixed top-0 left-0 w-screen h-screen">
            <div 
                onClick={()=>{setShow('')}}
                className="absolute top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.4)]"
                >
            </div>
            {show === 'list' && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-xl shadow-xl bg-white p-10 grid grid-cols-3 grid-rows-2 gap-3 gap-y-3">
                <div 
                    onClick={()=>{setShow('persons')}}
                    className="group shadow-md rounded-md flex flex-col justify-center items-center gap-3 cursor-pointer transition-colors hover:bg-gray-500 hover:border-2 hover:border-yellow-300">
                    <FaPerson className="size-8 transition-colors group-hover:text-yellow-300"/>
                    <span className="text-xl font-bold group-hover:text-yellow-300">Persons</span>
                </div>
                <div 
                    onClick={()=>{setShow('files')}}
                    className="group shadow-md rounded-md flex flex-col justify-center items-center gap-3 cursor-pointer transition-colors hover:bg-gray-500 hover:border-2 hover:border-yellow-300">
                    <FaRegFileAlt className="size-8 transition-colors group-hover:text-yellow-300"/>
                    <span className="text-xl font-bold group-hover:text-yellow-300">Files</span>
                </div>
                <div 
                    onClick={()=>{setShow('packages')}}
                    className="group shadow-md rounded-md flex flex-col justify-center items-center gap-3 cursor-pointer transition-colors hover:bg-gray-500 hover:border-2 hover:border-yellow-300">
                    <FiPackage className="size-8 transition-colors group-hover:text-yellow-300"/>
                    <span className="text-xl font-bold group-hover:text-yellow-300">Packages</span>
                </div>
                <div className="group shadow-md rounded-md flex flex-col justify-center items-center gap-3 cursor-pointer transition-colors hover:bg-gray-500 hover:border-2 hover:border-yellow-300">
                    <FaTruckFast className="size-8 transition-colors group-hover:text-yellow-300"/>
                    <span className="text-xl font-bold group-hover:text-yellow-300">Merchandises</span>
                </div>
                <div className="group shadow-md rounded-md flex flex-col justify-center items-center gap-3 cursor-pointer transition-colors hover:bg-gray-500 hover:border-2 hover:border-yellow-300">
                    <FaShip className="size-8 transition-colors group-hover:text-yellow-300"/>
                    <span className="text-xl font-bold group-hover:text-yellow-300">Forwarding agent</span>
                </div>
                <div className="group shadow-md rounded-md flex flex-col justify-center items-center gap-3 cursor-pointer transition-colors hover:bg-gray-500 hover:border-2 hover:border-yellow-300">
                    <FiPackage className="size-8 transition-colors group-hover:text-yellow-300"/>
                    <span className="text-xl font-bold group-hover:text-yellow-300">Packages</span>
                </div>
            </div>}
            {show === 'persons' && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-xl shadow-xl bg-white p-10 flex flex-col justify-start items-center gap-3">
                <span
                    className="text-xl font-bold w-full"
                    >
                    Persons :
                </span>
                <form 
                    onSubmit={(e)=>{handlePersonsSubmit(e)}}
                    className="border-2 border-yellow-300 rounded-xl w-full grow py-4 px-48  flex flex-col justify-start items-start gap-5"
                    >
                        <div className="w-full flex flex-col justify-center items-start gap-3">
                            <label className="text-md font-bold">Number :</label>
                            <input 
                                type="number" 
                                name="number"
                                value={personsForm.number}
                                min={1} 
                                max={10}
                                onChange={(e)=>{setPersonsForm(perv=>({...perv,number:e.target.value}))}}
                                className="w-full py-1 rounded text-center border border-gray-500"
                            />
                            <div  className="w-full flex justify-start items-center gap-3">
                                <input type="checkbox" name="disabilities" defaultChecked={personsForm.disabilities} onChange={()=>(setPersonsForm(perv=>({...perv,disabilities:!personsForm.disabilities})))} className="rounded-full accent-black"/>
                                <span className="font-bold">there is a person with disabilities</span>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-3">
                            <label className="text-md font-bold">description :</label>
                            <textarea name="description" className="w-full h-36 resize-none text-left px-3 py-1 rounded border border-gray-500" />
                        </div>
                        <div className="mt-auto mb-3 w-full flex justify-end items-center gap-3">
                            <button onClick={()=>{handleGoBack()}} className="px-4 py-2 rounded bg-transparent border-2 border-yellow-300 text-md font-bold transition-colors hover:bg-yellow-400">Go back</button>
                            <button type="submit" className="px-10 py-2 rounded bg-yellow-300 border-2 border-yellow-300 text-md font-bold transition-colors hover:bg-yellow-400">Submit</button>
                        </div>
                </form>
            </div>}
            {show === 'files' && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-xl shadow-xl bg-white p-10 flex flex-col justify-start items-center gap-3">
                <span
                    className="text-xl font-bold w-full"
                    >
                    Files :
                </span>
                <form  
                    onSubmit={(e)=>{handleFilesSubmit(e)}}
                    className="border-2 border-yellow-300 rounded-xl w-full grow py-4 px-48  flex flex-col justify-start items-start gap-5"
                    >
                    <div className="w-full flex flex-col justify-center items-start gap-3">
                            <label className="text-md font-bold">Title :</label>
                            <input 
                                type="text" 
                                name="title"
                                value={filesForm.title}
                                onChange={(e)=>{setFilesForm(perv=>({...perv,title:e.target.value}))}}
                                className="w-full py-1 rounded text-center border border-gray-500"
                            />
                    </div>
                        <div className="w-full flex flex-col justify-center items-start gap-3">
                            <label className="text-md font-bold">description :</label>
                            <textarea 
                                name="description"
                                value={filesForm.description}
                                onChange={(e)=>{setFilesForm(perv=>({...perv,description:e.target.value}))}}
                                className="w-full h-36 resize-none text-left px-3 py-1 rounded border border-gray-500" 
                                />
                        </div>
                        <div className="mt-auto mb-3 w-full flex justify-end items-center gap-3">
                            <button onClick={()=>{handleGoBack()}} className="px-4 py-2 rounded bg-transparent border-2 border-yellow-300 text-md font-bold transition-colors hover:bg-yellow-400">Go back</button>
                            <button type="submit" className="px-10 py-2 rounded bg-yellow-300 border-2 border-yellow-300 text-md font-bold transition-colors hover:bg-yellow-400">Submit</button>
                        </div>
                </form>
            </div> }
            {show === 'packages' && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-xl shadow-xl bg-white p-10 flex flex-col justify-start items-center gap-3">
                <span
                    className="text-xl font-bold w-full"
                    >
                    Packages :
                </span>
                <form  
                    onSubmit={(e)=>{handlePackagesSubmit(e)}}
                    className="border-2 border-yellow-300 rounded-xl w-full grow py-4 px-48  flex flex-col justify-start items-start gap-5"
                    >
                        <div className="w-full flex flex-col justify-center items-start gap-3">
                            <label className="text-md font-bold">Title :</label>
                            <input 
                                type="text" 
                                name="title"
                                value={packagesForm.title}
                                onChange={(e)=>{setPackagesForm(perv=>({...perv,title:e.target.value}))}}
                                className="w-full py-1 rounded text-center border border-gray-500"
                            />
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-3">
                            <label className="text-md font-bold">dimensions :</label>
                            <div className="w-full flex justify-start items-center gap-3">
                                <label className="text-nowrap text-base">Length :</label>
                                <div className="flex justify-start items-center gap-1">
                                    <input type="number" min={0} step={10} value={packagesForm.dimensions.length} onChange={(e)=>{setPackagesForm(perv=>({...perv,dimensions:{...perv.dimensions,length:e.target.value}}))}} className="h-full w-14 border border-gray-500 pl-3 rounded"/>
                                    <label className="text-nowrap text-base">Cm</label>
                                </div>
                                <label className="text-nowrap text-base">Width :</label>
                                <div className="flex justify-start items-center gap-1">
                                    <input type="number" min={0} step={10} value={packagesForm.dimensions.width} onChange={(e)=>{setPackagesForm(perv=>({...perv,dimensions:{...perv.dimensions,width:e.target.value}}))}} className="h-full w-14 border border-gray-500 pl-3 rounded"/>
                                    <label className="text-nowrap text-base">Cm</label>
                                </div>
                                <label className="text-nowrap text-base">Height :</label>
                                <div className="flex justify-start items-center gap-1">
                                    <input type="number" min={0} step={10} value={packagesForm.dimensions.height} onChange={(e)=>{setPackagesForm(perv=>({...perv,dimensions:{...perv.dimensions,height:e.target.value}}))}} className="h-full w-14 border border-gray-500 pl-3 rounded"/>
                                    <label className="text-nowrap text-base">Cm</label>
                                </div>
                            </div>
                            <div  className="w-full flex justify-start items-center gap-3">
                                <input type="checkbox" name="fragile" defaultChecked={packagesForm.fragile} onChange={()=>(setPackagesForm(perv=>({...perv,fragile:!packagesForm.fragile})))} className="rounded-full accent-black"/>
                                <span className="font-bold">Fragile Packages</span>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-3">
                            <label className="text-md font-bold">description :</label>
                            <textarea 
                                name="description"
                                value={filesForm.description}
                                onChange={(e)=>{setFilesForm(perv=>({...perv,description:e.target.value}))}}
                                className="w-full h-36 resize-none text-left px-3 py-1 rounded border border-gray-500" 
                                />
                        </div>
                        <div className="mt-auto mb-3 w-full flex justify-end items-center gap-3">
                            <button onClick={()=>{handleGoBack()}} className="px-4 py-2 rounded bg-transparent border-2 border-yellow-300 text-md font-bold transition-colors hover:bg-yellow-400">Go back</button>
                            <button type="submit" className="px-10 py-2 rounded bg-yellow-300 border-2 border-yellow-300 text-md font-bold transition-colors hover:bg-yellow-400">Submit</button>
                        </div>
                </form>
            </div> }
        </div>}
    </div>
  )
}

export default CategoryBox