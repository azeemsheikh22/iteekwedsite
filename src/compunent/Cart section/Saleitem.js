import React, { useEffect, useState } from 'react'
import './Cart.css'
import watch from '../../assiets/img/smart watches png.png'
import battery from '../../assiets/img/battery IPHOne.png'
import phone from '../../assiets/img/iphones_-2-removebg-preview.png'
import { useNavigate } from 'react-router-dom'
import { addtocart } from '../../features/Cartslice'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const Saleitem = () => {

    const navgate = useNavigate("")
    const [sellproduct, setsellproduct] = useState([])

    const dispatch = useDispatch();
    useEffect(() => {
        getdata()
    }, [])

    const getdata = () => {
        axios.get("https://iteekapi.doctorsforhealth.co.uk/api/v1/products/sale/items")
            .then((res) => {
                console.warn("sell items",res.data)
                setsellproduct(res.data)
            }).catch((e) => {
                console.log(e)
            })
    };


    return (
        <div className='cart-main py-2'>
            <div className='container '>
                <div className='row'>
                    <div className='col-lg-2 col-6'>
                        <div className='text-line active'>
                            <h5>Sale Items</h5>
                        </div>
                    </div>
                </div>

                <div className='row mt-5'>
                    {
                        sellproduct?sellproduct.map((item,index) => {
                            return <div className='col-lg-3 col-sm-6'>
                            <div className='cart-box'>
                                <div className='container-fluid'>
                                    <div className='row cart-img-box' onClick={() => navgate(`/product-detail/${item.urlName ? item.urlName : ""}`)}>
                                        <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/images/${item.images? item.images[0] : ""}`} alt='' className='img-fluid'></img>
                                    </div>
                                    <div className='row mt-3 text-start'>
                                        <h4>{item.name ? item.name : "null"}</h4>
                                    </div>
                                    <div className='row text-start'>
                                        <h5>£ {item.sell_price?item.sell_price:0}</h5>
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
                        }):""
                    }
                
                </div>

                {/* <div className='row mt-5'>
                    <div className='col-lg-3'>
                        <div className='cart-box'>
                            <div className='container-fluid'>
                                <div className='row cart-img-box' onClick={() => navgate("/product-detail/:id")}>
                                    <img src={watch} alt='' className='img-fluid'></img>
                                </div>
                                <div className='row mt-3 text-start'>
                                    <h4>Lorem ipsum accessories nine</h4>
                                </div>
                                <div className='row text-start'>
                                    <h5>€3.67 - <span>€5.24</span></h5>
                                </div>
                                <div className='row row-icon'>
                                    <div className='col-2 text-start'>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </div>
                                    <div className='col-2 '>
                                        <i className="fa-solid fa-eye" style={{ fontSize: "20px" }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='cart-box'>
                            <div className='container-fluid'>
                                <div className='row cart-img-box'>
                                    <img src={battery} alt='' className='img-fluid'></img>
                                </div>
                                <div className='row mt-3 text-start'>
                                    <h4>Lorem ipsum accessories nine</h4>
                                </div>
                                <div className='row text-start'>
                                    <h5>€3.67 - <span>€5.24</span></h5>
                                </div>
                                <div className='row row-icon'>
                                    <div className='col-2 text-start'>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </div>
                                    <div className='col-2'>
                                        <i className="fa-solid fa-eye" style={{ fontSize: "20px" }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='cart-box'>
                            <div className='container-fluid'>
                                <div className='row cart-img-box'>
                                    <img src={phone} alt='' className='img-fluid'></img>
                                </div>
                                <div className='row mt-3 text-start'>
                                    <h4>Lorem ipsum accessories nine</h4>
                                </div>
                                <div className='row text-start'>
                                    <h5>€3.67 - <span>€5.24</span></h5>
                                </div>
                                <div className='row row-icon'>
                                    <div className='col-2 text-start'>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </div>
                                    <div className='col-2'>
                                        <i className="fa-solid fa-eye" style={{ fontSize: "20px" }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='cart-box'>
                            <div className='container-fluid'>
                                <div className='row cart-img-box'>
                                    <img src={watch} alt='' className='img-fluid'></img>
                                </div>
                                <div className='row mt-3 text-start'>
                                    <h4>Lorem ipsum accessories nine</h4>
                                </div>
                                <div className='row text-start'>
                                    <h5>€3.67 - <span>€5.24</span></h5>
                                </div>
                                <div className='row row-icon'>
                                    <div className='col-2 text-start'>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </div>
                                    <div className='col-2'>
                                        <i className="fa-solid fa-eye" style={{ fontSize: "20px" }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='cart-box'>
                            <div className='container-fluid'>
                                <div className='row cart-img-box'>
                                    <img src={watch} alt='' className='img-fluid'></img>
                                </div>
                                <div className='row mt-3 text-start'>
                                    <h4>Lorem ipsum accessories nine</h4>
                                </div>
                                <div className='row text-start'>
                                    <h5>€3.67 - <span>€5.24</span></h5>
                                </div>
                                <div className='row row-icon'>
                                    <div className='col-2 text-start'>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </div>
                                    <div className='col-2'>
                                        <i className="fa-solid fa-eye" style={{ fontSize: "20px" }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='cart-box'>
                            <div className='container-fluid'>
                                <div className='row cart-img-box'>
                                    <img src={phone} alt='' className='img-fluid'></img>
                                </div>
                                <div className='row mt-3 text-start'>
                                    <h4>Lorem ipsum accessories nine</h4>
                                </div>
                                <div className='row text-start'>
                                    <h5>€3.67 - <span>€5.24</span></h5>
                                </div>
                                <div className='row row-icon'>
                                    <div className='col-2 text-start'>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </div>
                                    <div className='col-2'>
                                        <i className="fa-solid fa-eye" style={{ fontSize: "20px" }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='cart-box'>
                            <div className='container-fluid'>
                                <div className='row cart-img-box'>
                                    <img src={battery} alt='' className='img-fluid'></img>
                                </div>
                                <div className='row mt-3 text-start'>
                                    <h4>Lorem ipsum accessories nine</h4>
                                </div>
                                <div className='row text-start'>
                                    <h5>€3.67 - <span>€5.24</span></h5>
                                </div>
                                <div className='row row-icon'>
                                    <div className='col-2 text-start'>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </div>
                                    <div className='col-2'>
                                        <i className="fa-solid fa-eye" style={{ fontSize: "20px" }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='cart-box'>
                            <div className='container-fluid'>
                                <div className='row cart-img-box'>
                                    <img src={battery} alt='' className='img-fluid'></img>
                                </div>
                                <div className='row mt-3 text-start'>
                                    <h4>Lorem ipsum accessories nine</h4>
                                </div>
                                <div className='row text-start'>
                                    <h5>€3.67 - <span>€5.24</span></h5>
                                </div>
                                <div className='row row-icon'>
                                    <div className='col-2 text-start'>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </div>
                                    <div className='col-2'>
                                        <i className="fa-solid fa-eye" style={{ fontSize: "20px" }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> */}
            </div>
        </div>
    )
}

export default Saleitem
