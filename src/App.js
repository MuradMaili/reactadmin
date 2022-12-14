import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import UserList from './pages/userList/UserList'
import User from './pages/user/User'
import NewUser from './pages/newUser/newUser'
import './app.css'
import ProductList from './pages/productList/ProductList'
import Product from './pages/product/Product'

const App = () => {
  return (
    <BrowserRouter>
      <Topbar/>
      <div className="container">
       <Sidebar/>
       <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/users" element={<UserList/>}/>
        <Route path="/user/:userId" element={<User/>}/>
        <Route path="/newuser" element={<NewUser/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
       </Routes>
       
      </div>
    </BrowserRouter>
    
      
    
  )
}

export default App