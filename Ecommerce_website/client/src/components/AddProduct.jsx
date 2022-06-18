import { useState } from "react"

export const AddProducts=()=>{
const [product,setProduct]=useState({
     name:"",
    description:"",
    price:0 ,
    quantity:0,
    image_url:"",
})

const handleChange=(e)=>{
    setProduct({...product,
        [e.target.id]:e.target.value,
    })
}

const  handlesubmit=async(e)=>{
    e.preventDefault()
   if(product.name==="" ||product.description==="" ||product.price===0||product.quantity===0||product.image_url==="" ){
    alert("All fields are required")
  } else{
    console.log("product",product)
        await fetch("http://localhost:8080/products/create",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)

    })
  }
 }


    return(
        <div style={{paddingTop:"100px"}}>
            <form >
          <span>Product Name</span><input id='name'  onChange={handleChange} placeholder="Product name"  type="text"/>
          <br></br>
          <span>Description </span> <input id='description'  onChange={handleChange}  placeholder="description"  type="text"/>
          <br></br>
          <span>price</span><input id='price'  onChange={handleChange}  placeholder="price" type="number"/>
          <br></br>
          <span>quantity</span><input id='quantity'  onChange={handleChange} placeholder="quantity"  type="number"/>
          <br></br>
          <span>image_url</span><input id='image_url'  onChange={handleChange} placeholder="image_url"  type="text"/>
          <br></br>
          <input  onClick={handlesubmit} type="submit" />
          </form>
        </div>
    )
}