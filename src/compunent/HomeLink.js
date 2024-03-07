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
    const [category_wise, setcategory_wise] = useState([]);

    useEffect(() => {
        getdata();
    }, []);

    const getdata = () => {
        axios.get("https://iteekapi.doctorsforhealth.co.uk/api/v1/products/e-commerce/category_wise")
            .then((res) => {
                // console.warn("category wise", res.data)
                setcategory_wise(res.data)
            }).catch((e) => {
                console.log(e)
            })
    };


    return (
        <div style={{scrollBehavior: "smooth"}}>
            <Navbar />
            <Hero />
            <Slider />
            <Category1 data={category_wise[0]} />
            <Category2 data={category_wise[1]} />
            <Category3 data={category_wise[2]} />
            <Category4 data={category_wise[3]} />
            <Category5 data={category_wise[4]} />
            <Category6 data={category_wise[5]} />
            <Topseller />
            <Cart3 />
            <CardSlider />
            <Footer />
        </div>
    )
}

export default HomeLink
