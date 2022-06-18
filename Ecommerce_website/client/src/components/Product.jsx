import { useEffect, useState } from "react"
import {useNavigate,useLocation,Link } from "react-router-dom"
import "../Styles/Products.css"

export const Product=()=>{
    // const search = useLocation().search;
    // const sort=new URLSearchParams(search).get('_sort') || "price"
    // const sortvalue =new URLSearchParams(search).get('_order') || "desc"

    let [pageNumber,setPageNumber]=useState(1)
    const [perpage,setDataperpage]=useState(12)
    const [countpage,setcountpage]=useState(1)
    const navigate=useNavigate()
    const [products,setProduct]=useState([])
useEffect(()=>{
    getData()
},[pageNumber])
const getData=async()=>{
   // let products= await fetch(`http://localhost:8080/products?_start=${pageNumber}&_end=${perpage+pageNumber}`)
    let products= await fetch(`http://localhost:8080/products/?page=${pageNumber}&pagesize=${perpage}`)
    let p=await products.json()
    //navigate(`/products?page=${pageNumber}&_end=${perpage+pageNumber}`)
    navigate(`/products/?page=${pageNumber}&pagesize=${perpage}`)
    setProduct(p.data)
    setcountpage(p.countpage)
    console.log("p",p.data,p.countpage)
}
const SortbyPrice=async(e)=>{
     // let products= await fetch(`http://localhost:8080/products?_sort=price&_order=${e.target.value}&_start=${pageNumber}&_end=${perpage+pageNumber}`)
    let products= await fetch(`http://localhost:8080/products?page=${pageNumber}&pagesize=${perpage}&sort=price&sortvalue=${e.target.value}`)
    let p=await products.json()
   // navigate(`/products?_sort=price&_order=${e.target.value}&_start=${pageNumber}&_end=${perpage+pageNumber}`)
    navigate(`/products?page=${pageNumber}&pagesize=${perpage}&sort=price&sortvalue=${e.target.value}`)
    setProduct(p.data)
    setcountpage(p.countpage)
    
}

const filterbyQTY=async(e)=>{
   
   //let products= await fetch(`https://ecommercewebsiteprac.herokuapp.com/products?filter=quantity&filtervalue=${e.target.value}`)
   let products= await fetch(`http://localhost:8080/products?filter=quantity&filtervalue=${e.target.value}`)
   let p=await products.json()
   navigate(`/products?page=${pageNumber}&pagesize=${perpage}&filter=quantity&filtervalue=${e.target.value}`)
   setProduct(p.data)
   setcountpage(p.countpage)
  
   
}
const Nextpage=()=>{
   if(pageNumber+1<=countpage)
    setPageNumber(pageNumber+1)
}
const Prevpage=()=>{
    if( pageNumber>1 &&countpage>1){
     setPageNumber(pageNumber-1)
    }
   
}



    return (
        <div className="box">
        <div>
            <select onChange={SortbyPrice}>
               <option value="">sort by price</option>
                <option value="-1">High</option>
                <option value="1">Low</option>

            </select>
        </div>


        <div>
            <select onChange={filterbyQTY}>
               <option value="">Filter by Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>

            </select>
        </div>

        
            <div className="Container">
            {products.map((e,i)=>{
                return (
                    <div key={e._id}>
                    <Link  to= {`/products/${e._id}`}>
                   
                    <img src={e.image_url}></img>
                     {e.name}
                     {/* <div>Details:{e.description}</div> */}
                     Qty: {e.quantity}
                     ₹ {e.price}
                    </Link></div>
                )
            })}

            </div>
            <button onClick={()=>Prevpage()}>Prev</button>
            <button  onClick={()=>Nextpage()}>Next</button>
        </div>
    )
} 