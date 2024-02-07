import React, { useEffect } from 'react'
import './Navbar.css'
import logo from '../assiets/img/logo.png'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../features/Cartslice'

const Navbar = () => {

    const navigate = useNavigate();

    const { totalQuantity } = useSelector((state) => state.carts);
    const token = localStorage.getItem("usertoken")

    const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(getCartTotal());
    // }, [cart]);

    return (
        <div className='nav-main'>
            <nav className="navbar navbar-expand-lg bg-body-white">
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
                                <NavLink to="/products" className="nav-link" aria-current="page" >Products</NavLink>
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
                                            </>:<>
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
        </div>
    )
}

export default Navbar
