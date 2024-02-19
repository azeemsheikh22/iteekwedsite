import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero section/Hero'
import Category from './Category/Category'
import Cart from './Cart section/Cart'
import Footer from './Footer/Footer'
import Topsale from './Cart section/Topsale'
import Saleitem from './Cart section/Saleitem'
// import Category2 from './Category/Category2'
import axios from 'axios'
import Mostwanted from '../pages/Card slider/Mostwanted'
import Recently from '../pages/Card slider/Recently'
import Topseller from '../pages/Card slider/Topseller'
import Slider from './logo Slider/Slider'
import Category1 from '../pages/Card slider/Category1'
import Category2 from '../pages/Card slider/Category2'
import Category3 from '../pages/Card slider/Category3'
import Cart3 from './Three cart/Cart3'

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
            <Slider />
            <Category1 />
            <Category2 />
            <Category3 />
            {/* <Mostwanted/> */}
            {/* <Recently/> */}
            <Topseller />
            {/* <Category categorydata={categorydata} /> */}
            {/* <Cart />
            <Topsale />
            <Category2 categorydata={categorydata} />
            <Saleitem /> */}
            <Cart3 />
            <Footer />
        </div>
    )
}

export default HomeLink
