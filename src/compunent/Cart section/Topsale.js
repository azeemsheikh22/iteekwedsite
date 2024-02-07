import React, { useEffect, useState } from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { addtocart } from '../../features/Cartslice'
import { useDispatch } from 'react-redux'
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const Topsale = () => {
    const navgate = useNavigate("")
    const [topproduct, settopproduct] = useState([])
    const [productfound, setproductfound] = useState(false)

    const dispatch = useDispatch();
    useEffect(() => {
        getdata()
    }, [])

    const getdata = () => {
        axios.get("https://iteekapi.doctorsforhealth.co.uk/api/v1/orders/top-selling")
            .then((res) => {
                // console.log("top sale",res.data)
                const pageSize = 8;
                const page = 1;
                const pages = Math.ceil(res.data.length / pageSize);
                const pageData = res.data.slice((page * pageSize) - pageSize, page * pageSize);
                settopproduct(pageData)
                if(res.data[0].name){
                    setproductfound(true)
                }
            }).catch((e) => {
                console.log(e)
            })
    };


    return (
        <div className='cart-main '>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-6'>
                        <div className='text-line active'>
                            <h5>Top Sales</h5>
                        </div>
                    </div>
                </div>

                <div className='row mt-5'>
                    {
                        productfound ? topproduct.map((item, index) => {
                            return <div className='col-lg-3 col-sm-6'>
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
                                <Skeleton width="100%"height="450px" />
                            </Box>
                           </div>
                        </>
                    }

                </div>

                {productfound ? <>
                    
                </> :<>
                <div className='row mt-3 third-row'>
                        <h2 style={{ color: 'rgb(57, 57, 57)', fontWeight: "bold", fontSize: "1.2rem" }}> NO PRODUCT FOUND </h2>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default Topsale
