const express=require("express")
const app=express()

const  connect = require("../src/db")

const cors=require("cors")
app.use(cors())
app.use(express.json())

const citycontroller=require("./controllers/city.controller")
app.use("/country",citycontroller)


const port=process.env.PORT||8080
app.listen(port,async()=>{
    try{
      await connect()
      console.log(`listening on port ${port}`)
    }
    catch(error){
        console.log(error)
    }

} )