import React, { useEffect, useState } from 'react'
import './detailpage.css'
import Navbar from '../../compunent/Navbar'
import Footer from '../../compunent/Footer/Footer'
import ipad2 from '../../assiets/img/ipad2.png'
import HEADPHONE from '../../assiets/img/alexunder-hess-bWZAPKm0zZE-unsplash-removebg-preview.png'
import watch from '../../assiets/img/dsfsdfsdfsdf.png'
import tv from '../../assiets/img/tv.png'
import mac from '../../assiets/img/macbook.png'
// import console from '../../assiets/img/console.png'
import air_pods from '../../assiets/img/air_pods-removebg-preview.png'
import { Rating } from '@mui/material'
import delivery from '../../assiets/img/delivery_709790.png'
import welcomedesign from '../../assiets/img/welcome1.png'

const Detailpage = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }, [])

    const arr = [HEADPHONE, ipad2, watch, tv, mac,]

    const arry = [air_pods,HEADPHONE, watch,mac,HEADPHONE, ipad2, tv, mac];

    const [value, setValue] = useState(2);
    const [imagefix, setimagefix] = useState("row");

    const [i, seti] = useState(0)

    // window.onscroll = () => {
    //     let top = window.scrollY;
    //     if (top > 10) {
    //     //  console.log(arry)
    //     setimagefix("row img-box2")
    //     if(top >= 400){
    //     setimagefix("row")

    //     }
    //     } else {
        

    //     }
    // }

    console.log(arry)

    return (
        <div>
            <Navbar />
            <div className='detailpage-main pb-4 mt-5'>
                <div className='container mb-4'>
                    <div className='row'>
                        <div className='col-lg-6 img-box2'>
                            <div className={imagefix}>
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

                        <div className='col-lg-6 content-main px-lg-4'>
                            <div className='row'>
                                <div className='col-lg-9 col-sm-9 col-12  text-start'>
                                    <h1>iPhone 13 128GB - Pink - Unlocked</h1>
                                </div>
                                <div className='col-lg col-sm col-12 text-lg-end text-sm-end text-start'>
                                    <h2>€335.00</h2>
                                </div>
                            </div>

                            <div className='row mt-2 text-start pe-lg-5'>
                                <p>It is a long established fact that a
                                    reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                            </div>

                            <div className='row mt-2'>
                                <div className='col text-start'>
                                    <h4>Categories: Accessoire</h4>
                                </div>
                            </div>

                            <div className='row mt-1'>
                                <div className='col d-flex align-items-center'>
                                    <Rating name="read-only" value={value} readOnly />
                                </div>
                                <div className='col d-flex align-items-center justify-content-end'>
                                    <button className='btn btn-primary'>Add to cart</button>
                                </div>
                            </div>
                            <div className='row liness mt-3'></div>
                            <div className='row delivery-row mt-3 '>
                                <div className='col d-flex gap-3'>
                                    <img className='img-fluid' src={delivery} alt=''></img>
                                    <h3 className='pt-1'>Free delivery by 23 Feb - 26 Feb</h3>
                                </div>
                            </div>

                            <div className='row liness mt-4'></div>

                            <div className='row mt-3 text-start'>
                                <h3>Condition</h3>
                            </div>

                            <div className='row boxs'>
                                <div className='col-4'>
                                    <button className='btn btn-primary active'>Fair<br /><span>€307.86</span></button>
                                </div>
                                <div className='col-4'>
                                    <button className='btn btn-primary button-normal'>Good<br /><span>€307.86</span></button>
                                </div>
                                <div className='col-4'>
                                    <button className='btn btn-primary button-normal'>Excellent<br /><span>€307.86</span></button>
                                </div>
                            </div>

                            <div className='row mt-4 text-start'>
                                <h3>Colour</h3>
                            </div>

                            <div className='row boxs'>
                                <div className='col-4 mb-2'>
                                    <button className='btn btn-primary active d-flex align-items-center justify-content-center py-2'><button style={{ background: "black" }} className='color-btn me-2'></button> Black</button>
                                </div>

                                <div className='col-4'>
                                    <button className='btn btn-primary button-normal d-flex align-items-center justify-content-center py-2'><button style={{ background: "blue" }} className='color-btn me-2'></button> Blue</button>
                                </div>

                                <div className='col-4'>
                                    <button className='btn btn-primary button-normal d-flex align-items-center justify-content-center py-2'><button style={{ background: "red" }} className='color-btn me-2'></button> Red</button>
                                </div>

                                <div className='col-4'>
                                    <button className='btn btn-primary button-normal d-flex align-items-center justify-content-center py-2'><button style={{ background: "Green" }} className='color-btn me-2'></button> Green</button>
                                </div>
                            </div>

                            <div className='row mt-4 text-start'>
                                <h3>Colour</h3>
                            </div>

                            <div className='row boxs'>
                                <div className='col-4 mb-2'>
                                    <button className='btn btn-primary active d-flex align-items-center justify-content-center py-2'><button style={{ background: "black" }} className='color-btn me-2'></button> Black</button>
                                </div>

                                <div className='col-4'>
                                    <button className='btn btn-primary button-normal d-flex align-items-center justify-content-center py-2'><button style={{ background: "blue" }} className='color-btn me-2'></button> Blue</button>
                                </div>

                                <div className='col-4'>
                                    <button className='btn btn-primary button-normal d-flex align-items-center justify-content-center py-2'><button style={{ background: "red" }} className='color-btn me-2'></button> Red</button>
                                </div>

                                <div className='col-4'>
                                    <button className='btn btn-primary button-normal d-flex align-items-center justify-content-center py-2'><button style={{ background: "Green" }} className='color-btn me-2'></button> Green</button>
                                </div>
                            </div>

                            
                        </div>
                    </div>


                </div>

                <div className='related-product-main pt-5 pb-4'>
                    <div className='container'>
                        <div className='row text-start'>
                            <h2>You may also like</h2>
                        </div>

                        <div className='row mt-4'>
                            {
                                arry.map((item, index) => {
                                    return <div className='col-lg-3 col-6 mb-3' key={index}>
                                        <div className='card-1 g-0'>
                                            <div className='container py-3 px-lg-4'>
                                                <div className='row text-start'>
                                                    <div className='col-lg-6 col text-center'>
                                                        <h4>Best Seller</h4>
                                                    </div>
                                                </div>

                                                <div className='row img-box'>
                                                    <img src={item} alt='' className='mx-auto img-fluid'></img>
                                                </div>

                                                <div className='row text-start mt-2'>
                                                    <h2>iPad 10.2 (2019) 7th gen 32 Go - WiFi</h2>
                                                </div>
                                                <div className='row text-start'>
                                                    <h5>Starting at</h5>
                                                </div>
                                                <div className='row text-start '>
                                                    <h2>€165.55</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
                {/* <div className='related-product-main pb-4'>
                    <div className='container'>
                        <div className='row text-start'>
                            <h2>Related products</h2>
                        </div>

                        <div className='row mt-4'>
                            {
                                arry.map((item, index) => {
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
                                                    <h2>€165.55</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div> */}


                <div className='welcome-main '>
                    <div className='container mb-5'>
                        <div className='row'>
                            <div className='col'>
                                <div className='box'>
                                    <div className='container'>
                                        <div className='row my-lg-0 my-4'>
                                            <div className='col-lg-6 content-center text-start ps-5'>
                                                <div className='container'>
                                                    <div className='row'>
                                                        <h1>Welcome to iteek</h1>
                                                    </div>

                                                    <div className='row mt-2'>
                                                        <p>The best prices for high-quality renewed
                                                            goods by sellers we’ve checked and vetted. We
                                                            don’t mind if you Google us.</p>
                                                    </div>

                                                    <div className='row mt-2'>
                                                        <button className='btn btn-primary'>Get to Know us</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-lg-6'>
                                                <img src={welcomedesign} className='img-fluid'></img>
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

export default Detailpage
