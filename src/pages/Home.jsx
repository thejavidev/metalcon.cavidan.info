import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Pagination } from "swiper";
import { AiOutlineRight } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { line } from "../assets";

import Button from "react-bootstrap/Button";
import {
  about,
  characteristics,
  homeBanner,
  myprojects,
  myservices,
} from "../components/fadedata/fakedata";
import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div>
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
            {homeBanner &&
              homeBanner?.map((cur, i) => (
                <SwiperSlide key={i} className="relative sliderItem">
                  <LazyLoadImage
                    src={cur?.img}
                    className="w-full h-[650px] md:h-[450px]"
                  />
                  <div className="flex justify-center items-center flex-col top-[0] md:top-[40px] h-full absolute w-full">
                    <div
                      className="text-[#fff] text-center"
                      dangerouslySetInnerHTML={{ __html: cur?.text1 }}
                    ></div>
                    <div className="flex items-center gap-6">
                      <Button className="outline-none border-1 border-[#fff] capitalize ">
                        <Link to={"/contact"}>test</Link>
                      </Button>
                      <Button className="outline-none border-1 border-[#fff] capitalize ">
                        <Link to={"/about"}>test</Link>
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          <section id="2">
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
              className="mySwiper"
            >
              {myservices &&
                myservices?.map((cur, i) => (
                  <SwiperSlide
                    key={i}
                    className="services servicesa p-[30px] h-[280px] relative"
                  >
                    <div className="flex justify-between items-center flex-col h-full w-full">
                      <div className="">
                        <LazyLoadImage
                          src={cur?.imgBlue}
                          className="w-full h-[70px] current"
                        />
                        <LazyLoadImage
                          src={cur?.imgWhite}
                          className="w-full h-[70px] current onhover hidden"
                        />
                      </div>
                      <div className="font-[700] text-[16px] uppercase text-[#fff] pt-[20px] mb-[10px] pl-[0] pr-[0]">
                        {cur?.name}
                      </div>
                      <span className="bg-[#4A9CC2] w-[80px] h-[2px] block " />
                      <p className="font-[200] text-[14px] text-center pb-[20px] text-[#fff]">
                        {cur?.title}
                      </p>
                      <Link
                        to={`/services/${cur?.slug}`}
                        className="border-1 p-[5px] rounded-full"
                      >
                        <AiOutlineRight className="text-[#fff]  " />
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </section>

          <section id="about" className="pt-[50px] pb-[50px] bg-[--bg]">
            <Container>
              <div className="w-full flex justify-end items-end  md:mb-4 md:items-center md:justify-start">
                <h2 className="text-[35px] lg:text-[25px] font-bold text-[#3498db] ">
                  test <span className="text-[--text] font-[200]">test</span>
                </h2>
              </div>
              <div className="w-full flex items-center mb-[30px]">
                <LazyLoadImage src={line} className="h-[2px] mr-[20px]" />
                <h2 className="text-[20px] font-bold text-[#3498db] uppercase  ">
                  test <span className="text-[--text] ">test</span>
                </h2>
              </div>
              <Row className="items-center ">
                <Col lg={6} md={12}>
                  <LazyLoadImage
                    src={about.img}
                    className="lg:w-full lg:mb-4"
                  />
                </Col>
                <Col lg={6} className="flex items-center  flex-col">
                  <div className="w-full text-justify line-clamp-5 lg:line-clamp-3 mb-4 text-[--text]">
                    {about?.text}
                  </div>
                  <Link
                    to={`/about`}
                    className="w-full justify-end items-end flex mt-[10px]"
                  >
                    <div className=" border-1 border-[--text] pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-[--text]">
                      daha cox
                    </div>
                  </Link>
                </Col>
              </Row>
            </Container>
          </section>
          <section id="spesfics" className="pt-[50px] pb-[50px] bg-[--bg2]">
            <Container>
              <div className="w-full flex items-center mb-[30px]">
                <LazyLoadImage src={line} className="h-[2px] mr-[20px]" />
                <h2 className="text-[20px] font-bold text-[--text] uppercase">
                  test{" "}
                </h2>
              </div>
              <Row className="">
                {characteristics &&
                  characteristics?.map((cur, i) => (
                    <Col
                      lg={6}
                      md={12}
                      xs={12}
                      key={i}
                      className="p-[30px] lg:p-[15px] flex items-center spesfics "
                    >
                      <div className="flex p-[30px] md:p-[15px] md:flex-col md:items-center ">
                        <div>
                          <LazyLoadImage
                            src={cur?.imgblue}
                            className="current md:h-[100px] md:mb-5"
                          />
                          <LazyLoadImage
                            src={cur?.imgwhite}
                            className="onhover hidden md:h-[100px] md:mb-5"
                          />
                        </div>
                        <div className="flex flex-col pl-[30px] md:items-center md:pl-[0]">
                          <h2 className="text-[25px] font-[600] text-[--text] ">
                            {cur?.text1}
                          </h2>
                          <div className="mt-[20px] text-justify text-[--text]">
                            {cur?.text2}
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
              </Row>
            </Container>
          </section>
          <section id="projects" className="pt-[50px] pb-[50px] bg-[--bg]">
            <Container>
              <div className="w-full flex items-center mb-[30px]">
                <LazyLoadImage src={line} className="h-[2px] mr-[20px]" />
                <h2 className="text-[20px] font-bold text-[--text] uppercase">
                  projects{" "}
                </h2>
              </div>
              <Row className="">
                {myprojects &&
                  myprojects?.slice(0, 4)?.map((cur, i) => (
                    <Col
                      lg={3}
                      md={4}
                      xs={6}
                      key={i}
                      className=" flex items-center   p-[10px]"
                    >
                      <Link
                        to={`/projects/${cur?.slug}`}
                        className="w-full overflow-hidden relative project_box "
                      >
                        <LazyLoadImage src={cur?.image} className="w-full" />
                        <div className="text absolute opacity-[0] bottom-[-100px] w-full border-t-[1px] border-t-[#4A9CC2] pt-[10px] pb-[10px] pl-[20px] pr-[20px] z-30 transition">
                          <h3 className="text-[#fff] font-[400]">
                            {cur?.text}
                          </h3>
                        </div>
                      </Link>
                    </Col>
                  ))}
              </Row>
              <div className="mt-[30px]">
                <Link
                  to="/projects"
                  className="bg-[#eee] hover:bg-[#3498db] hover:text-[#fff] transition max-w-max  border-none capitalize outline-none shadow1  mr-0 mb-[10px] rounded-[4px] pt-[5px] pb-[5px] pl-[30px] pr-[30px] text-[#000] text-[17px] "
                >
                  daha cox
                </Link>
              </div>
            </Container>
          </section>
        </div>
      </m.div>
    </>
  );
};

export default Home;
