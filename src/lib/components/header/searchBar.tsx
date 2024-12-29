import React ,{useState,useRef,useEffect} from 'react'
import Link from 'next/link';
import { useRouter,useSearchParams} from 'next/navigation';

import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
function SearchBar() {
  
    const router = useRouter()
    
    
  
    const searchRef = useRef(null)
    const [inputFocused, setInputFocused] = useState<boolean>(false)

    const [recentSearch, setRecentSearch] = useState<[string]>([])
    const [search, setSearch] = useState<string>("")

    useEffect(() => {
        const storage = localStorage.getItem('recent-searches')
        setRecentSearch(JSON.parse(storage))
    }, [])
    
    useEffect(() => {
        localStorage.setItem('recent-searches',JSON.stringify(recentSearch))
        console.log(recentSearch);
        
    }, [recentSearch])
    
    
    
    
    const deleteSearch = (i)=>{
        console.log(i);
        
        if (i === 0) {
            const x = recentSearch.shift()
            console.log(recentSearch,x);
            setRecentSearch(x)
            
        } else {
            const y = recentSearch.splice(i,1)
            setRecentSearch(y)
        }
        
    //   setInputFocused(true)
    }
  
    const handleRecentSearch = ()=>{
    
      
    if(recentSearch.length === 0 || null){ return } else {
        return <div className="w-full flex flex-col justify-start items-start gap-2">
                    <h2 className="font-bold text-base">Recent Searches :</h2>
                    <ul className="flex justify-start items-center gap-3 flex-wrap">
                        {
                        recentSearch && (recentSearch.map((item, index)=>{
                            return  <li 
                                        key={index}
                                        className="px-3 py-2 flex items-center justify-center gap-1 bg-gray-300 rounded-3xl text-sm"
                                    >
                                        <Link href={`/?search=${item}`}>{item}</Link>
                                        <IoMdClose 
                                        onClick={()=>deleteSearch(index)}
                                        className="transition-all hover:scale-125 cursor-pointer"
                                        />
                                    </li>
                     }))
                     }
                   </ul>
                 </div>
       }
    }
    
    const handleSearch = ()=>{
      if (!search){ return;}
      setRecentSearch([...recentSearch, search])
        
  
      router.push(`/?search=${search}`) 
      setSearch("")
  
    }
  
  
  
    return (
    <div className="group grow relative flex justify-center items-center px-6">
          <input 
            type="text" 
            ref={searchRef} 
            placeholder="Search..." 
            onFocus={()=>setInputFocused(true)}
            onBlur={()=>setInputFocused(false)}
            value={search} 
            onChange={e=>setSearch(e.target.value)} 
            className="w-full h-3/4 rounded-3xl text-foreground px-6 text-black text-lg outline-none bg-gray-100 transition-colors group-hover:bg-gray-200 focus:bg-gray-200"
          />
          <button 
            onClick={()=>handleSearch()}
            className="absolute flex justify-center items-center right-10 top-1/2 -translate-y-1/2 w-10 h-3/4 rounded-full transition-colors hover:text-yellow-500"
            >
              <FaSearch />
          </button>
          <button 
            onClick={()=>{setSearch("")}}
            className={`absolute right-24 top-1/2 -translate-y-1/2 text-black ${search === "" && "hidden"}`}
          >
            <IoMdClose className="scale-150"/>
          </button>
          <div className={`absolute left-0 top-[102%] w-full h-96 mx-6 p-5 flex flex-col justify-start items-start bg-white shadow-md rounded transition-all ${!inputFocused && "translate-y-3 opacity-70 invisible"}`}
          >
            {
              handleRecentSearch()
            }
          </div>
        </div>
  )
}

export default SearchBar