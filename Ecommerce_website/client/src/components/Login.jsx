import { useState } from "react"
import { useNavigate} from "react-router-dom"


export const Login=()=>{


   
const [user,setUser]=useState({})
const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            await fetch("http://localhost:8080/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
               
            }).then((d)=>d.json())
            .then(data=>{
           
            localStorage.setItem("token",JSON.stringify(data.Token))
            })
          //navigate("/products")
          navigation.goBack()
         
        }
        catch(e){
            console.log(e)
        }
    }
    const handleinput=(e)=>{
        setUser({
           ...user,
           [e.target.id]:e.target.value 
        }) 

    }


    return (
      <div style={{paddingTop:"100px"}}>
      <form onSubmit={handleSubmit}>
      
      <input placeholder="Email "  id="email" onChange={handleinput}></input>
      <input placeholder="Password"  id="password" onChange={handleinput}></input>
      <input type="Submit"></input>


      </form> 
   </div>
    )
}