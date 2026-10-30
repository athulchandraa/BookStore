import { useEffect, useState } from "react"

const useDebounce=(value,delay)=>{
    const[debouncer,setDebouncer]=useState(value)
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setDebouncer(value)
        },delay)
        return()=>clearTimeout(timer)
    },[value,delay])

    return debouncer
}

export default useDebounce