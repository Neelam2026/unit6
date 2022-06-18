import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"



export const ProductEdit=()=>{
    const {id} = useParams();
   const [value,setvalue] = useState({})
   const [data,setdata]=useState({})

   useEffect(()=>{
    const fetchdata = async()=>{
     try{
          const data=await fetch(`http://localhost:8080/products/${id}`)
          const d= await data.json()
          console.log(d.data)
          setdata(d.data)
     }
     catch(e){
        console.log(e)
     }
    }
    fetchdata()
   },[])
    
    const getdata=async()=>{
       
        try{
        await fetch(`http://localhost:8080/products/${id}/edit`,{
            method:"PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(value)

        })
        
        }
        catch(err){
            console.log(err)
        }
    }
    const settingkey=(e)=>{
        e.preventDefault()
      var  obj = {
         name : document.getElementById("name").value,
         description:  document.getElementById("description").value ,
         price :  document.getElementById("price").value,
         quantity:  document.getElementById("quantity").value,
         image_url:  document.getElementById("image").value
       }
       console.log(obj)
       setvalue(obj)
       getdata()
    }
   
    
    return (
        <div style={{paddingTop:"100px"}}>
        <form onSubmit={settingkey} >
           Name : <input id="name" placeholder={data.name} required></input><br/>
           Description : <input id="description" placeholder={data.description} required></input><br/>
           Price : <input id="price" placeholder={data.price} required></input><br/>
           Quantity : <input id="quantity" placeholder={data.quantity} required></input><br/>
           Image : <input id="image" placeholder={data.image_url} required></input><br/>
           <input type="submit"></input>
         </form>
        
        </div>
    )
}