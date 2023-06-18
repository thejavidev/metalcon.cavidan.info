import React from 'react';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { breadcump, line } from '../assets';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'

const About = ({ data }) => {
  const options = data?.about;
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
                <BreadcrumbLink className='font-[700] text-[16px] capitalize' href='/'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink className='font-[200] text-[16px] capitalize' href='#'>About</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </div>
        <section id="about" className='pt-[50px] pb-[50px] '>
          <Container>
            <div className="w-full flex justify-end items-end  ">
              <h2 className='text-[35px] font-bold text-[#3498db]'>Dəmirin <span className='text-[#000]'>Gücü</span></h2>
            </div>
            
            <Row className='items-center'>
              <Col lg={6}>
                <LazyLoadImage src={options?.src} />
              </Col>
              <Col lg={6} className='flex items-center  flex-col'>
                <div className="w-full text-justify" dangerouslySetInnerHTML={{ __html: options?.text_az }}></div>
                
              </Col>
            </Row>
          </Container>
        </section>
      </m.div>
    </>
  )
}

export default About
