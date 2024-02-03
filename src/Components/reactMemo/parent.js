import { useState } from "react"
import ChildMemo from "./child"


const ParentMemo=()=>{
    const [count,setCount]=useState(0)

    const handleIncrement=()=>{
        setCount(count+1)
    }

    return(
        <>
        <h3>{count}</h3>
        <button onClick={handleIncrement} >Increment</button>
        <ChildMemo/>
        </>
    )
    
}
export default ParentMemo