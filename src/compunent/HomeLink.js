import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero section/Hero'
import Category from './Category/Category'
import Cart from './Cart section/Cart'
import Footer from './Footer/Footer'
import Topsale from './Cart section/Topsale'
import Saleitem from './Cart section/Saleitem'
import Category2 from './Category/Category2'

const HomeLink = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Category />
            <Cart />
            <Topsale />
            <Category2 />
            <Saleitem />
            <Footer />
        </div>
    )
}

export default HomeLink
