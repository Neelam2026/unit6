
import { useState } from "react"
import { useParams } from "react-router-dom"


export const Order=()=>{
const{ id}=useParams()
const [data,setData]=useState({
    products_Id:id,
})
const  submitOrder=async()=>{
   

    try{
       await fetch("http://localhost:8080/orders",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)

    })
    }
    catch(e){
        console.log(e)
    }

}

const handleData=(e)=>{
    setData({
        ...data,
        [e.target.id]:e.target.value
    })  
}

console.log("data",data)
    return (
        <div style={{paddingTop:"100px"}}>
          <form>
          <input type="text" placeholder="userID" id="userID" onChange={handleData}></input>
          <input type="number" placeholder="Add Quantity" onChange={handleData} id="quantity"></input>
           <button onClick={(e)=>{ e.preventDefault()
              submitOrder()
           }}>Submit</button>  
           </form>
        </div>
    )
}