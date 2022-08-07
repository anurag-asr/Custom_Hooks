import React, { useEffect } from 'react'

export const useFetch = () => {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);

    const fetchData=()=>{
        setLoading(true);
        axios
        .get("url")
        .then((r)=>{
            setLoading(false)
            setData(r.data)
        })
        .catch((e)=>{
            setError(true)
            setLoading(false)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])
  return {data,loading,error}
}
