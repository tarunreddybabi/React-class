import Button1 from "./button"



const ParentComponent=()=>{
    return (
        <>
        <h2>
            Hi friends
        </h2>
        <Button1 color="red">
            Submit
        </Button1>
        <Receiver>
            <h2>Hi I'm children</h2>
        </Receiver>
        </>
    )
}

export default ParentComponent

const Receiver=({children})=>{
    return (
        <>
        {children}
        </>
    )
}