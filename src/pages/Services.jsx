import React, { useEffect, useState } from 'react';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { breadcump } from '~/assets';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineRight } from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react'
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Link, NavLink, useParams } from 'react-router-dom';

const Services = ({ data }) => {
  const services = data?.services;
  const { slug } = useParams();
  const currentPost = services?.find((post) => post?.slug === slug);
  const currentImages = currentPost?.images;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div className='relative w-full p-[0] m-[0] h-[35vh] breadcump'>
          <LazyLoadImage src={breadcump} className='w-full h-full' />
          <Container>
            <Breadcrumb className='absolute bottom-[10px] z-10 text-[#fff]' spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
              <BreadcrumbItem>
                <div className='font-[700] text-[16px] capitalize' ><Link to='/'>Home</Link></div>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink className='font-[200] text-[16px] capitalize' href='#'>Services</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </div>
        <section >
          <Tabs>
            <TabList>
              <Swiper
                spaceBetween={0}
                slidesPerView={4}

                className="mySwiper w-full"
              >
                {
                  services && services?.map((cur, i) => (
                    <SwiperSlide key={i} className='services p-[30px] h-[250px] relative'>
                      <Tab className='w-full h-full' >
                        <NavLink className='w-full h-full' to={`/services/${cur?.slug}`}>

                          <div className="flex justify-between items-center flex-col h-full w-full">
                            <div className="">
                              <LazyLoadImage src={cur?.cover} className='w-full h-[70px] current' />
                              <LazyLoadImage src={cur?.cover_hover} className='w-full h-[70px] current onhover hidden' />
                            </div>
                            <div className='font-[700] text-[16px] uppercase text-[#fff] pt-[20px] mb-[10px] pl-[0] pr-[0]' dangerouslySetInnerHTML={{ __html: cur?.name_az }}></div>
                            <span className='bg-[#4A9CC2] w-[80px] h-[2px] block ' />

                            <AiOutlineRight className='text-[#fff]  ' />
                          </div>
                        </NavLink>
                      </Tab>

                    </SwiperSlide>
                  ))
                }


              </Swiper>
            </TabList>
            <TabPanels className='pl-[100px] pr-[100px] pt-[50px] pb-[50px]'>
              {
                services && services?.map((item, i) => {

                  return (
                    <TabPanel key={i}>
                      <Row className='items-center'>
                        <Col lg={5} className='flex justify-center items-center h-full'>
                            <div className='services-list' dangerouslySetInnerHTML={{ __html: currentPost?.text2_az }}></div>
                           
                        </Col>
                        <Col lg={7} md={12}>
                          <Swiper
                            spaceBetween={10}
                           loop={true}
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2 mb-2"
                          >
                            {
                              currentImages && currentImages?.map((item, index) => (
                                <SwiperSlide key={index}>
                                  <LazyLoadImage className="h-[400px] w-full md:h-[250px]" src={item?.src} />
                                </SwiperSlide>

                              ))
                            }
                          </Swiper>
                          <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper mb-4"
                          >
                            <div className=" w-full">

                              {
                                currentImages && currentImages?.map((item, index) => (
                                  <SwiperSlide key={index}>
                                    <LazyLoadImage className="h-[88px] w-full" src={item?.src} />
                                  </SwiperSlide>

                                ))
                              }
                            </div>


                          </Swiper>


                        </Col>
                      </Row>
                    </TabPanel>
                  )
                })
              }
             
            </TabPanels>
          </Tabs>

        </section>
      </m.div>
    </>
  )
}

export default Services
