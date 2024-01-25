import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='main-footer pt-5 pb-4 mt-'>
            <div className='container text-center text-md-start'>
                <div className='row text-center text-md-start'>
                    <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                        <h5 className='text-weight-bold '>iteek</h5>
                        <p>It is a long established fact that a<br /> reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                    </div>

                    <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                        <h5 className='text-uppercase text-weight-bold mb-4'>about us</h5>
                        <p>
                            <a href='/'>About us</a>

                        </p>
                        <p>

                            <a href='/'>Store location</a>

                        </p>
                        <p>
                            <a href='/'>Contact</a>
                        </p>
                        <p>
                            <a href='/'>Orders track</a>
                        </p>
                    </div>

                    <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
                        <h5 className='text-uppercase text-weight-bold mb-4'>Usefull link</h5>
                        <p>
                            <a href='/'>Returns</a>

                        </p>
                        <p>

                            <a href='/'>Support Policy</a>

                        </p>
                        <p>

                            <a href='/'>Size guide</a>
                        </p>
                        <p>

                            <a href='/'>FAQs</a>
                        </p>
                    </div>

                    <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
                        <h5 className='text-uppercase text-weight-bold mb-4'>Contact</h5>
                        <p>
                            <i className='fas fa-home mr-3 me-2'></i>New York, NY 2333, US
                        </p>
                        <p>
                            <i className='fas fa-envelope mr-3 me-2'></i>iteek@gmail.com
                        </p>
                        <p>
                            <i className='fas fa-phone mr-3 me-2'></i>+92 232131123
                        </p>
                        <p>
                            <i className='fas fa-print mr-3 me-2'></i>+1 232 656 565
                        </p>
                    </div>

                    <hr className='mb-4'></hr>
                    <div className='row align-atems-center'>
                        <div className='col-md-7 col-md-8'>
                            <p className='fw-bold text-black'>© 2023 - iteek.</p>
                            <div className='d-flex gap-3'>
                                <p>Terms & conditions</p>
                                <p>Cookies</p>
                                <p>Privacy</p>
                                <p>Complaints & compliments</p>
                            </div>


                        </div>
                        <div className='col-md-5 col-lg-4'>
                            <div className='text-center text-md-end'>
                                <ul className='list-unstyled list-inline'>
                                    <li className='list-inline-item'>
                                        <a href='/' className='btn-floating btn-sm  a-icon text-black'><i className='fab fa-facebook'></i></a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a href='/' className='btn-floating btn-sm a-icon text-black'><i className='fab fa-twitter'></i></a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a href='/' className='btn-floating btn-sm a-icon text-black'><i className='fab fa-youtube'></i></a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a href='/' className='btn-floating btn-sm a-icon text-black'><i className='fab fa-instagram'></i></a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a href='/' className='btn-floating btn-sm a-icon text-black'><i className='fab fa-linkedin'></i></a>
                                    </li>
                                </ul>
                            </div>

                            <p className='text-lg-end'>Designed by <a href='https://www.cloudlabweb.com/' style={{ color: "gray" }} target='blank'>Cloud Lab Private Ltd</a></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
