import React, { useEffect, useState } from 'react'
import './Hero.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { productsdata } from '../../features/Cartslice';
import Loading from '../../Loading';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import img1 from '../../assiets/img/alexunder-hess-bWZAPKm0zZE-unsplash-removebg-preview.png'
import img2 from '../../assiets/img/banner phone.png'
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Hero = () => {

    const dispatch = useDispatch();
    const [loadersubmit, setloadersubmit] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        Aos.init({duration: 2000});
        getdata()
        dispatch(productsdata())
    }, []);

    const [sliderimg, setsliderimg] = useState([])

    const getdata = () => {
        setloadersubmit(true)
        axios.get("https://iteekapi.doctorsforhealth.co.uk/api/v1/sliders")
            .then((res) => {
                // console.warn(res.data)
                setsliderimg(res.data)
                setloadersubmit(false)
            }).catch((e) => {
                console.log("slider", e)
                setloadersubmit(false)
            })
    };


    // if (loadersubmit) {
    //     return (
    //         <Loading />
    //     )
    // }

    return (
        <div className='hero-main g-0'>
            <div className='container-fluid'>
                <div className='row slider-card'>
                    {
                        loadersubmit ? <>
                            <div className='col-12'>
                                <Box sx={{ mt: -3 }}>
                                    <Skeleton width="100%" height="510px" />
                                </Box>
                            </div>
                        </> : <>
                            <div>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    // autoplay={{
                                    //     delay: 3500,
                                    //     disableOnInteraction: false,
                                    // }}
                                    pagination={{
                                        clickable: true,
                                    }}

                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 1,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 1,
                                            spaceBetween: 50,
                                        },
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Navigation]}
                                    className="mySwiper"
                                >
                                    
                                    {
                                        sliderimg.map((item, index) => {
                                            return <SwiperSlide className='' key={index}>
                                                <div className='card-1 g-0'>
                                                    <div className='container-fluid'>
                                                        <div className='row'>
                                                            <div className='col-12'>
                                                                <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/sliders/images/${item.image}`} alt='' className='img-fluid'></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        })
                                    }

                                    {/* <SwiperSlide>
                                        <div className='banner-box'>
                                            <div className='container mt-5 mt-lg-0'>
                                                <div className='row'>
                                                    <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                                                        <div className='container text-start px-lg-5'>
                                                            <div className='row' data-aos="fade-up">
                                                                <h4>Sale Off 40%</h4>
                                                            </div>
                                                            <div className='row' data-aos="fade-up">
                                                                <h2>DENNY X200</h2>
                                                            </div>
                                                            <div className='row line' data-aos="fade-left"></div>
                                                            <div className='row mt-3' data-aos="fade-up">
                                                                <h3>HEADPHONE</h3>
                                                            </div>
                                                            <div className='row mt-2 ' >
                                                                <div className='col' data-aos="fade-up">
                                                                    <button className='btn btn-primary' onClick={() => navigate("/products")}>SHOP NOW</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                                                        <img src={img1} className='img-fluid'></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className='banner-box '>
                                            <div className='container mt-5 mt-lg-0'>
                                                <div className='row'>
                                                    <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                                                        <div className='container text-start px-lg-5'>
                                                            <div className='row' data-aos="fade-up">
                                                                <h4>Sale Off 40%</h4>
                                                            </div>
                                                            <div className='row' data-aos="fade-up">
                                                                <h2>IPHONE 15 PRO MAX</h2>
                                                            </div>
                                                            <div className='row line' data-aos="fade-left"></div>
                                                            <div className='row mt-3' data-aos="fade-up">
                                                                <h3>MOBILE</h3>
                                                            </div>
                                                            <div className='row mt-2'>
                                                                <div className='col' data-aos="fade-up">
                                                                    <button className='btn btn-primary' onClick={() => navigate("/products")}>SHOP NOW</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6 my-3 my-lg-0 d-flex align-items-center justify-content-center'>
                                                        <img src={img2} className='img-fluid img-2'></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide> */}


                                </Swiper>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Hero
