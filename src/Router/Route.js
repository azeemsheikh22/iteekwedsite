import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/Single product page/Index'
import HomeLink from '../compunent/HomeLink'

const Routelink = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomeLink />}></Route>
                <Route path='/product-detail/:id' element={<Index />}></Route>
            </Routes>
        </div>
    )
}

export default Routelink
