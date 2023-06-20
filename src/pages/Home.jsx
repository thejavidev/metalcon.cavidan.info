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
import { line } from '~/assets';
import { getMultiLang as ml } from '~/components/MultiLang';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';

const Home = ({ data }) => {
  const homebanner = data?.homebanner;
  const services = data?.services;
  const options = data?.about;
  const spesfics = data?.spesfics;
  const projects = data?.projects;
  const [t] = useTranslation("translation");


  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.25, ease: "easeOut" }}
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
                <LazyLoadImage src={cur?.src} className='w-full h-[650px]' />
                <div className="flex justify-center items-center flex-col top-0 h-full absolute w-full">
                  <div className='text-[#fff] text-center' dangerouslySetInnerHTML={{ __html: cur?.title_az && ml(cur?.title_az,cur?.title_ru,cur?.title_en) }}></div>
                  <div className="flex items-center gap-6">
                    <Button className='outline-none border-1 border-[#fff] capitalize '>
                      <Link to={'/contact'}>
                      {t("text1")}
                      </Link>
                    </Button>
                    <Button className='outline-none border-1 border-[#fff] capitalize '>
                      <Link to={'/about'}>
                      {t("text2")}
                      </Link>
                    </Button>
                  </div>
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
                <SwiperSlide key={i} className='services servicesa p-[30px] h-[280px] relative'>

                  <div className="flex justify-between items-center flex-col h-full w-full">
                    <div className="">
                      <LazyLoadImage src={cur?.cover} className='w-full h-[70px] current' />
                      <LazyLoadImage src={cur?.cover_hover} className='w-full h-[70px] current onhover hidden' />
                    </div>
                    <div className='font-[700] text-[16px] uppercase text-[#fff] pt-[20px] mb-[10px] pl-[0] pr-[0]' dangerouslySetInnerHTML={{ __html: cur?.name_az && ml(cur?.name_az,cur?.name_ru,cur?.name_en) }}></div>
                    <span className='bg-[#4A9CC2] w-[80px] h-[2px] block ' />
                    <p className='font-[200] text-[14px] text-center pb-[20px] text-[#fff]' dangerouslySetInnerHTML={{ __html: cur?.text_az && ml(cur?.text_az,cur?.text_ru,cur?.text_en) }}></p>
                    <Link to={`/services/${cur?.slug}`} className='border-1 p-[5px] rounded-full'>
                      <AiOutlineRight className='text-[#fff]  ' />
                    </Link>
                  </div>

                </SwiperSlide>
              ))
            }


          </Swiper>
        </section>

        <section id="about" className='pt-[50px] pb-[50px] '>
          <Container>
            <div className="w-full flex justify-end items-end  ">
              <h2 className='text-[35px] font-bold text-[#3498db] '>{t("iron")} <span className='text-[#000] font-[200]'>{t("guc")}</span></h2>
            </div>
            <div className="w-full flex items-center mb-[30px]">
              <LazyLoadImage src={line} className='h-[2px] mr-[20px]' />
              <h2 className='text-[20px] font-bold text-[#3498db] uppercase  '>{t("metalcon")} <span className='text-[#000] '>{t("haqqinda")}</span></h2>
            </div>
            <Row className='items-center'>
              <Col lg={6}>
                <LazyLoadImage src={options?.src} />
              </Col>
              <Col lg={6} className='flex items-center  flex-col'>
                <div className="w-full text-justify" dangerouslySetInnerHTML={{ __html: options?.text_az && ml(options?.text_az,options?.text_ru,options?.text_en)  }}></div>
                <Link to={`/about`} className='w-full justify-end items-end flex mt-[10px]'>
                  <div className=' border-1 border-black pt-[10px] pb-[10px] pl-[20px] pr-[20px]'>
                    {t("loadmore")}
                  </div>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="spesfics" className='pt-[50px] pb-[50px] bg-[#F0EFEF]'>
          <Container>

            <div className="w-full flex items-center mb-[30px]">
              <LazyLoadImage src={line} className='h-[2px] mr-[20px]' />
              <h2 className='text-[20px] font-bold text-[#000] uppercase'>{t("char")} </h2>
            </div>
            <Row className=''>
              {
                spesfics && spesfics?.map((cur, i) => (
                  <Col lg={6} key={i} className='p-[30px] flex items-center spesfics'>
                    <div className="flex p-[30px]">
                      <div>
                        <LazyLoadImage src={cur?.cover} className='current' />
                        <LazyLoadImage src={cur?.cover_hover} className='onhover hidden' />
                      </div>
                      <div className="flex flex-col pl-[30px]">
                        <h2 className='text-[25px] font-[600] text-[#00] '>{ml(cur?.name_az,cur?.name_ru,cur?.name_en)}</h2>
                        <div className='mt-[20px] text-justify' dangerouslySetInnerHTML={{ __html: cur?.text_az && ml(cur?.text_az,cur?.text_ru,cur?.text_en) }}></div>
                      </div>
                    </div>
                  </Col>
                ))
              }


            </Row>
          </Container>
        </section>
        <section id="projects" className='pt-[50px] pb-[50px] '>
          <Container>
            <div className="w-full flex items-center mb-[30px]">
              <LazyLoadImage src={line} className='h-[2px] mr-[20px]' />
              <h2 className='text-[20px] font-bold text-[#000] uppercase'>{t("projects")} </h2>
            </div>
            <Row className=''>
              {
                projects && projects?.slice(0, 4)?.map((cur, i) => (
                  <Col lg={3} key={i} className=' flex items-center   p-[10px]'>
                    <Link to={`/projects/${cur?.slug}`} className="w-full overflow-hidden relative project_box ">
                      <LazyLoadImage src={cur?.cover} className='w-full' />
                      <div className="text absolute opacity-[0] bottom-[-100px] w-full border-t-[1px] border-t-[#4A9CC2] pt-[10px] pb-[10px] pl-[20px] pr-[20px] z-30 transition">
                        <h3 className='text-[#fff] font-[400]'>{ml(cur?.name_az,cur?.name_ru,cur?.name_en)}</h3>
                      </div>
                    </Link>
                  </Col>
                ))
              }
               <Link to='/projects'  className="bg-[#f3f3f3] max-w-max ml-3 border-none capitalize outline-none shadow1 mt-[20px] mr-0 mb-[10px] rounded-[4px] pt-[5px] pb-[5px] pl-[30px] pr-[30px] text-black text-[17px] ">
               {t("loadmore")}
                </Link>
            </Row>
          </Container>
        </section>
      </m.div>
    </>
  )
}

export default Home
