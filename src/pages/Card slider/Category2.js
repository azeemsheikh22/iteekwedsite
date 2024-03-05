
import React, { useState } from 'react'
import './Category1.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const Category2 = ({ data }) => {

    const navigate = useNavigate();


    const [a, seta] = useState()
    Aos.init({ duration: 1000 });


    const click = (e, url) => {
        seta(e)
        setTimeout(function () {
            navigate(`/product-detail/${url}`)
        }, 500);
    }

    // console.warn(data)

    return (
        <div className='category1-main pb-5'>
            <div className='container px-lg-5 px-md-0'>
                {
                    data?.name ? <>
                        <div className='row text-start'>
                            <h2>{data?.name}</h2>
                        </div>

                        <div className='row'>
                            <div className='slider-card'>

                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    pagination={{
                                        clickable: true,
                                    }}

                                    breakpoints={{
                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        },
                                        1024: {
                                            slidesPerView: 4,
                                            spaceBetween: 20,
                                        },
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Navigation]}
                                    className="mySwiper"
                                >
                                    {data?.name ? <>
                                        {
                                            data?.products.map((item, index) => {
                                                return <SwiperSlide key={index}>
                                                    <div className={a === index ? "card-1 card-2 g-0" : "card-1 g-0"}>
                                                        <div className='container py-3 px-lg-4' onClick={() => click(index, item.urlName)}>
                                                            <div className='row text-start'>
                                                                <div className='col-lg-6 col-6 col text-center'>
                                                                    <h4>Best Seller</h4>
                                                                </div>
                                                            </div>

                                                            <div className='row img-box'>
                                                                <img src={`https://iteekapi.doctorsforhealth.co.uk/api/v1/products/images/${item.images?.length >= 0 ? item.images[0] : ""}`} alt='' className='mx-auto'></img>
                                                            </div>

                                                            <div className='row text-start mt-2'>
                                                                <h2>{item.name}</h2>
                                                            </div>
                                                            <div className='row text-start'>
                                                                <h5>Starting at</h5>
                                                            </div>
                                                            <div className='row text-start '>
                                                                <h2>€{item.sell_price}</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            })
                                        }
                                    </> : ""
                                    }
                                </Swiper>

                            </div>
                        </div>
                    </> : <>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <Box sx={{ mb: -12, mt: -8 }}>
                                    <Skeleton width="100%" height="500px" />
                                </Box>
                            </div>
                            <div className='col-lg-3'>
                                <Box sx={{ mb: -12, mt: -8 }}>
                                    <Skeleton width="100%" height="500px" />
                                </Box>
                            </div>
                            <div className='col-lg-3'>
                                <Box sx={{ mb: -12, mt: -8 }}>
                                    <Skeleton width="100%" height="500px" />
                                </Box>
                            </div>
                            <div className='col-lg-3'>
                                <Box sx={{ mb: -12, mt: -8 }}>
                                    <Skeleton width="100%" height="500px" />
                                </Box>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Category2

