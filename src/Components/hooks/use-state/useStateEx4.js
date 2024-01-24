import React, { useState } from "react"



const UseStateExample4=()=>{

    const initialValue=["Orange","Kiwi","WaterMelon"]

    const [list,setList]=useState(initialValue)

    const handleAddFruit=()=>{

        const newFruit="Grapes"

        setList([...list,newFruit])

    }
    
    return(
        <>
        <h2>Hello</h2>
        <button onClick={handleAddFruit} >Click to add Fruits</button>

        <ol>
        {
            list.map((value,index)=>
            <React.Fragment key={index}>
            <li style={{fontWeight:"bold"}}>{value}</li>
            </React.Fragment>
            )
        }
        </ol>
        </>
    )
}
export default UseStateExample4