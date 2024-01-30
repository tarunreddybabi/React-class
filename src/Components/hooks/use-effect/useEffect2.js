import { useEffect, useState } from "react"



const UseEffect2=()=>{

    const [count,setCount]=useState(0)

    useEffect(()=>{
        updateCounterValue()
    },[])

    const updateCounterValue=()=>{
        setCount(count+1)
        document.title=`Count ${count}`
    }
    return(
        <>
        <h1>UseEffect2</h1>
        
        </>
    )

}
export default UseEffect2