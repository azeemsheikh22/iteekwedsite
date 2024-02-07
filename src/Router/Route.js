import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/Single product page/Index'
import HomeLink from '../compunent/HomeLink'
import Addtocart from '../pages/Add T0 Cart/Addtocart'
import Products from '../pages/All Product/Products'
import Contact from '../compunent/Contact us/Contact'
import Register from '../pages/Sign up/Register'
import Login from '../pages/Sign up/Login'

const Routelink = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomeLink />}></Route>
                <Route path='/product-detail/:id' element={<Index />}></Route>
                <Route path='/addtocart' element={<Addtocart />}></Route>
                <Route path='/products/:id?' element={<Products />}></Route>
                <Route path='/contact' element={<Contact />}></Route>

                <Route path='/register' element={<Register />}></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </div>
    )
}

export default Routelink
