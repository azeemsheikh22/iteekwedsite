
import React from 'react';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import logo1 from '../../assiets/img/10.png';
import logo2 from '../../assiets/img/2.png';
import logo3 from '../../assiets/img/14.png';
import logo4 from '../../assiets/img/11.png';
import logo5 from '../../assiets/img/9.png';
import logo6 from '../../assiets/img/5.png';
import logo7 from '../../assiets/img/12.png';
import logo8 from '../../assiets/img/1.png';
import logo9 from '../../assiets/img/7.png';

const Slider = () => {
    const logoarry = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

    return (
        <div className='logoslider-main'>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                loop={true} // Add this line to enable continuous looping
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={1000} 
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 20,
                    },
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {logoarry.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='box-1'><img src={item} alt='' className='img-fluid'></img></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slider;



