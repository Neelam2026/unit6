
import{useEffect, useState} from 'react'
import "../styles/form.css"
export const Form=()=>{

    const [data,setdata]=useState({
      country:"",
      city:"",
      population:"",
      
       
      })

      const [table, setTable] = useState([]);
   
    const handleChange = (e) => {
        setdata({...data,
       [ e.target.id]:e.target.value})
    }

      useEffect(()=>{
        getData()
      },[])

      const getData=async()=>{
        let res=await fetch("http://localhost:8080/country")
        let data= await res.json()
        console.log(data)
        setTable(data.data);
      }
     
      const storeData=async(data)=>{
       
        if(data.country==="" || data.city==="" || data.population==="" ){
          alert("All fields are required")
        }
        else{
         
         await fetch("http://localhost:8080/country", {
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
    
      await fetch(`http://localhost:8080/country/${id}`, {
             method: "DELETE",
       
         })
      
        getData()   
    }

    const Updatedata=async(id)=>{
      console.log(id)
      await fetch(`http://localhost:8080/country/${id}`, {
             method: "PATCH",
             headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "population": "7896541"}),
      })
       getData()   
    }

    return (
        <div id="main">
         <form>
        <span>Country</span>
        <input id='country'  onChange={handleChange}  type="text"/>
        <br></br><span>City</span>
        <input id='city'  onChange={handleChange} type="text"/>
        <br></br><span>Population</span>
        <input id='population'  onChange={handleChange} type="text"/>

       
         <input onClick={(e)=>{e.preventDefault();
          storeData(data)}} type="submit" />
      </form>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>Country</td>
            <td>City</td>
            <td>Popultion</td>
            <td>Data_id</td>
            <td>created at</td>
            <td>updated at</td>
            <td>delete</td>
            <td>update</td>
          </tr>
        </thead>
        <tbody>
           {table.map((ele,i)=>{
           return <tr key={ele._id}>
            <td>{i+1}</td>
            <td>{ele.country}</td>
            <td>{ele.city}</td>
            <td>{ele.population}</td>
            
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