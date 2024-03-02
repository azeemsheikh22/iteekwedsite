import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero section/Hero'
import Footer from './Footer/Footer'
import axios from 'axios'
import Topseller from '../pages/Card slider/Topseller'
import Slider from './logo Slider/Slider'
import Category1 from '../pages/Card slider/Category1'
import Category2 from '../pages/Card slider/Category2'
import Category3 from '../pages/Card slider/Category3'
import Cart3 from './Three cart/Cart3'
import Category4 from '../pages/Card slider/Category4'
import Category5 from '../pages/Card slider/Category5'
import Category6 from '../pages/Card slider/Category6'
import CardSlider from './Customer card slider/CardSlider'

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
            <Category4 />
            <Category5 />
            <Category6 />
          
            <Topseller />
         
            <Cart3 />
            <CardSlider/>
            <Footer />
        </div>
    )
}

export default HomeLink
