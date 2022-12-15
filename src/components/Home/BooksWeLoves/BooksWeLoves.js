import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper';
import UseTrendingProduct from '../../../Hooks/UseTrendingProduct';
import BooksWeLove from './BooksWeLove';

const BooksWeLoves = () => {
    const [myProducts] = UseTrendingProduct();
    return (
        <div className="container all-trending-books">
            <h5 className='bg-white mb-0 ps-4 pt-4 trending-title pb-3'>Books We Love</h5>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
           
          <SwiperSlide>
            <div className='row mt-0 '>
               {
                myProducts.slice(0,6).map(product =><BooksWeLove  product={product} key={product._id}></BooksWeLove >)
               }
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='row mt-2'>
               {
                myProducts.slice(6,12).map(product =><BooksWeLove  product={product} key={product._id}></BooksWeLove >)
               }
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='row mt-2'>
               {
                myProducts.slice(12,18).map(product =><BooksWeLove  product={product} key={product._id}></BooksWeLove>)
               }
            </div>
          </SwiperSlide>
          </Swiper>
        </div>
    );
};

export default BooksWeLoves;