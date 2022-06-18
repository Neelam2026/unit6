import { useState } from "react"
import {useNavigate} from "react-router-dom"
export const SignUp=()=>{
    const [user,setUser]=useState({})
const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            fetch("http://localhost:8080/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
               
            })
          navigate("/login")
         
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

    return(
        <div style={{paddingTop:"100px"}}>
           <form onSubmit={handleSubmit}>
           <input placeholder="Firstname " id="firstname" onChange={handleinput}></input>
           <input placeholder="Email "  id="email" onChange={handleinput}></input>
           <input placeholder="Password "  id="password" onChange={handleinput}></input>
           <input type="Submit"></input>


           </form> 
        </div>
    )
}