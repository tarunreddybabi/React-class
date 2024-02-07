import { useState } from "react"


const useCounter=(initialCount=10,value=1)=>{
    const [count,setCount]=useState(initialCount)

    const incrementCount=()=>{
        setCount(count+value)
    }

    const decrementCount=()=>{
        setCount(count-value)
    }

    return [count,incrementCount,decrementCount]
}
export default useCounter