import React, { useEffect, useState } from 'react'
import './Hero.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';

const Hero = () => {

    useEffect(() => {
        getdata()
    }, []);

    const [sliderimg, setsliderimg] = useState([])

    const getdata = () => {
        axios.get("https://iteekapi.doctorsforhealth.co.uk/api/v1/sliders")
            .then((res) => {
                // console.warn(res.data)
                setsliderimg(res.data)
            }).catch((e) => {
                console.log(e)
            })
    };

    return (
        <div className='hero-main'>
            <div className='container'>
                <div className='row slider-card'>
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
                </div>
            </div>
        </div>
    )
}

export default Hero
