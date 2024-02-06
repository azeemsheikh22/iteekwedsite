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

const HomeLink = () => {

    const [categorydata, setcategorydata] = useState([]);

    useEffect(() => {
        getdata();
    }, []);

    const getdata = () => {
        axios.get("https://iteekapi.doctorsforhealth.co.uk/api/v1/categories/enabled")
            .then((res) => {
                setcategorydata(res.data)
            }).catch((e) => {
                console.log(e)
            })
    };


    return (
        <div>
            <Navbar />
            <Hero />
            <Category categorydata={categorydata} />
            <Cart />
            <Topsale />
            <Category2 categorydata={categorydata} />
            <Saleitem />
            <Footer />
        </div>
    )
}

export default HomeLink
