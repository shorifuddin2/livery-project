import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import './Banner.css'
import { Navigation } from 'swiper';
const Banner = () => {
    return (
     <div className='container bg-white'>
        <h5 className='bg-white mb-0 ps-4 pt-4 banner-title'>Welcome to Open Library</h5>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
           
        <SwiperSlide>
         <div className=' carousel'>
         <div className='d-flex  border banner-slider-part align-items-center'>
            <div className='slider-image'>
                <img src='https://openlibrary.org/static/images/onboarding/read.png' alt=''/>
            </div>
            <div className='ms-3'>
                <h6>Read Free Library books Online</h6>
                 <p>
                 Millions of Books Available through controlled Digital Lending
                 </p>
            </div>
          </div>
         <div className='d-flex  border banner-slider-part align-items-center'>
            <div className='slider-image'>
                <img src='https://openlibrary.org/static/images/onboarding/track.png' alt=''/>
            </div>
            <div className='ms-3'>
                <h6>Read Free Library books Online</h6>
                 <p>
                 Millions of Books Available through controlled Digital Lending
                 </p>
            </div>
          </div>
         <div className='d-flex  border banner-slider-part align-items-center'>
            <div className='slider-image'>
                <img src='https://openlibrary.org/static/images/onboarding/library_explorer.png' alt=''/>
            </div>
            <div className='ms-3'>
                <h6>Read Free Library books Online</h6>
                 <p>
                 Millions of Books Available through controlled Digital Lending
                 </p>
            </div>
          </div>
              
         </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' carousel'>
         <div className='d-flex  border banner-slider-part align-items-center'>
            <div className='slider-image'>
                <img src='https://openlibrary.org/static/images/onboarding/fulltext.png' alt=''/>
            </div>
            <div className='ms-3'>
                <h6>Read Free Library books Online</h6>
                 <p>
                 Millions of Books Available through controlled Digital Lending
                 </p>
            </div>
          </div>
         <div className='d-flex  border banner-slider-part align-items-center'>
            <div className='slider-image'>
                <img src='https://openlibrary.org/static/images/onboarding/librarian.png' alt=''/>
            </div>
            <div className='ms-3'>
                <h6>Read Free Library books Online</h6>
                 <p>
                 Millions of Books Available through controlled Digital Lending
                 </p>
            </div>
          </div>
         <div className='d-flex  border banner-slider-part align-items-center'>
            <div className='slider-image'>
                <img src='https://openlibrary.org/static/images/onboarding/feedback.png' alt=''/>
            </div>
            <div className='ms-3'>
                <h6>Read Free Library books Online</h6>
                 <p>
                 Millions of Books Available through controlled Digital Lending
                 </p>
            </div>
          </div>
              
         </div>
        </SwiperSlide>
      </Swiper>
      
     </div>
    );
};

export default Banner;