import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export const ProductDetails=()=>{
 const {id}=useParams()
 const [product,SetProduct]=useState({})
const navigate=useNavigate()
    useEffect(()=>{
     getProduct()
    },[])

    const getProduct=async(e)=>{
        console.log("jvhdjsgvds")
      try{
           let data=await fetch(`http://localhost:8080/products/${id}`);
           let d=await data.json()
           SetProduct(d.data)
           console.log(d.data)
      }
      catch(err){
        console.log(err)
      }

    }

    return (
        <div style={{paddingTop:"100px"}}>
          <div><img src={product.image_url}></img></div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.quantity}</div>
          <div>{product.description}</div>
          <button onClick={()=>{
           navigate(`/products/${product._id}/add`)
          }}>Add to Cart</button>
          <button onClick={()=>{
           navigate(`/products/${product._id}/edit`)
            }}>Edit</button>

        
        </div>
        
    
    )
}