import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { breadcump } from "~/assets";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { about } from "../components/fadedata/fakedata";
import { Helmet } from "react-helmet-async";
import { motion as m } from "framer-motion";

const About = () => {
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Helmet>
          <title>Metalcon About Sehife</title>
        </Helmet>
        <div>
          <div className="relative w-full p-[0] m-[0] h-[35vh] breadcump">
            <LazyLoadImage src={breadcump} className="w-full h-full" />
            <Container>
              <Breadcrumb
                className="absolute bottom-[10px] z-10 text-[#fff]"
                spacing="8px"
                separator={<ChevronRightIcon color="gray.500" />}
              >
                <BreadcrumbItem>
                  <div className="font-[700] text-[16px] capitalize">
                    <Link to="/">ana sehife</Link>
                  </div>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink
                    className="font-[200] text-[16px] capitalize"
                    href="#"
                  >
                    about
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Container>
          </div>
          <section id="about" className="pt-[50px] pb-[50px] bg-[--bg]">
            <Container>
              <div className="w-full flex justify-end items-end  mb-4 md:items-center md:justify-start">
                <h2 className="text-[35px] lg:text-[25px] font-bold text-[#3498db]">
                  test <span className="text-[--text]">test</span>
                </h2>
              </div>

              <Row className="items-center">
                <Col lg={6}>
                  <LazyLoadImage
                    src={about?.img}
                    className="lg:w-full lg:mb-4"
                  />
                </Col>
                <Col lg={6} className="flex items-center  flex-col">
                  <div className="w-full text-justify text-[--text]">
                    {about?.text}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </m.div>
    </>
  );
};

export default About;
