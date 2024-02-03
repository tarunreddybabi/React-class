import React from "react"

const ChildMemo=()=>{
    console.log("child memo");
    return(
        <>
        <h4>Good Morning</h4>
        </>
    )
}
export default React.memo(ChildMemo)