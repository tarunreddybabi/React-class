import { useState } from "react"



const UseStateExample3=()=>{

    const [characterData,setCharacter]=useState("I'm True");

   const handleCharacter=()=>{
    setCharacter(currentState=>(currentState==="I'm True"? "I'm False":"I'm True"))
   };

    return(
        <>
        <h2 >{characterData}</h2>
        <button onClick={handleCharacter}>Click to alter </button>
        </>
    )
}
export default UseStateExample3