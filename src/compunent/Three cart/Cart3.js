import React from 'react'
import './Cart3.css'
import image1 from '../../assiets/img/cart1.jpg'

const Cart3 = () => {
    return (
        <div className='cart3-main pt-2 pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 mb-3'>
                        <div className='box-1'>
                            <div className='row'>
                            <img src={image1} alt='' className='img-fluid'></img>
                            </div>
                            <div className='row mt-3'>
                                <h1>Venue Sourcing</h1>
                            </div>

                            <div className='row mt-1'>
                                <h4>We are always looking to expand our portfolio</h4>
                            </div>

                            <div className='row mt-2 mb-3'>
                                <h3>More Information <i class="fa-solid fa-arrow-right-long ms-1"></i></h3>
                            </div>
                            
                        </div>
                    </div>
                    <div className='col-lg-4 mb-3'>
                        <div className='box-1'>
                            <div className='row'>
                            <img src={image1} alt='' className='img-fluid'></img>
                            </div>
                            <div className='row mt-3'>
                                <h1>Wholesale</h1>
                            </div>

                            <div className='row mt-1'>
                                <h4>We are always looking to expand our portfolio</h4>
                            </div>

                            <div className='row mt-2 mb-3'>
                                <h3>More Information <i class="fa-solid fa-arrow-right-long ms-1"></i></h3>
                            </div>
                            
                        </div>
                    </div>
                    <div className='col-lg-4 mb-3'>
                        <div className='box-1'>
                            <div className='row'>
                            <img src={image1} alt='' className='img-fluid'></img>
                            </div>
                            <div className='row mt-3'>
                                <h1>Retail</h1>
                            </div>

                            <div className='row mt-1'>
                                <h4>We are always looking to expand our portfolio</h4>
                            </div>

                            <div className='row mt-2 mb-3'>
                                <h3>More Information <i class="fa-solid fa-arrow-right-long ms-1"></i></h3>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart3
