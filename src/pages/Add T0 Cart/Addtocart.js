import React from 'react'
import './Addtocart.css'
import Navbar from '../../compunent/Navbar'
import Footer from '../../compunent/Footer/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../../features/Cartslice'
import { useNavigate } from 'react-router-dom'


const Addtocart = () => {

    const { cart, totalQuantity, totalprice } = useSelector((state) => state.carts);
    const navgate = useNavigate("")
    const dispatch = useDispatch();

    return (
        <div>
            <Navbar />
            <div className='addtocart-main'>
                <div className='container my-5'>
                    <div className='row text-start mb-2'>
                        <h2>Your cart items</h2>
                    </div>
                    <div className='border-line'>
                        <table className="table">
                            <thead>
                                <tr className=''>
                                    <th scope="col" className='first-text'><h3>IMAGE</h3></th>
                                    <th scope="col" className='first-text'><h3>PRODUCT NAME</h3></th>
                                    <th scope="col" className='first-text'><h3>PRICE</h3></th>
                                    <th scope="col" className='first-text'><h3>ACTION</h3></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart?.map((item, index) => {
                                        return <tr key={index}>
                                            <th scope="row" className='second-text '>
                                                <div className='img-box mx-auto'>
                                                    <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/images/${item.products ? item.products[0].images[0] : item.images[0]?item.images[0]:"null"}`} alt='' className='img-fluid' onClick={() => navgate(`/product-detail/${item.urlName}`)}></img>
                                                </div>
                                            </th>
                                            <td className='second-text pt-4'>
                                                <h4>{item.display_name ? item.display_name : item.name?item.name:"null"}</h4>
                                            </td>
                                            <td className='second-text pt-4'><h4>€ {item.products ? item.products[0].sell_price : item.sell_price?item.sell_price:0}</h4></td>
                                            <td className='second-text pt-4'>
                                                <h4><i className="fa-solid fa-xmark" onClick={() => dispatch(removeItem(item.products ? item.products[0].name : item.name?item.name:""))}></i></h4>
                                            </td>
                                        </tr>

                                    })
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Addtocart
