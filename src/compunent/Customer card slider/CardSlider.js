import React, { useState } from 'react'
import './CardSlider.css'
import 'aos/dist/aos.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ipad2 from '../../assiets/img/ipad2.png'
import mobile from '../../assiets/img/mobile.png'
import airpod from '../../assiets/img/airpods.png'
import watch22 from '../../assiets/img/smart watches png.png'
import { Avatar, Rating } from '@mui/material';

const CardSlider = () => {

    const arr = [
        {
            h1: "Exceptional Variety and Quality",
            p: "I was amazed at the selection of laptop batteries Iteek offers. Found exactly what I needed, and it works perfectly. Highly recommend Iteek for all your tech needs!",
            name: "Jed Watson",
        },
        {
            h1: "Outstanding Customer Service",
            p: "The customer service at Iteek is top-notch. They helped me find the right LCD for my laptop, and it was an easy swap. Great experience with Iteek!",
            name: "Kent Dodds",

        },
        {
            h1: "Unmatched Speed and Quality",
            p: "Fast delivery, excellent product quality, and responsive customer service. Iteek is now my go-to store for tech parts",
            name: "Tim Neutkens",

        },
        {
            h1: "Seamless Shopping Experience:",
            p: "Iteek's detailed product descriptions made it easy for me to choose the right battery for my MacBook. It's been performing excellently. Great value for the money at Iteek!",
            name: "A Axten",

        },
        {
            h1: "Seamless Shopping Experience:",
            p: "Iteek's detailed product descriptions made it easy for me to choose the right battery for my MacBook. It's been performing excellently. Great value for the money at Iteek!",
            name: "A Axten",

        },
       
    ];


    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }


    return (
        <div className='cardSlider-main pb-5'>
            <div className='container'>
                <div className='row text-center'>
                    <h2>What our customers say</h2>
                </div>

                <div className='row mt-3'>
                    <div className='slider-card'>

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
                                    slidesPerView: 2,
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
                            {
                                arr.map((item, index) => {
                                    return <SwiperSlide key={index}>
                                        <div className="card-1 text-start py-4 px-3">
                                            <div className='row'>
                                                <h1>{item.h1}</h1>
                                            </div>
                                            <div className='row mt-2'>
                                                <p>{item.p}</p>
                                            </div>

                                            <div className='row'>
                                                <Rating name="read-only" value="4" readOnly />
                                            </div>
                                            <div className='row mt-3 '>
                                                <div className='col-2 d-flex justify-content-start'>
                                                    <Avatar {...stringAvatar(item.name)} />

                                                </div>
                                                <div className='col'>
                                                    <h4>{item.name}<br /><span>Customer</span></h4>
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

export default CardSlider
