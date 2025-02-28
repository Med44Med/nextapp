'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/reduxStore/store'

export default function StoreProvider({children}: { children: React.ReactNode }) {
  
  
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }
  

  



  return <Provider store={storeRef.current}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
              {children}
            {/* </PersistGate> */}
         </Provider>
}