import React, { useCallback, useState } from "react"
import TextComponent from "./text"
import ButtonComponentUseCallback from "./button"


const UseCallbackExample=()=>{
    const[text,setText]=useState(true)
    const[salary,setSalary]=useState(100000)

    const textHandler=useCallback(()=>{
        setText(!text)
    },[text])


    const salaryIncrement=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])


    return(
        <>
        <TextComponent text={text?"Good morning" : "Good evening"}/>
        <ButtonComponentUseCallback handleChange={textHandler} title="Change Text" />
        <TextComponent text={salary}/>
        <ButtonComponentUseCallback handleChange={salaryIncrement} title="Increment Salary" />

        </>
    )
}

export default React.memo(UseCallbackExample)