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
       [ e.target.id]:[e.target.value]})
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
            
           await axios.post("http://localhost:8080/data",{data})
           .then(function (response) {
            console.log("response",response);
          })
          .catch(function (error) {
            console.log(error);
          });
      
        
      }
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
           return <tr key={ele.id}>
           <td>{ele.firstname}</td>
            <td>{ele.lastname}</td>
            <td>{ele.address}</td>
            <td>{ele.category}</td>
            <td>{ele.brand}</td>
            <td>{ele.products}</td>

            <td>{ele._id}</td>
            <td>{ele.createdAt}</td>
            <td>{ele.updatedAt}</td>
            <td style={{"background":"red"}}  >delete</td>
            <td  style={{"background":"yellowgreen"}}>update</td>
        </tr>
           })}
        </tbody>
      </table>
    </div>
  );
       
 
}