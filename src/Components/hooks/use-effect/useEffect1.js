import axios from "axios"
import { useEffect, useState } from "react"
import Spinners from "../../loaders/spinners"






const UseEffect1=()=>{

    const [productsListing,setProductsListing]=useState([])

    useEffect(()=>{
        fetchData()

    },[])

    const fetchData=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            if(response.status===200){
                setProductsListing(response.data)
            }
        })
    }

    return(
        <>
    <h1>Use effect effect example</h1>
    {
        productsListing.length>0 ? productsListing.map((product)=><ProductListing key={product.id} data={product} />)
        : <Spinners/>
    }
        </>


    )
}

export default UseEffect1;

const ProductListing=({data} )=>{
    return(
        <>
        <div>
            <h3>{data.title}</h3>
        </div>
        </>
    )
}
