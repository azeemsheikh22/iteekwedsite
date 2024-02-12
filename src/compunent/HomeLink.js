import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero section/Hero'
import Category from './Category/Category'
import Cart from './Cart section/Cart'
import Footer from './Footer/Footer'
import Topsale from './Cart section/Topsale'
import Saleitem from './Cart section/Saleitem'
import Category2 from './Category/Category2'
import axios from 'axios'
import Mostwanted from '../pages/Card slider/Mostwanted'

const HomeLink = () => {

    const [categorydata, setcategorydata] = useState([]);

    useEffect(() => {
        getdata();
    }, []);

    const getdata = () => {
        axios.get("https://iteekapi.doctorsforhealth.co.uk/api/v1/categories/sequence-maintained")
            .then((res) => {
                console.warn(res.data)
                setcategorydata(res.data)
            }).catch((e) => {
                console.log(e)
            })
    };


    return (
        <div>
            <Navbar />
            <Hero />
            <Mostwanted/>
            {/* <Category categorydata={categorydata} /> */}
            {/* <Cart />
            <Topsale />
            <Category2 categorydata={categorydata} />
            <Saleitem /> */}
            <Footer />
        </div>
    )
}

export default HomeLink
