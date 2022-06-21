import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export const ProductDetails=()=>{
  const Token=JSON.parse(localStorage.getItem("token"))
  console.log("to",Token)
 const {id}=useParams()
 const [product,SetProduct]=useState({})
const navigate=useNavigate()
    useEffect(()=>{
     getProduct()
    },[])

    const getProduct=async(e)=>{
       
      try{
          let data=await fetch(`http://localhost:8080/products/${id}`
           ,{
            method:"GET",
            headers:{
              'Content-Type': 'application/json',
               'authorization' :`Bearer ${Token}`
            }
           
           })
            //.then((d)=>d.json()).catch(err=>console.log(err)).then((d1=> SetProduct(d1.data)))
          //  .catch(err=>console.log(err))
         
          console.log(data)
          if(data.ok===false)
         
           navigate("/login" )
          else{
           let d=await data.json()
           SetProduct(d.data)
           
          }
      }
      catch(err){
    
        console.log(err)
      }

    }
 
    return (
      
        <div style={{paddingTop:"100px",border:"1px solid red"}}>
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