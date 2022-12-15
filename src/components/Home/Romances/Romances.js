import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper';
import UseTrendingProduct from '../../../Hooks/UseTrendingProduct';
import Romance from './Romance';

const Romances = () => {
    const [myProducts] = UseTrendingProduct();
    return (
        <div className="container all-trending-books">
            <h5 className='bg-white mb-0 ps-4 pt-4 trending-title pb-3'>Romance</h5>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
           
          <SwiperSlide>
            <div className='row mt-0 '>
               {
                myProducts.slice(0,6).map(product =><Romance  product={product} key={product._id}></Romance >)
               }
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='row mt-2'>
               {
                myProducts.slice(6,12).map(product =><Romance  product={product} key={product._id}></Romance >)
               }
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='row mt-2'>
               {
                myProducts.slice(12,18).map(product =><Romance  product={product} key={product._id}></Romance>)
               }
            </div>
          </SwiperSlide>
          </Swiper>
        </div>
    );
};

export default Romances;