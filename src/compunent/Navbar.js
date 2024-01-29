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
                            <li className="nav-item ">
                                <a className="nav-link" aria-current="page" href="#">Contact Us</a>
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <i class="fa-regular fa-circle-user nav-link"></i>
                            </li>
                            {/* <li className="nav-item">
                                <i class="fa-regular fa-heart nav-link"></i>
                            </li> */}
                            <li className="nav-item">
                                <i class="fa-solid fa-cart-shopping nav-link" onClick={() => navigate("/addtocart")}>
                                <sup> {totalQuantity} </sup>
                                </i>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
