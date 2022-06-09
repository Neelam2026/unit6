import axios from 'axios';
import{useEffect, useState} from 'react'
import "../styles/form.css"
export const Form=()=>{

    const [data,setdata]=useState({
        firstname:"",
        lastname:"",
        address:"",
        category:"",
        brand:"",
        products:""
       
      })

      const [table, setTable] = useState([]);
    //const [flag,setFlag]=useState(true)

    const handleChange = (e) => {
        setdata({...data,
       [ e.target.id]:e.target.value})
    }

      useEffect(()=>{
        getData()
      },[])

      const getData=async()=>{
        let res=await fetch("http://localhost:8080/data")
        let data= await res.json()
        console.log(data)
        setTable(data.data);
      }
     
      const storeData=async(data)=>{
       
        if(data.firstname==="" || data.lastname==="" || data.address===""||data.category==="" || data.brand==="" || data.products==="" ){
          alert("All fields are required")
        }
        else{
         
         await fetch("http://localhost:8080/data", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
      
        getData() 
      }
    }


    const Deletedata=async(id)=>{
    
      await fetch(`http://localhost:8080/data/${id}`, {
             method: "DELETE",
       
         })
      
        getData()   
    }

    const Updatedata=async(id)=>{
      console.log(id)
      await fetch(`http://localhost:8080/data/${id}`, {
             method: "PATCH",
             headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "address": "add2"}),
      })
       
      
      
        getData()   
    }

    return (
        <div id="main">
         <form>
        <span>firstname</span>
        <input id='firstname'  onChange={handleChange}  type="text"/>
        <br></br><span>lastname</span>
        <input id='lastname'  onChange={handleChange} type="text"/>
        <br></br><span>address</span>
        <input id='address'  onChange={handleChange} type="text"/>

        <br></br> <span>Category</span>
         <select id='category'  onChange={handleChange} >
           <option value="">Select Category</option>
           <option value="men">Men's</option>
           <option value="women">Women's</option>
           <option value="child">Child</option>
         </select>

         <br></br> <span>Brands</span>
         <select id='brand'  onChange={handleChange} >
           <option  value="">Select Brand</option>
           <option value="puma">Puma</option>
           <option value="adidas">Adidas</option>
           <option value="nike">Nike</option>
           <option value="blueberry">Blue Berry</option>
         </select>
         
         <br></br> <span>Products</span>
        <input id='products'  onChange={handleChange}  type="text"/>
         
         <br></br>
         <input onClick={(e)=>{e.preventDefault();
          storeData(data)}} type="submit" />
      </form>
      <table>
        <thead>
          <tr>
            <td>firstname</td>
            <td>lastname</td>
            <td>address</td>
            <td>category</td>
            <td>brand</td>
            <td>products</td>

            <td>id</td>
            <td>created at</td>
            <td>updated at</td>
            <td>delete</td>
            <td>update</td>
          </tr>
        </thead>
        <tbody>
           {table.map((ele,i)=>{
           return <tr key={ele._id}>
           <td>{ele.firstname}</td>
            <td>{ele.lastname}</td>
            <td>{ele.address}</td>
            <td>{ele.category}</td>
            <td>{ele.brand}</td>
            <td>{ele.products}</td>

            <td>{ele._id}</td>
            <td>{ele.createdAt}</td>
            <td>{ele.updatedAt}</td>
            <td style={{"background":"red"}} onClick={()=>Deletedata(ele._id)} >delete</td>
            <td  style={{"background":"yellowgreen"}} onClick={()=>Updatedata(ele._id)}>update</td>
        </tr>
           })}
        </tbody>
      </table>
    </div>
  );
       
 
}