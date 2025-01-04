"use client"
import { useAppDispatch } from '../lib/reduxStore/hooks';
import { login, logOut, IUser } from '../lib/reduxStore/slice/userSlice';

import { UAParser } from 'ua-parser-js';


export default   function CookieProvider({children,hydratedCookie}: { children: React.ReactNode,hydratedCookie:IUser | boolean }) {
    
    const dispatch = useAppDispatch();

    if (hydratedCookie) {
      dispatch(login(hydratedCookie));
    } else {
      dispatch(logOut());
    }

      
    
    
    
    
    
  
  
  
    return <>{children}</>
  }