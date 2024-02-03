import { useMemo, useState } from "react"


const ChildUseMemo=({greeting,day})=>{
    const [age,setAge]=useState(22)
    const upperCaseMemorizedValue=useMemo(()=>{
        const upperCase=greeting.toUpperCase()
        return upperCase
    },[greeting])


    
    const ageHandler=()=>{
        setAge(age+1)
    }
    return(
        <>
        <h3>{upperCaseMemorizedValue} it's {day}</h3>
        <h3> Current age - {age}</h3>
        <button onClick={ageHandler} >Click to increase age</button>
        </>
    )
}

export default ChildUseMemo;