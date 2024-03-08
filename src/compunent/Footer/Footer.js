import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='main-footer pt-5 pb-4 mt-'>
            <div className='container px-lg-5'>
                {/* <div className='row text-start p-decs'>
                    <p>Hello there! We're Back Market, the leading online marketplace dedicated to refurbished devices. Our mission is to make restored devices mainstream. Making old the 'new new' so to speak.</p>
                </div> */}
                <div className='row text-center text-md-start'>
                    <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 text-start'>
                        <h5 className='mb-4'>Campany</h5>
                        <p className=''>
                            <a href='/'>Who are we?</a>
                        </p>
                        <p className='p-tag'>
                            <a href='/'>Trustpilot</a>
                        </p>
                        <p className='p-tag'>
                            <a href='/'>Blog</a>
                        </p>
                        
                    </div>

                    <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 text-start'>
                        <h5 className='mb-4'>Help</h5>
                        <p>
                            <a href='/'>Contact us</a>
                        </p>
                        <p className='p-tag'>

                            <a href='/'>Payments</a>

                        </p>
                        <p className='p-tag'>
                            <a href='/'>Delivery</a>
                        </p>
                       
                        <p className='p-tag'>
                            <a href='/'>Returns and refunds</a>
                        </p>
                       
                    </div>

                    <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 text-start'>
                        <h5 className='mb-4'>Law and order</h5>
                        <p >
                            <a href='/'>Terms of Use</a>

                        </p>
                       
                        <p className='p-tag'>

                            <a href='/'>Data protection</a>
                        </p>
                        <p className='p-tag'>

                            <a href='/'>Cookies</a>
                        </p>
                        <p className='p-tag'>

                            <a href='/'>Payments 100% secured</a>
                        </p>
                        
                    </div>

                    <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 text-start'>
                        <h5 className='mb-4'>Our apps</h5>
                        <p className=''>
                            <a href='/'>Trustpilot</a>
                        </p>
                        <p className='p-tag'>
                            <a href='/'>Glassdoor</a>
                        </p>
                        <p className='p-tag'>
                            <a href='/'>Medium</a>
                        </p>
                        <p className='p-tag'>
                            <a href='/'>Deep Fried Mars Bars</a>
                        </p>
                        {/* <p>
                            <i className='fas fa-home mr-3 me-2'></i>\\New York, NY 2333, US
                        </p> */}

                    </div>

                    <hr className='mb-4'></hr>
                    <div className='row align-atems-center'>
                        <div className='col-md-7 col-md-8'>
                            <h3 className=''>© 2023 - iteek.</h3>
                            {/* <div className='d-flex gap-3'>
                                <p>Terms & conditions</p>
                                <p>Cookies</p>
                                <p>Privacy</p>
                                <p>Complaints & compliments</p>
                            </div> */}


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

                            {/* <p className='text-lg-end'>Designed by <a href='https://www.cloudlabweb.com/' style={{ color: "gray" }} target='blank'>Cloud Lab Private Ltd</a></p> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
