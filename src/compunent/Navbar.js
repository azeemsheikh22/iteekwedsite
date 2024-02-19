import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../assiets/img/logo.png'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../features/Cartslice'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Tabs } from '@material-ui/core'
import { Tab } from '@material-ui/core'
import { Box } from '@material-ui/core'

const Navbar = () => {

    const navigate = useNavigate();

    const { totalQuantity } = useSelector((state) => state.carts);
    const token = localStorage.getItem("usertoken")
    const [sticky, setsticky] = useState("navbar navbar-expand-lg bg-body-white")
    const [sticky2, set2sticky] = useState("")

    const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(getCartTotal());
    // }, [cart]);

    window.onscroll = () => {
        let temp;
        let top = window.scrollY;
        if (top > 100) {
            // setsticky("navbar navbar-expand-lg bg-body-white sticky")
            set2sticky("sticky")

        } else {
            // setsticky("navbar navbar-expand-lg bg-body-white")
            set2sticky("")

        }
    }

    const arry = ["Mobiles", "Repair", "Parts", "Accessories","Service Pack","INCELL Lcd","BATTERIE","SIM CARD","PREMIUM","Computer"]

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='nav-main'>
            <div className={sticky2}>
                <div className='nav-first'>
                    <nav className="navbar navbar-expand-lg bg-white px-lg-5">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#"><img src={logo} alt='' className='my-2'></img></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src={logo} alt='' className='my-2'></img></h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end align-items-center gap-lg-3 flex-grow-1 pe-3 ">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/contact">Contact Us</NavLink>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a className="nav-link" href="#">Contact Us</a>
                                        </li> */}
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Help</a>
                                        </li>

                                    </ul>
                                    <form className="d-flex mt-lg-0 mt-3 search-button" role="search">
                                        <input className="form-control me-2 " style={{ width: "400px", border: "1px solid black" }} type="search" placeholder="What are you looking for?" aria-label="Search" />
                                        <button className="btn btn-outline-success">Search <i className="fa-solid fa-arrow-right-long ms-1"></i></button>
                                    </form>

                                    <ul className="navbar-nav justify-content-end align-items-center mt-3 mt-lg-0 gap-lg- ms-lg-5 pe-3 ">
                                        <li className="nav-item">
                                            <div className="dropdown">
                                                <i className="fa-regular fa-circle-user nav-link " type="button" data-bs-toggle="dropdown" aria-expanded="false">

                                                </i>
                                                <ul className="dropdown-menu">
                                                    {
                                                        token ? <>
                                                            <li><a className="dropdown-item" href="#" onClick={() => {
                                                                localStorage.clear()
                                                            }}>Logout</a></li>
                                                            <li><a className="dropdown-item" href="#">Profile</a></li>
                                                        </> : <>
                                                            <li><NavLink className="dropdown-item" to="/login">Login</NavLink></li>
                                                            <li><NavLink className="dropdown-item" to="/register">Register</NavLink></li>
                                                        </>
                                                    }


                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item d-flex justify-content-center">
                                            <i className="fa-solid fa-cart-shopping nav-link" onClick={() => navigate("/addtocart")}>
                                            </i>
                                            <span className="cart-counter">{totalQuantity}</span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* <div className="slider-navbar px-lg-5" style={{ background: "#F9F9F9" }}>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        // pagination={{
                        //     clickable: true,
                        // }}

                        breakpoints={{
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 7,
                                spaceBetween: 0,
                            },
                            1024: {
                                slidesPerView: 12,
                                spaceBetween: 0,
                            },
                        }}
                        // navigation={true}
                        // modules={[Autoplay, Navigation]}
                        modules={[Autoplay]}

                        className="mySwiper"
                    >
                        {
                            arry.map((item, index) => {
                               return <SwiperSlide key={index}>
                                    <div className='card-1 g-0'>
                                        <div className='container py-2'>
                                            <div className='row text-start'>
                                                <div className='col text-center'>
                                                    <h4>{item}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>

                </div> */}

                {/* <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }} className='box-tab'>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                        className='tabs-tab'
                    >
                        {
                            arry.map((item) => {
                                return <Tab label={item} className='tab-main' />

                            })
                        }
                    </Tabs>
                </Box> */}
            </div>
        </div>
    )
}

export default Navbar
