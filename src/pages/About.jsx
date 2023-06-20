import React, { useEffect } from 'react';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { breadcump } from '~/assets';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getMultiLang as ml } from '~/components/MultiLang';

const About = ({ data }) => {
  const [t] = useTranslation("translation");
  const options = data?.about;
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.25, ease: "easeOut" }}
      >
        <div className='relative w-full p-[0] m-[0] h-[35vh] breadcump'>
          <LazyLoadImage src={breadcump} className='w-full h-full' />
          <Container>
            <Breadcrumb className='absolute bottom-[10px] z-10 text-[#fff]' spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
              <BreadcrumbItem>
                <div className='font-[700] text-[16px] capitalize' ><Link to='/'>{t("home")}</Link></div>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink className='font-[200] text-[16px] capitalize' href='#'>{t("about")}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </div>
        <section id="about" className='pt-[50px] pb-[50px] '>
          <Container>
            <div className="w-full flex justify-end items-end  ">
              <h2 className='text-[35px] font-bold text-[#3498db]'>{t("iron")} <span className='text-[#000]'>{t("guc")}</span></h2>
            </div>
            
            <Row className='items-center'>
              <Col lg={6}>
                <LazyLoadImage src={options?.src} />
              </Col>
              <Col lg={6} className='flex items-center  flex-col'>
                <div className="w-full text-justify" dangerouslySetInnerHTML={{ __html: options?.text_az && ml(options?.text_az,options?.text_ru,options?.text_en)  }}></div>
              </Col>
            </Row>
          </Container>
        </section>
      </m.div>
    </>
  )
}

export default About
