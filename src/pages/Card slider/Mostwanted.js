import React from 'react'
import './Mostwanted.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ipad2 from '../../assiets/img/ipad2.png'
import { useNavigate } from 'react-router-dom';

const Mostwanted = () => {

    const navigate = useNavigate();

    return (
        <div className='mostwanted-main'>
            <div className='container py-5 px-lg-5'>
                <div className='row text-start mt-2'>
                    <h2>Most wanted <span>The tech in everyone’s search bar</span></h2>
                </div>

                <div className='row mt-lg-1'>
                    <div className='slider-card'>

                        <Swiper
                            slidesPerView={2}
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
                            <SwiperSlide>
                                <div className='card-1 g-0' onClick={(() => navigate("/product-detail/:id"))}>
                                    <div className='container py-3 px-lg-4'>
                                        <div className='row text-start'>
                                            <div className='col-lg-6 col text-center'>
                                            <h4>Best Seller</h4>
                                            </div>
                                        </div>

                                        <div className='row img-box'>
                                            <img src={ipad2} alt='' className='mx-auto'></img>
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='card-1 g-0'>
                                    <div className='container py-3 px-lg-4'>
                                        <div className='row text-start'>
                                            <div className='col-lg-6 col text-center'>
                                            <h4>Best Seller</h4>
                                            </div>
                                        </div>

                                        <div className='row img-box'>
                                            <img src={ipad2} alt='' className='mx-auto'></img>
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='card-1 g-0'>
                                    <div className='container py-3 px-lg-4'>
                                        <div className='row text-start'>
                                            <div className='col-lg-6 col text-center'>
                                            <h4>Best Seller</h4>
                                            </div>
                                        </div>

                                        <div className='row img-box'>
                                            <img src={ipad2} alt='' className='mx-auto'></img>
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='card-1 g-0'>
                                    <div className='container py-3 px-lg-4'>
                                        <div className='row text-start'>
                                            <div className='col-lg-6 col text-center'>
                                            <h4>Best Seller</h4>
                                            </div>
                                        </div>

                                        <div className='row img-box'>
                                            <img src={ipad2} alt='' className='mx-auto'></img>
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='card-1 g-0'>
                                    <div className='container py-3 px-lg-4'>
                                        <div className='row text-start'>
                                            <div className='col-lg-6 col text-center'>
                                            <h4>Best Seller</h4>
                                            </div>
                                        </div>

                                        <div className='row img-box'>
                                            <img src={ipad2} alt='' className='mx-auto'></img>
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
                            </SwiperSlide>
                      
                        </Swiper>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mostwanted