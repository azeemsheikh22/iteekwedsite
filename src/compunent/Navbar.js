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
        if (top > 200) {
            // setsticky("navbar navbar-expand-lg bg-body-white sticky")
            set2sticky("sticky")

        } else {
            // setsticky("navbar navbar-expand-lg bg-body-white")
            set2sticky("")

        }
    }

    return (
        <div className='nav-main'>
            <div className={sticky2}>
                        {/* <nav className={sticky}>
                <div className="container">
                    <a className="navbar-brand" href="#"><img src={logo} alt='' className='my-2'></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/products" className="nav-link" aria-current="page" >Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Collection</a>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link" aria-current="page" >Contact Us</NavLink>
                            </li>
                        </ul>
                        <i className=""></i>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item d-flex justify-content-center">
                                <i className="fa-solid fa-magnifying-glass nav-link" onClick={() => navigate("/products")}>
                                </i>

                            </li>

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
            </nav> */}

            <nav className={sticky}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} alt='' className='my-2'></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/products" className="nav-link" aria-current="page" >Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Collection</a>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link" aria-current="page" >Contact Us</NavLink>
                            </li>
                        </ul>
                        <i className=""></i>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item d-flex justify-content-center">
                                <i className="fa-solid fa-magnifying-glass nav-link" onClick={() => navigate("/products")}>
                                </i>

                            </li>

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
            </nav>



            {/* <div className='secondnavbar'>
                <nav className="navbar  navbar-expand-lg bg-body-tertiary ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">All categories</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body mx-auto">
                                <ul className="navbar-nav  justify-content-end flex-grow-1 pe-3 gap-2 text-start">

                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Good Deals</a>
                                    </li>
                              
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Gift finder</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Smartphones</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">iPhone</a>
                                    </li> <li className="nav-item">
                                        <a className="nav-link" href="#">Samsung Smartphones</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">MacBook</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">MacBook Pro</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">MacBook Air</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">iMac</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">iMac</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">iPad</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">iPad Pro</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">AirPods</a>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </nav>
            </div> */}

            <div className="slider-navbar">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    autoplay={{
                        delay: 3500,
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
                            slidesPerView: 11,
                            spaceBetween: 0,
                        },
                    }}
                    // navigation={true}
                    // modules={[Autoplay, Navigation]}
                    modules={[Autoplay]}

                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='card-1 g-0'>
                            <div className='container py-2'>
                                <div className='row text-start'>
                                    <div className='col text-center'>
                                        <h4>apple</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card-1 g-0'>
                            <div className='container py-2'>
                                <div className='row text-start'>
                                    <div className='col text-center'>
                                        <h4>samsung</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card-1 g-0'>
                            <div className='container py-2'>
                                <div className='row text-start'>
                                    <div className='col text-center'>
                                        <h4>huawei</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card-1 g-0'>
                            <div className='container py-2'>
                                <div className='row text-start'>
                                    <div className='col text-center'>
                                        <h4>oppo</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card-1 g-0'>
                            <div className='container py-2'>
                                <div className='row text-start'>
                                    <div className='col text-center'>
                                        <h4>realme</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card-1 g-0'>
                            <div className='container py-2'>
                                <div className='row text-start'>
                                    <div className='col text-center'>
                                        <h4>vivo</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card-1 g-0'>
                            <div className='container py-2'>
                                <div className='row text-start'>
                                    <div className='col text-center'>
                                        <h4>durata</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card-1 g-0'>
                            <div className='container py-2'>
                                <div className='row text-start'>
                                    <div className='col text-center'>
                                        <h4>xissive</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                     <SwiperSlide>
                        <div className='card-1 g-0'>
                            <div className='container py-2'>
                                <div className='row text-start'>
                                    <div className='col text-center'>
                                        <h4>motrola</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card-1 g-0'>
                            <div className='container py-2'>
                                <div className='row text-start'>
                                    <div className='col text-center'>
                                        <h4>sony</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card-1 g-0'>
                            <div className='container py-2'>
                                <div className='row text-start'>
                                    <div className='col text-center'>
                                        <h4>xiomie</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
                
            </div>
            </div>
        </div>
    )
}

export default Navbar
