import React from 'react';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Pagination } from "swiper";
import { AiOutlineRight } from 'react-icons/ai';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

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
            spaceBetween={0}
            slidesPerView={4}

            className="mySwiper"
          >
            {
              services && services?.map((cur, i) => (
                <SwiperSlide key={i} className='services p-[30px] h-[280px] relative'>
                  <Link to={`/services/${cur?.slug}`}>
                    <div className="flex justify-between items-center flex-col h-full w-full">
                      <div className="">
                        <LazyLoadImage src={cur?.cover} className='w-full h-[70px] current' />
                        <LazyLoadImage src={cur?.cover_hover} className='w-full h-[70px] current onhover hidden' />
                      </div>
                      <div className='font-[700] text-[16px] uppercase text-[#fff] pt-[20px] mb-[10px] pl-[0] pr-[0]' dangerouslySetInnerHTML={{ __html: cur?.name_az }}></div>
                      <span className='bg-[#4A9CC2] w-[80px] h-[2px] block ' />
                      <p className='font-[200] text-[14px] text-center pb-[20px] text-[#fff]' dangerouslySetInnerHTML={{ __html: cur?.text_az }}></p>
                      <Link to={`/services/${cur?.slug}`} className='border-1 p-[5px] rounded-full'>

                        <AiOutlineRight className='text-[#fff]  ' />
                      </Link>
                    </div>
                  </Link>
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
