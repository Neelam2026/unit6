import { useState } from "react"

export const User=()=>{
const [user,setuser]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        address:"",
       
})
const handleChange=(e)=>{
    setuser({...user,
        [e.target.id]:e.target.value,
    })
}
const  handlesubmit=async(e)=>{
    e.preventDefault()
   if(user.firstname==="" || user.lastname==="" || user.email===""|| user.address==="" ){
    alert("All fields are required")
  } else{
   
        await fetch("https://localhost:8080/users",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)

    })
  }
 }


    return (
        <div style={{paddingTop:"100px",textAlign:"center"}}>
          <form >
          <span>First Name </span><input id='firstname'  onChange={handleChange} placeholder="firstname"  type="text"/>
          <br></br>
          <span>last Name </span> <input id='lastname'  onChange={handleChange}  placeholder="lastname"  type="text"/>
          <br></br>
          <span>email</span><input id='email'  onChange={handleChange}  placeholder="email"  type="text"/>
          <br></br>
          <span>password</span><input id='password'  onChange={handleChange} placeholder="password"  type="text"/>
          <br></br>
          <span>address</span><input id='address'  onChange={handleChange} placeholder="address"  type="text"/>
          <br></br>
          <input  onClick={handlesubmit} type="submit" />
          </form>
        </div>
    )
}