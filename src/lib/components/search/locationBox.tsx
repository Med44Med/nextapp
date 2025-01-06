'use client'

import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'

import { HiChevronUpDown } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";




const LocationBox = ({value,setValue,options,label,className}) => {

    const handleLocation= ()=>{
        setValue(options[43])
    }


    return (
    <div className={className}>
       <Listbox value={value} onChange={setValue}>
            <Label className="block text-sm font-bold uppercase text-gray-900">{label}</Label>
            <div className="relative flex items-center gap-1 mt-2 border-2 border-gray-300 rounded-md pr-3 z-20">
                <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-3 pl-3 pr-2 text-left text-gray-900 outline-none sm:text-sm/6">
                    <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                        <span className="block truncate text-base md:text-xl">{value.name}</span>
                    </span>
                    <HiChevronUpDown
                        aria-hidden="true"
                        className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                </ListboxButton>
                <FaLocationDot 
                        onClick={()=>handleLocation()}
                        className="transition-colors col-start-2 row-start-1 size-6 self-center justify-self-end text-gray-500 cursor-pointer hover:text-yellow-300"
                />
                <ListboxOptions
                    transition
                    className="absolute bottom-full z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                >
                        {options.map((option) => (
                            <ListboxOption
                            key={option?.id}
                            value={option}
                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-yellow-300 data-[focus]:text-white data-[focus]:outline-none"
                            >
                            <div className="flex items-center">
                                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                {option.name}
                                </span>
                            </div>

                            </ListboxOption>
                        ))}
                    </ListboxOptions>
            </div>
        </Listbox> 
    </div>
  )
}

export default LocationBox