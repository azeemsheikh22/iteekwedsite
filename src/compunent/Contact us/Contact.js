import React from 'react'
import './Contact.css'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className='contact-main'>
                <div className='top-header mt-2'>
                    <NavLink to="/" style={{ textDecoration: "none", color: "#5B5858", fontWeight: "500" }}>HOME</NavLink>
                    <a className='mx-2'>/</a>
                    <a>CONTACT</a>
                </div>
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col'>
                            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988756716!2d-0.26640578112070873!3d51.528739804788714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1701948948220!5m2!1sen!2s"
                                allowfullscreen=""
                                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    <div className='row mt-3'>
                        <div className='col-lg-4 mb-3'>
                            <div className='box-1'>
                                <div className='container-fluid'>
                                    <div className='row d-flex align-items-center justify-content-center mb-3'>
                                        <div className='col-2 text-end'>
                                            <i class="fa-solid fa-phone"></i>
                                        </div>
                                        <div className='col-6 text-start'>
                                            <h4>+012 345 678 102</h4>
                                        </div>
                                    </div>
                                    <div className='row d-flex align-items-center justify-content-center mb-3'>
                                        <div className='col-2 text-end'>
                                            <i class="fa-solid fa-envelope"></i>
                                        </div>
                                        <div className='col-6 text-start'>
                                            <h4>yourname@email.com</h4>
                                        </div>
                                    </div>
                                    <div className='row d-flex align-items-center justify-content-center mb-3'>
                                        <div className='col-2 text-end'>
                                            <i class="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className='col-6 text-start'>
                                            <h4>
                                                Address goes here,
                                                street, Crossroad 123.
                                            </h4>
                                        </div>
                                    </div>

                                    <div className='row mt-4'>
                                        <h2>Follow Us</h2>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='social-icon gap-2'>
                                            <i class="fa-brands fa-facebook"></i>
                                            <i class="fa-brands fa-twitter"></i>
                                            <i class="fa-brands fa-instagram"></i>
                                            <i class="fa-brands fa-youtube"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='box-2 px-lg-5'>
                                <div className='container px-lg-5'>
                                    <div className='row text-start'>
                                        <h2>Get In Touch</h2>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className='col-6'>
                                            <div class="mb-3 text-start">
                                                <input type="text" class="form-control" id="sadasdasd" placeholder="Name*"
                                                    aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div class="mb-3 text-start">
                                                <input type="email" class="form-control" id="sadasdasd" placeholder="Email*"
                                                    aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div class="mb-3 text-start">
                                                <input type="text" class="form-control" id="sadasdasd" placeholder="Subject*"
                                                    aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div class="mb-3 text-start">
                                                <textarea type="text" class="form-control" id="sadasdasd" placeholder="Subject*"
                                                    aria-describedby="emailHelp" rows="4" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className='col d-flex align-items-start'>
                                            <button className='btn btn-primary'>SEND</button>
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

export default Contact
