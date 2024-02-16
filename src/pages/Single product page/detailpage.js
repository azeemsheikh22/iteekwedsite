import React, { useEffect, useState } from 'react'
import './detailpage.css'
import Navbar from '../../compunent/Navbar'
import Footer from '../../compunent/Footer/Footer'
import ipad2 from '../../assiets/img/ipad2.png'
import HEADPHONE from '../../assiets/img/alexunder-hess-bWZAPKm0zZE-unsplash-removebg-preview.png'
import watch from '../../assiets/img/dsfsdfsdfsdf.png'
import tv from '../../assiets/img/tv.png'
import mac from '../../assiets/img/macbook.png'
import console from '../../assiets/img/console.png'
import air_pods from '../../assiets/img/air_pods-removebg-preview.png'


const Detailpage = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }, [])

    const arr = [HEADPHONE, ipad2, watch, tv, mac]

    const arry = [air_pods,console, HEADPHONE, watch,  ]

    const [i, seti] = useState(0)

    return (
        <div>
            <Navbar />
            <div className='detailpage-main pb-4 mt-5'>
                <div className='container mb-4'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='row'>
                                <div className='col-2 d-flex align-items-center justify-content-center'>
                                    <div className='container'>
                                        {
                                            arr.map((item, index) => {
                                                return <div className='row ms-auto mb-2' key={index} onClick={() => seti(index)}>
                                                    <div className='img-box-1'>
                                                        <img src={item} alt='' ></img>
                                                    </div>
                                                </div>
                                            })
                                        }


                                    </div>
                                </div>
                                <div className='col-10'>
                                    <div className='img-box-2'>
                                        <img src={arr[i]} alt=''></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6 content-main '>
                            <div className='row'>
                                <div className='col-lg-9 col-sm-9 col-12  text-start'>
                                    <h1>iPhone 13 128GB - Pink - Unlocked</h1>
                                </div>
                                <div className='col-lg col-sm col-12 text-lg-end text-sm-end text-start'>
                                    <h2>£335.00</h2>
                                </div>
                            </div>

                            <div className='row mt-2 text-start pe-lg-5'>
                                <p>It is a long established fact that a
                                    reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                            </div>

                            <div className='row mt-2'>
                                <div className='col text-start'>
                                <h4>Categories : Accessoire</h4>
                                </div>
                            </div>

                            <div className='row mt-3'>
                                <div className='col d-flex align-items-start'>
                                    <button className='btn btn-primary'>Add to cart</button>
                                </div>
                            </div>

                            <div className='row liness mt-4'></div>

                            <div className='row mt-3 text-start'>
                                <h3>Storage (GB)</h3>
                            </div>

                            <div className='row boxs mt-1'>
                                <div className='col-4'>
                                    <div className='box-1 pt-1'>
                                        <h4>128 GB</h4>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='box-1 pt-1'>
                                        <h4>256 GB</h4>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='box-1 pt-1'>
                                        <h4>512 GB</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='row mt-4 text-start'>
                                <h3>Colour</h3>
                            </div>

                            <div className='row boxs mt-1'>
                                <div className='col-4'>
                                    <div className='box-1 pt-1'>
                                        <h4><button style={{ background: "red" }}></button> Red</h4>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='box-1 pt-1'>
                                        <h4><button style={{ background: "blue" }}></button> Blue</h4>
                                    </div>
                                </div>

                                <div className='col-4 mb-3'>
                                    <div className='box-1 pt-1'>
                                        <h4><button style={{ background: "black" }}></button> Black</h4>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='box-1 pt-1'>
                                        <h4><button style={{ background: "green" }}></button> Green</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>


                <div className='related-product-main py-5'>
                    <div className='container'>
                        <div className='row text-start'>
                            <h2>Related products</h2>
                        </div>

                        <div className='row mt-4'>
                            {
                                arry.map((item,index) => {
                                   return <div className='col-lg-3 col-6 mb-3' key={index}> 
                                    <div className='card-1 g-0'>
                                        <div className='container py-3 px-lg-4'>
                                            <div className='row text-start'>
                                                <div className='col-lg-6 col text-center'>
                                                    <h4>Best Seller</h4>
                                                </div>
                                            </div>
    
                                            <div className='row img-box'>
                                                <img src={item} alt='' className='mx-auto'></img>
                                            </div>
    
                                            <div className='row text-start mt-2'>
                                                <h2>iPad 10.2 (2019) 7th gen 32 Go - WiFi</h2>
                                            </div>
                                            <div className='row text-start'>
                                                <h5>Starting at</h5>
                                            </div>
                                            <div className='row text-start '>
                                                <h2>£165.55</h2>
                                            </div>
                                        </div>
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

export default Detailpage
