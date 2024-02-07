import axios from "axios"
const { useEffect } = require("react")
const { useState } = require("react")



const useAxios=(url="https://fakestoreapi.com/products")=>{
    const[data,setData]=useState(null)
    useEffect(()=>{
        handleFetchData()
    },[])

    const handleFetchData=()=>{
        axios.get(url)
        .then(response=>setData(response.data))
    }
    return [data]
}
export default useAxios