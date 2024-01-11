




function ApiCall3(){

    const fetchData=()=>{
        try{
            fetch("https://fakestoreapi.com/carts")
            .then(response=>response.json())
            .then(response=>console.log(response))
            .catch(error=>console.log(error))
        }
        catch(error){
            console.log(error)
            alert("something went wrong")
        }
        finally{
            console.log("stop loaders");
            alert("data loaded")
        }
    }

    return(
        <>
        <h2>Api call 3</h2>
        <button className="button" onClick={fetchData}> Click to get data</button>
        </>
    )
}
export default ApiCall3