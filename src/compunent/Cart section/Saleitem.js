import React, { useEffect, useState } from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
import { addtocart } from '../../features/Cartslice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const Saleitem = () => {

    const navgate = useNavigate("")
    const [sellproduct, setsellproduct] = useState([])
    const [productfound, setproductfound] = useState("")

    const dispatch = useDispatch();
    useEffect(() => {
        getdata()
    }, [])

    const getdata = () => {
        axios.get("https://iteekapi.doctorsforhealth.co.uk/api/v1/products/sale/items")
            .then((res) => {
                // console.warn("sell items", res.data)
                setsellproduct(res.data)
                setproductfound(res.data[0].name)
            }).catch((e) => {
                console.log(e)
            })
    };


    return (
        <div className='cart-main py-2'>
            <div className='container '>
                <div className='row'>
                    <div className='col-lg-3 col-6'>
                        <div className='text-line active'>
                            <h5>Sale Items</h5>
                        </div>
                    </div>
                </div>

                <div className='row mt-5'>
                    {
                        productfound ? sellproduct.map((item, index) => {
                            return <div className='col-lg-3 col-sm-6' key={index}>
                                <div className='cart-box'>
                                    <div className='container-fluid'>
                                        <div className='row cart-img-box' onClick={() => navgate(`/product-detail/${item.urlName ? item.urlName : ""}`)}>
                                            <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/images/${item.images ? item.images[0] : ""}`} alt='' className='img-fluid'></img>
                                        </div>
                                        <div className='row mt-3 text-start'>
                                            <h4>{item.name ? item.name : "null"}</h4>
                                        </div>
                                        <div className='row text-start'>
                                            <h5>€ {item.sell_price ? item.sell_price : 0}</h5>
                                        </div>
                                        <div className='row row-icon'>
                                            <div className='col-2 text-start'>
                                                <i className="fa-solid fa-cart-shopping" onClick={() => dispatch(addtocart(item))}></i>
                                            </div>
                                            <div className='col-2 '>
                                                <i className="fa-solid fa-eye" style={{ fontSize: "20px" }} onClick={() => navgate(`/product-detail/${item.urlName ? item.urlName : ""}`)}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }) : <>
                            
                        </>
                    }

                </div>
                {productfound ? <>

                </> : <>
                    <div className='row mt-3 third-row'>
                        <h2 style={{ color: 'rgb(57, 57, 57)', fontWeight: "bold", fontSize: "1.2rem" }}> NO PRODUCT FOUND </h2>
                    </div>
                </>}

            </div>
        </div>
    )
}

export default Saleitem
