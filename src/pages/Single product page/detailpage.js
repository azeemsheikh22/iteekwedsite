import React, { useEffect } from 'react'
import './detailpage.css'
import Navbar from '../../compunent/Navbar'
import Footer from '../../compunent/Footer/Footer'
import ipad2 from '../../assiets/img/ipad2.png'
import HEADPHONE from '../../assiets/img/alexunder-hess-bWZAPKm0zZE-unsplash-removebg-preview.png'
import watch from '../../assiets/img/dsfsdfsdfsdf.png'
import tv from '../../assiets/img/tv.png'
import mac from '../../assiets/img/macbook.png'

const Detailpage = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }, [])

    return (
        <div>
            <Navbar />
            <div className='detailpage-main py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='row'>
                                <div className='col-2 d-flex align-items-center justify-content-center'>
                                    <div className='container'>
                                        <div className='row ms-auto mb-2'>
                                            <div className='img-box-1'>
                                                <img src={ipad2} alt=''></img>
                                            </div>
                                        </div>
                                        <div className='row ms-auto mb-2'>
                                            <div className='img-box-1'>
                                                <img src={HEADPHONE} alt=''></img>
                                            </div>
                                        </div>
                                        <div className='row ms-auto mb-2'>
                                            <div className='img-box-1'>
                                                <img src={watch} alt=''></img>
                                            </div>
                                        </div>
                                        <div className='row ms-auto mb-2'>
                                            <div className='img-box-1'>
                                                <img src={mac} alt=''></img>
                                            </div>
                                        </div>
                                        <div className='row ms-auto mb-2'>
                                            <div className='img-box-1'>
                                                <img src={tv} alt=''></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-10'>
                                    <div className='img-box-2'>
                                        <img src={ipad2} alt=''></img>
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

export default Detailpage
