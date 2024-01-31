import { useEffect } from "react"



const UseEffect3=()=>{

    useEffect(()=>{
        addEvent()        
        return ()=>{
            removeEvent()            
        }

    },[])
    const addEvent=()=>{
        document.addEventListener("click",clickCapture)
    }
    const removeEvent=()=>{
        document.removeEventListener("click",clickCapture)
    }

    const clickCapture=(event)=>{
        console.log(event)
    }

    return(
        <>
        <h1>Use Effect-3</h1>
        </>
    )
}
export default UseEffect3