import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './swiper.css';

import { Navigation } from 'swiper/modules';

const SwiperNavigation = () => {
    return (
        <>
            <h1>Navigation Swiper</h1>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper1">
                <SwiperSlide><img src="https://images.pexels.com/photos/26455239/pexels-photo-26455239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/26455239/pexels-photo-26455239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/26455239/pexels-photo-26455239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/26455239/pexels-photo-26455239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/26455239/pexels-photo-26455239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/></SwiperSlide>
            </Swiper>
        </>
    );
};

export default SwiperNavigation;