const express=require("express")
const app=express()

const  connect = require("../src/db")

const cors=require("cors")
app.use(cors())
app.use(express.json())


const userController=require("./controllers/users.controller")
const brandsController=require("./controllers/brands.controller")
const productsController=require("./controllers/products.controller")
const categoryController=require("./controllers/category.controller")
const orderController=require("./controllers/Order.cotroller")
const {Register,Login}=require("./controllers/authController")
 app.use("/users" ,userController)
app.use("/brands" ,brandsController)
app.use("/products" ,productsController)
app.use("/category" ,categoryController)
app.use("/orders",orderController)
app.post("/register",Register)
app.post("/login",Login)


const port=process.env.PORT||8080
app.listen(port,async()=>{
    try{
      await connect()
    }
    catch(error){
        console.log(error)
    }
console.log(`listening on port ${port}`)
} )