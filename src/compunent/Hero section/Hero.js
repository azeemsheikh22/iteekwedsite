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

const Hero = () => {

    const dispatch = useDispatch();
    const [loadersubmit, setloadersubmit] = useState(false)

    useEffect(() => {
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
        <div className='hero-main'>
            <div className='container'>
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
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
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
                                    modules={[Autoplay, Pagination, Navigation]}
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
