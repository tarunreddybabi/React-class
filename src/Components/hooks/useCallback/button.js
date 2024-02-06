import React from "react"


const ButtonComponentUseCallback=({handleChange=()=>{},title="button"})=>{
    console.log(title,"button render");
    return(
        <>
        <button onClick={handleChange} >{title}</button>
        
        </>
    )
}
export default React.memo(ButtonComponentUseCallback)