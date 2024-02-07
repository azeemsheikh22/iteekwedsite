import React, { useEffect } from 'react'
import './Cart.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addtocart, productsdata } from '../../features/Cartslice'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios'

const Cart = () => {

    const navgate = useNavigate("")
    const dispatch = useDispatch();
    const userId = localStorage.getItem("userid")
    const token = localStorage.getItem("usertoken")

    useEffect(() => {
        dispatch(productsdata())
    }, []);

    const items = useSelector((state) => state.carts);

    const pageSize = 8;
    const page = 1;
    const pages = Math.ceil(items.products.length / pageSize);

    const pageData = items.products.slice((page * pageSize) - pageSize, page * pageSize);
    // const pageData = ""
    // console.log("pagedata",pageData);

    const handladdtocart = (e) => {
        console.log("cartss", e)
        if (userId) {
            dispatch(addtocart(e))
            axios.post(`https://iteekapi.doctorsforhealth.co.uk/api/v1/carts/${userId}`,{product:e._id,qty:1,sell_price:e.sell_price}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((res) => {
                console.log(res)
            }).catch((e) => {
                console.log(e)
            })

        } else {
            dispatch(addtocart(e))

        }
    }


    return (
        <div className='cart-main py-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-6'>
                        <div className='text-line active'>
                            <h5>New Arrivals</h5>
                        </div>
                    </div>
                </div>

                <div className='row mt-5'>
                    {
                        pageData.length >= 1 ? pageData.map((item, index) => {
                            return <div className='col-lg-3 col-sm-6' key={index}>
                                <div className='cart-box'>
                                    <div className='container-fluid'>
                                        <div className='row cart-img-box' onClick={() => navgate(`/product-detail/${item.products[0].urlName}`)}>
                                            <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/images/${item.products[0].images[0]}`} alt='' className='img-fluid'></img>
                                        </div>
                                        <div className='row mt-3 text-start'>
                                            <h4>{item.products[0].name}</h4>
                                        </div>
                                        <div className='row text-start'>
                                            <h5>€ {item.products[0].sell_price}</h5>
                                        </div>
                                        <div className='row row-icon'>
                                            <div className='col-2 text-start'>
                                                <i className="fa-solid fa-cart-shopping" onClick={() => handladdtocart(item.products[0])}></i>
                                                <ToastContainer />
                                            </div>
                                            <div className='col-2 '>
                                                <i className="fa-solid fa-eye" style={{ fontSize: "20px" }} onClick={() => navgate(`/product-detail/${item.products[0].urlName}`)}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }) : <>
                            <div className='col-lg-3'>
                                <Box sx={{ mt: -12 }}>
                                    <Skeleton width="100%" height="450px" />
                                </Box>
                            </div>
                            <div className='col-lg-3'>
                                <Box sx={{ mt: -12 }}>
                                    <Skeleton width="100%" height="450px" />
                                </Box>
                            </div>
                            <div className='col-lg-3'>
                                <Box sx={{ mt: -12 }}>
                                    <Skeleton width="100%" height="450px" />
                                </Box>
                            </div>
                            <div className='col-lg-3'>
                                <Box sx={{ mt: -12 }}>
                                    <Skeleton width="100%" height="450px" />
                                </Box>
                            </div>
                        </>
                    }
                </div>

                {pageData >= 1 ? <>
                    <div className='row mt-3 third-row'>
                        <NavLink to="/products" style={{ color: 'rgb(57, 57, 57)', fontWeight: "bold" }}> VIEW MORE PRODUCTS </NavLink>
                    </div>
                </> : <>
                    <div className='row mt-3 third-row'>
                        <h2 style={{ color: 'rgb(57, 57, 57)', fontWeight: "bold", fontSize: "1.2rem" }}> NO PRODUCT FOUND </h2>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default Cart
