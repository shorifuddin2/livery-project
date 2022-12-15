import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';
import BrowseSubject from './BrowseSubject';
import UseBrowseSubject from '../../../Hooks/UseBrowseSubject';
import './BrowseSubject.css'
const BrowseSubjects = () => {
    const [myProducts] = UseBrowseSubject();
    return (
        <div className='container bg-white'>
            <h5 className='bg-white mb-0 ps-4 pt-4 trending-title pb-3'>Browse by Subject</h5>
             <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
             <SwiperSlide>
                  <div className='row'>
                    {
                        myProducts.slice(0,6).map(product =><BrowseSubject product={product} key={product._id}></BrowseSubject>)
                    }
                  </div>
             </SwiperSlide>
             <SwiperSlide>
                  <div className='row'>
                    {
                        myProducts.slice(0,6).map(product =><BrowseSubject product={product} key={product._id}></BrowseSubject>)
                    }
                  </div>
             </SwiperSlide>
             </Swiper>
        </div>
    );
};

export default BrowseSubjects;