import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../assiets/img/logo.png'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { getCartTotal } from '../features/Cartslice'
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { Tabs } from '@material-ui/core'
// import { Tab } from '@material-ui/core'
// import { Box } from '@material-ui/core'


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

    // window.onscroll = () => {
    //     let temp;
    //     let top = window.scrollY;
    //     if (top > 100) {
    //         // setsticky("navbar navbar-expand-lg bg-body-white sticky")
    //         const value = top;
    //         set2sticky("")
    //         if (value < top) {
    //             set2sticky("sticky")
    //             console.log(top)


    //         }

    //     } else {
    //         // setsticky("navbar navbar-expand-lg bg-body-white")
    //         set2sticky("")

    //     }
    // }

    const arry = ["Mobiles Accessories", "Repair", "Tempered Glass", "Computer", "Computer Accessories", "Batterie", "Sim", "Electronics Accessories", "Audio"]

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    // Function to handle scroll event
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    };

    // Add scroll event listener using useEffect
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    return (
        <div className='nav-main'>
            <div className={`app ${visible ? 'sticky' : ''}`}>
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

                <div className='category-nav'>
                    <div className='container'>
                        <div className='col-lg-2 mt-2'>
                            <nav className="navbar">
                                <ul className="navbar-menu">
                                    <li className="navbar-item dropdown">
                                        <h4 style={{ fontWeight: "500" }} className='dropdown-toggle'>All items</h4>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-item-2">
                                                <div className='arror-icon'>
                                                    <a href="#" className="dropdown-link">Mobiles Accessories</a>
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </div>
                                                <ul className="submenu">
                                                    <li className="submenu-item">
                                                        <div className='arror-icon'>
                                                            <a href="#" className="submenu-link">Google pixel</a>
                                                            <i className="fa-solid fa-angle-right"></i>
                                                        </div>
                                                        <ul className="submenu2">
                                                            <li className="submenu-item">
                                                                <a href="#" className="submenu-link">Google pixel 3xl</a>
                                                            </li>
                                                            <li className="submenu-item">
                                                                <a href="#" className="submenu-link">Google pixel 4xl</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="submenu-item">
                                                        <div className='arror-icon'>
                                                            <a href="#" className="submenu-link">iPhone</a>

                                                            <i className="fa-solid fa-angle-right"></i>
                                                        </div>
                                                        <ul className="submenu2">
                                                            <li className="submenu-item">
                                                                <a href="#" className="submenu-link">iPhone 11 Pro Max</a>
                                                            </li>
                                                            <li className="submenu-item">
                                                                <a href="#" className="submenu-link">iPhone 12 Pro Max</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="submenu-item dropdown">
                                                        <div className='arror-icon'>
                                                            <a href="#" className="submenu-link">Infinix</a>


                                                            <i className="fa-solid fa-angle-right"></i>
                                                        </div>
                                                        <ul className="submenu2">
                                                            <li className="submenu-item">

                                                                <a href="#" className="submenu-link">Infinix smart 4</a>
                                                            </li>
                                                            <li className="submenu-item">
                                                                <a href="#" className="submenu-link">Infinix smart 5</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-item-2 dropdown">
                                                <div className='arror-icon'>
                                                    <a href="#" className="dropdown-link">Repair</a>
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </div>

                                                <ul className="submenu">
                                                    <li className="submenu-item">
                                                        <div className='arror-icon'>
                                                            <a href="#" className="submenu-link">Submenu 2.1</a>
                                                            <i className="fa-solid fa-angle-right"></i>
                                                        </div>
                                                    </li>
                                                    <li className="submenu-item">
                                                        <div className='arror-icon'>
                                                            <a href="#" className="submenu-link">Submenu 2.2</a>
                                                            <i className="fa-solid fa-angle-right"></i>
                                                        </div>
                                                    </li>
                                                    <li className="submenu-item dropdown">
                                                        <div className='arror-icon'>
                                                            <a href="#" className="submenu-link">Submenu 2.3</a>
                                                            <i className="fa-solid fa-angle-right"></i>
                                                        </div>
                                                        <ul className="submenu">
                                                            <li className="submenu-item">
                                                                <a href="#" className="submenu-link">Submenu 2.3.1</a>
                                                            </li>
                                                            <li className="submenu-item">
                                                                <a href="#" className="submenu-link">Submenu 2.3.2</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-item-2">
                                                <div className='arror-icon'>
                                                    <a href="#" className="dropdown-link">Tempered Glass</a>
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </div>
                                            </li>
                                            <li className="dropdown-item-2">
                                                <div className='arror-icon'>
                                                    <a href="#" className="dropdown-link">Computer</a>

                                                    <i className="fa-solid fa-angle-right"></i>
                                                </div>
                                            </li>
                                            <li className="dropdown-item-2">
                                                <div className='arror-icon'>
                                                    <a href="#" className="dropdown-link">Computer Accessories</a>
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </div>
                                            </li>
                                            <li className="dropdown-item-2">
                                                <div className='arror-icon'>
                                                    <a href="#" className="dropdown-link">Batterie</a>
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </div>
                                            </li>
                                            <li className="dropdown-item-2">
                                                <div className='arror-icon'>
                                                    <a href="#" className="dropdown-link">Sim</a>
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </div>
                                            </li>
                                            <li className="dropdown-item-2">
                                                <div className='arror-icon'>
                                                    <a href="#" className="dropdown-link">Electronics Accessories</a>
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </div>
                                            </li>
                                            <li className="dropdown-item-2">
                                                <div className='arror-icon'>
                                                    <a href="#" className="dropdown-link">Audio</a>
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>
                            </nav>

                        </div>
                        <div className='col-lg-10 d-flex gap-4 mt-2' style={{ overflow: "hidden" }}>
                            {
                                arry.map((item) => {
                                    return <h4>{item}</h4>

                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
