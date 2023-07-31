import React, { useEffect, useState } from 'react';

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


import { myservices } from '../components/fadedata/fakedata';

const Services = ({ data }) => {
  const { slug } = useParams();
  const currentPost = myservices?.find((post) => post?.slug === slug);
  const currentImages = currentPost?.images;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
 
  return (
    <>
     
      <div
       
      >
        <div className='relative w-full p-[0] m-[0] h-[35vh] breadcump'>
          <LazyLoadImage src={breadcump} className='w-full h-full' />
          <Container>
            <Breadcrumb className='absolute bottom-[10px] z-10 text-[#fff]' spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
              <BreadcrumbItem>
                <div className='font-[700] text-[16px] capitalize' ><Link to='/'>ana sehife</Link></div>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink className='font-[200] text-[16px] capitalize' href='#'>services</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </div>
        <section className='bg-[--bg]'>
          <Tabs>
            <TabList>
              <Swiper
                spaceBetween={0}
                slidesPerView={4}
                breakpoints={{
                  40: {
                    slidesPerView: 1,

                  },
                  340: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,

                  },
                  768: {
                    slidesPerView: 2,

                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1399: {
                    slidesPerView: 4,
                  },
                  1499: {
                    slidesPerView: 4,
                  },
                }}
                className="mySwiper w-full"
              >
                {
                  myservices && myservices?.map((cur, i) => (
                    <SwiperSlide key={i} className='services'>
                      <Tab className='w-full h-full' >
                        <NavLink className='w-full h-[250px] relative  servicesa p-[30px] ' to={`/services/${cur?.slug}`}>
                          <div className="flex justify-between items-center flex-col h-full w-full">
                            <div className="">
                              <LazyLoadImage src={cur?.imgBlue} className='w-full h-[70px] current' />
                              <LazyLoadImage src={cur?.imgWhite} className='w-full h-[70px] current onhover hidden' />
                            </div>
                            <div className='font-[700] text-[16px] uppercase text-[#fff] pt-[20px] mb-[10px] pl-[0] pr-[0]'
                              >{cur?.name}</div>
                            <span className='bg-[#4A9CC2] w-[80px] h-[2px] block ' />
                            <div className='aidv border-1 border-white rounded-full p-[5px]'>
                              <AiOutlineRight className='text-[#fff] ai' />
                            </div>

                          </div>
                        </NavLink>
                      </Tab>

                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </TabList>
            <TabPanels className='pl-[100px] pr-[100px] lg:pl-[20px] lg:pr-[20px] pt-[50px] pb-[50px]'>
              {
                myservices && myservices?.map((item, i) => {

                  return (
                    <TabPanel key={i}>
                      <Row className='items-center'>
                        <Col lg={5} className='flex flex-col justify-center items-center h-full lg:items-start lg:justify-start lg:mb-5'>
                          <div className='services-list' >{item?.name}</div>
                          <div className='services-list' >{item?.title}</div>
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
                            breakpoints={{
                              40: {
                                slidesPerView: 2,

                              },
                              340: {
                                slidesPerView: 2,
                              },
                              640: {
                                slidesPerView: 2,

                              },
                              768: {
                                slidesPerView: 2,

                              },
                              1024: {
                                slidesPerView: 3,
                              },
                              1399: {
                                slidesPerView: 4,
                              },
                              1499: {
                                slidesPerView: 4,
                              },
                            }}
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
      </div>
    </>
  )
}

export default Services
