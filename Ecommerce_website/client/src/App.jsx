
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Product } from './components/Product'
import { Order } from './components/order'
import {Navbar} from "./components/navbar"
import {User} from "./components/User"
import {Cart} from "./components/Cart"
import {Home} from "./components/Home"
import { ProductDetails } from './components/ProductsDetails'
import { AddProducts } from './components/AddProduct'
import {ProductEdit} from './components/productedit'
import {SignUp} from "./components/Signup"
import {Login } from "./components/Login"
function App() {
 

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Product></Product>}></Route>
        <Route path='/products/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/products/:id/edit' element={<ProductEdit></ProductEdit>}></Route>
        <Route path='/products/create' element={<AddProducts></AddProducts>}></Route>
        <Route path='/products/:id/add' element={<Order></Order>}></Route>
        <Route path='/users' element={<User></User>}></Route>
        <Route path='/carts' element={<Cart></Cart>}></Route>

        <Route path='/register' element={<SignUp></SignUp>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  )
}

export default App
