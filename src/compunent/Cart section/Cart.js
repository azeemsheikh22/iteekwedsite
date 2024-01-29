import React, { useEffect } from 'react'
import './Cart.css'
import watch from '../../assiets/img/smart watches png.png'
import battery from '../../assiets/img/battery IPHOne.png'
import phone from '../../assiets/img/iphones_-2-removebg-preview.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addtocart, productsdata } from '../../features/Cartslice'
import { useSelector } from 'react-redux'

const Cart = () => {

    const navgate = useNavigate("")
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsdata())
    }, []);

    const items = useSelector((state) => state.carts);

    // console.warn(items)

    // const getdata = () => {
    //     axios.get("https://iteekapi.doctorsforhealth.co.uk/api/v1/products/similar/products")
    //         .then((res) => {
    //             // console.warn(res.data)
    //             // setsliderimg(res.data)
    //         }).catch((e) => {
    //             console.log(e)
    //         })
    // };

    


    return (
        <div className='cart-main py-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-2 col-6'>
                        <div className='text-line active'>
                            <h5>New Arrivals</h5>
                        </div>
                    </div>
                </div>

                <div className='row mt-5'>

                    {
                        items.products.map((item, index) => {
                          return  <div className='col-lg-3' key={index}>
                                <div className='cart-box'>
                                    <div className='container-fluid'>
                                        <div className='row cart-img-box' onClick={() => navgate(`/product-detail/${item.products[0].urlName}`)}>
                                            <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/images/${item.products[0].images[0]}`} alt='' className='img-fluid'></img>
                                        </div>
                                        <div className='row mt-3 text-start'>
                                            <h4>{item.products[0].name}</h4>
                                        </div>
                                        <div className='row text-start'>
                                            <h5>$ {item.products[0].sell_price}</h5>
                                        </div>
                                        <div className='row row-icon'>
                                            <div className='col-2 text-start'>
                                                <i className="fa-solid fa-cart-shopping" onClick={() => dispatch(addtocart(item))}></i>
                                            </div>
                                            <div className='col-2 '>
                                                <i className="fa-solid fa-eye" style={{ fontSize: "20px" }}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
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
                                        <i className="fa-solid fa-cart-shopping" onClick={() => dispatch(productsdata())}></i>
                                    </div>
                                    <div className='col-2 '>
                                        <i className="fa-solid fa-eye" style={{fontSize: "20px"}}></i>
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
                                        <i className="fa-solid fa-eye" style={{fontSize: "20px"}}></i>
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
                                        <i className="fa-solid fa-eye" style={{fontSize: "20px"}}></i>
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
                                        <i className="fa-solid fa-eye" style={{fontSize: "20px"}}></i>
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
                                        <i className="fa-solid fa-eye" style={{fontSize: "20px"}}></i>
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
                                        <i className="fa-solid fa-eye" style={{fontSize: "20px"}}></i>
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
                                        <i className="fa-solid fa-eye" style={{fontSize: "20px"}}></i>
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
                                        <i className="fa-solid fa-eye" style={{fontSize: "20px"}}></i>
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

export default Cart
