import React from "react"
import { useParams } from "react-router-dom";
const Products = ()=>{
   const {id} =  useParams()

    return <h1>Hello {id}</h1>
}
export default Products