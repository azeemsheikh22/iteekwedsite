import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/Single product page/Index'
import HomeLink from '../compunent/HomeLink'
import Addtocart from '../pages/Add T0 Cart/Addtocart'
import Products from '../pages/All Product/Products'
import Contact from '../compunent/Contact us/Contact'
import Register from '../pages/Sign up/Register'
import Login from '../pages/Sign up/Login'
import Detailpage from '../pages/Single product page/detailpage'
import Email from '../pages/Sign up/Email'
import Login2 from '../pages/Sign up/Login2'

const Routelink = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomeLink />}></Route>
                {/* <Route path='/product-detail/:id' element={<Index />}></Route> */}
                <Route path='/product-detail/:id' element={<Detailpage/>}></Route>
                <Route path='/addtocart' element={<Addtocart />}></Route>
                <Route path='/products/:id?' element={<Products />}></Route>
                <Route path='/contact' element={<Contact />}></Route>

                <Route path='/register' element={<Email />}></Route>
                <Route path='/login' element={<Login2 />}></Route>
            </Routes>
        </div>
    )
}

export default Routelink
