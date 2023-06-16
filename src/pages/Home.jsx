import React from 'react';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Pagination } from "swiper";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = ({ data }) => {
  const homebanner = data?.homebanner;
  const services = data?.services;
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Autoplay, Pagination]}
          className="mySwiper"
        >
          {
            homebanner && homebanner?.map((cur, i) => (
              <SwiperSlide key={i} className='relative sliderItem'>
                <LazyLoadImage src={cur?.src} className='w-full h-[800px]' />
                <div className="flex justify-center items-center flex-col top-0 h-full absolute w-full">
                  <div className='text-[#fff] text-center' dangerouslySetInnerHTML={{ __html: cur?.title_az }}></div>
                </div>
              </SwiperSlide>
            ))
          }


        </Swiper>
        <section id="2">
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {
              services && services?.map((cur, i) => (
                <SwiperSlide key={i} className='services '>
                 
                  <div className="flex justify-between items-center flex-col h-full w-full">
                    <div className="">
                      <LazyLoadImage c src={cur?.cover} className='w-full h-full current' />
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }


          </Swiper>
        </section>

      </m.div>
    </>
  )
}

export default Home
