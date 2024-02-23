import React, { useState } from 'react'
import './Category1.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ipad2 from '../../assiets/img/tablet-mockup.png'
import HEADPHONE from '../../assiets/img/alexunder-hess-bWZAPKm0zZE-unsplash-removebg-preview.png'
import watch from '../../assiets/img/dsfsdfsdfsdf.png'
import air_pods from '../../assiets/img/air_pods-removebg-preview.png'
import console from '../../assiets/img/console.png'
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Category4 = () => {

    const navigate = useNavigate();

    const arr = [console, air_pods,watch ,HEADPHONE, ipad2  ]
    const [a, seta] = useState()
    Aos.init({duration: 1000});


    const click = (e) => {
        seta(e)
        setTimeout(function () {
            navigate("/product-detail/:id")
        }, 500);
    }

  return (
    <div className='category1-main pb-5'>
    <div className='container px-lg-5'>
        <div className='row text-start'>
            <h2>Computer</h2>
        </div>

        <div className='row'>
            <div className='slider-card' >

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
                    {
                        arr.map((item, index) => {
                            return <SwiperSlide key={index}>
                                <div className={a === index ? "card-1 card-2 g-0" : "card-1 g-0"}>
                                    <div className='container py-3 px-lg-4' onClick={() => click(index)}>
                                        <div className='row text-start'>
                                            <div className='col-6 col text-center'>
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

export default Category4
