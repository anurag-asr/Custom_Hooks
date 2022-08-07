import React, { useState } from 'react'
import { useEffect } from 'react'

const useTimeout = (delay) => {
    const [ready,setReady]=useState(false)

    useEffect(()=>{
   let timer =setTimeout(()=>{
    setReady(true)
   },delay)
   return () => {
    clearTimeout(timer);
   };
    },[])


  return ready
}

export default useTimeout
