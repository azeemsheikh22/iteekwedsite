import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLink from '../compunent/HomeLink'
import Products from '../pages/All Product/Products'
import Contact from '../compunent/Contact us/Contact'
import Detailpage from '../pages/Single product page/detailpage'
import Email from '../pages/Sign up/Email'
import Login2 from '../pages/Sign up/Login2'
import Addtocart2 from '../pages/Add T0 Cart/Addtocart2'
import Step2 from '../pages/Add T0 Cart/Checkout file/Step2'

const Routelink = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomeLink />}></Route>
                <Route path='/product-detail/:id' element={<Detailpage/>}></Route>
                <Route path='/addtocart' element={<Addtocart2 />}></Route>
                <Route path='/checkout' element={<Step2 />}></Route>
                <Route path='/products/:id?' element={<Products />}></Route>
                <Route path='/contact' element={<Contact />}></Route>

                <Route path='/register' element={<Email />}></Route>
                <Route path='/login' element={<Login2 />}></Route>
            </Routes>
        </div>
    )
}

export default Routelink
