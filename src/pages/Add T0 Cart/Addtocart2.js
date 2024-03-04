import React, { useState } from 'react'
import './Addtocart2.css'
import AddtocartNav from './AddtocartNav'
// import watch from '../../assiets/img/dsfsdfsdfsdf.png'
// import HEADPHONE from '../../assiets/img/alexunder-hess-bWZAPKm0zZE-unsplash-removebg-preview.png'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCartTotal, removeItem } from '../../features/Cartslice'

const Addtocart2 = () => {
    const [amount, setamount] = useState(1)
    const { cart, totalprice } = useSelector((state) => state.carts);

    console.warn("cart data", cart)
    const dispatch = useDispatch();

    const setdecrease = () => {
        amount > 1 ? setamount(amount - 1) : setamount(1);
    }

    const setincrease = () => {
        setamount(amount + 1)
    }



    const navigate = useNavigate();

    return (
        <div className='addtocart2-main'>
            <AddtocartNav />
            {
                cart.length >= 1 ? <>
                    <div className='container-fluid ps-lg-5 ps-0'>
                        <div className='row ps-lg-5'>
                            <div className='col-lg-8 left-box'>
                                <div className='container-fluid mt-5'>
                                    <div className='row text-start'>
                                        <h1>Your cart</h1>
                                    </div>
                                    {
                                        cart.map((item, index) => {
                                            return <div className='row mt-3' key={index}>
                                                <div className='col-lg-11'>
                                                    <div className='product-box'>
                                                        <div className='container my-3'>
                                                            <div className='row'>
                                                                <div className='col-lg-2 col-3 img-box'>
                                                                    <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/images/${item.images[0]}`} className='im' alt=''></img>
                                                                </div>
                                                                <div className='col-lg-6 col-9'>
                                                                    <div className='row text-start'>
                                                                        <h4>{item.display_name}</h4>
                                                                    </div>
                                                                    <div className='row text-start'>
                                                                        <h5>1-year minimum warranty</h5>
                                                                    </div>
                                                                    <div className='row text-start'>
                                                                        <h3>€{item.sell_price}</h3>
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-2 col-6 mt-3 mt-lg-0 ps-5 ps-lg-0 quantity-box'>
                                                                    <button onClick={setdecrease}><i className="fa-solid fa-minus"></i></button>
                                                                    <button className='count-btn'>{amount}</button>
                                                                    <button onClick={setincrease}><i className="fa-solid fa-plus"></i></button>
                                                                </div>
                                                                <div className='col mt-3 mt-lg-0'>
                                                                    <button className='btn btn-primary remove-btn' onClick={() => dispatch(removeItem(item))}>Remove</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }


                                    {/* <div className='row mt-3'>
                                <div className='col-lg-11'>
                                    <div className='product-box'>
                                        <div className='container my-3'>
                                            <div className='row'>
                                                <div className='col-lg-2 col-3 img-box'>
                                                    <img src={HEADPHONE} className='im' alt=''></img>
                                                </div>
                                                <div className='col-lg-6 col-9'>
                                                    <div className='row text-start'>
                                                        <h4>Apple Watch (Series 6) 2020 GPS 44 - Aluminium Space Gray - Sport band Black</h4>
                                                    </div>
                                                    <div className='row text-start'>
                                                        <h5>1-year minimum warranty</h5>
                                                    </div>
                                                    <div className='row text-start'>
                                                        <h3>€209.00</h3>
                                                    </div>
                                                </div>
                                                <div className='col-lg-2 col-6 mt-3 mt-lg-0 ps-5 ps-lg-0 quantity-box'>
                                                    <button onClick={setdecrease}><i className="fa-solid fa-minus"></i></button>
                                                    <button className='count-btn'>{amount}</button>
                                                    <button onClick={setincrease}><i className="fa-solid fa-plus"></i></button>
                                                </div>
                                                <div className='col mt-3 mt-lg-0'>
                                                    <button className='btn btn-primary remove-btn'>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                                </div>
                            </div>

                            <div className='col right-box'>
                                <div className='container-fluid mt-5'>
                                    <div className='row text-start'>
                                        <h1>Summary</h1>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col'>
                                            <div className='summary-box px-3 py-4'>
                                                <div className='container-fluid'>
                                                    {
                                                        cart.map((item, index) => {
                                                            return <div className='row g-2 mb-3' key={index}>
                                                                <div className='col-2 img-box'>
                                                                    <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/images/${item.images[0]}`} className='img-fluid' alt=''></img>
                                                                </div>
                                                                <div className='col-7 text-start'>
                                                                    <h4>{item.display_name}</h4>
                                                                </div>
                                                                <div className='col'>
                                                                    <h3>€{item.sell_price}</h3>
                                                                </div>
                                                            </div>
                                                        })
                                                    }

                                                    <div className='row line'>
                                                    </div>

                                                    <div className='row total-box mt-4'>
                                                        <div className='col text-start'>
                                                            <h5>Subtotal</h5>
                                                        </div>
                                                        <div className='col text-end'>
                                                            <h5>€{totalprice}</h5>

                                                        </div>
                                                    </div>

                                                    <div className='row line mt-3'>
                                                    </div>

                                                    <div className='row checkout-btn mt-4'>
                                                        <button className='btn btn-primary' onClick={() => navigate("/checkout")}>Checkout</button>
                                                    </div>
                                                    <div className='row mt-1'>
                                                        <h6><i className="fa-solid fa-lock"></i> Secure payment</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </> : <>
                        <div className='container cart-empty'>
                            <div className='row'>
                                <div className='col'>
                                    <div className='row'>
                                    <h1>There's nothing in your cart.</h1>
                                    </div>
                                    <div className='row mt-3'>
                                        <button className='btn btn-primary' onClick={() => navigate("/")}>Browse sweet deals</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </>
            }

        </div>
    )
}

export default Addtocart2