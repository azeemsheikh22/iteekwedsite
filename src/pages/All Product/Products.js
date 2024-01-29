import React from 'react'
import './Products.css'
import Navbar from '../../compunent/Navbar'
import Footer from '../../compunent/Footer/Footer'
import watch from '../../assiets/img/smart watches png.png'
import battery from '../../assiets/img/battery IPHOne.png'
import phone from '../../assiets/img/iphones_-2-removebg-preview.png'

const Products = () => {
    return (
        <div>
            <Navbar />
            <div className='product-main'>
                <div className='container my-5'>
                    <div className='row'>

                        <div className='col-md-3 col-12'>
                            <div className='container-fluid side-content'>
                                <div className='row'>
                                    <div className="col text-start">
                                        <label for="sadasd" className="form-label">Search</label>
                                        <input type="text" className="form-control" id="sadasd"
                                            aria-describedby="emailHelp" />
                                    </div>
                                </div>

                                <div className='row mt-4 text-start'>
                                    <label>Categories</label>
                                </div>
                            </div>
                        </div>


                        <div className='col'>
                            <div className='container-fluid'>
                                <div className='row '>
                                    <div className='col-lg-4'>
                                        <div className='cart-box'>
                                            <div className='container-fluid'>
                                                <div className='row cart-img-box' >
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
                                    <div className='col-lg-4'>
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
                                    <div className='col-lg-4'>
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
                                    <div className='col-lg-4'>
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
                                    <div className='col-lg-4'>
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
                                    <div className='col-lg-4'>
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
                                    <div className='col-lg-4'>
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
                                    <div className='col-lg-4'>
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

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Products
