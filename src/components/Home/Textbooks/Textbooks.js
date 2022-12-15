import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper';
import UseTrendingProduct from '../../../Hooks/UseTrendingProduct';
import Textbook from './Textbook';

const Textbooks = () => {
    const [myProducts] = UseTrendingProduct();
    return (
        <div className="container all-trending-books">
            <h5 className='bg-white mb-0 ps-4 pt-4 trending-title pb-3'>Textbook</h5>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
           
          <SwiperSlide>
            <div className='row mt-0 '>
               {
                myProducts.slice(0,6).map(product =><Textbook  product={product} key={product._id}></Textbook>)
               }
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='row mt-2'>
               {
                myProducts.slice(6,12).map(product =><Textbook  product={product} key={product._id}></Textbook>)
               }
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='row mt-2'>
               {
                myProducts.slice(12,18).map(product =><Textbook  product={product} key={product._id}></Textbook>)
               }
            </div>
          </SwiperSlide>
          </Swiper>
        </div>
    );
};

export default Textbooks;