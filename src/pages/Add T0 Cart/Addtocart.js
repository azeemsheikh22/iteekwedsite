import React from 'react'
import './Addtocart.css'
import Navbar from '../../compunent/Navbar'
import Footer from '../../compunent/Footer/Footer'
// import watch from '../../assiets/img/smart watches png.png'
import { useSelector,useDispatch } from 'react-redux'
import { removeItem } from '../../features/Cartslice'


const Addtocart = () => {

    const { cart, totalQuantity, totalprice } = useSelector((state) => state.carts);

    const dispatch = useDispatch();

    // if (cart[0]?.name) {
    //     localStorage.setItem("cart", JSON.stringify(cart))

    // }

    // const result = JSON.parse(localStorage.getItem("cart"))

    return (
        <div>
            <Navbar />
            <div className='addtocart-main'>
                <div className='container my-5'>
                    <div className='row text-start mb-2'>
                        <h2>Your cart items</h2>
                    </div>

                    <div className='row border-line'>
                        <div className='container-fluid'>
                            <div className='row first-text'>
                                <div className='col'>
                                    <h3>IMAGE</h3>
                                </div>
                                <div className='col'>
                                    <h3>PRODUCT NAME</h3>
                                </div>
                                <div className='col'>
                                    <h3>PRICE</h3>
                                </div>
                                <div className='col'>
                                    <h3>ACTION</h3>
                                </div>
                            </div>

                            {
                                cart?.map((item, index) => {

                                    return <div className='row second-text' key={index}>
                                        <div className='col'>
                                            <div className='img-box mx-auto'>
                                                <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/images/${item.products[0].images[0]}`} alt='' className='img-fluid'></img>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <h4>{item.name}</h4>
                                        </div>
                                        <div className='col'>
                                            <h4>$ {item.products[0].sell_price}</h4>
                                        </div>
                                        <div className='col'>
                                            <h4><i class="fa-solid fa-xmark" onClick={() => dispatch(removeItem(item.name))}></i></h4>
                                        </div>
                                    </div>
                                })
                            }




                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Addtocart
