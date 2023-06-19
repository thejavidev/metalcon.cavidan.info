
import React, { useEffect, useState } from 'react';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { breadcump } from '~/assets';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { line } from '../assets';
const Projects = ({ data }) => {
  const projects = data?.projects;

  const imagePerRow = 4;
  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.75, ease: "easeOut" }}
      >
        <div className='relative w-full p-[0] m-[0] h-[35vh] breadcump'>
          <LazyLoadImage src={breadcump} className='w-full h-full' />
          <Container>
            <Breadcrumb className='absolute bottom-[10px] z-10 text-[#fff]' spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
              <BreadcrumbItem>
                <div className='font-[700] text-[16px] capitalize' ><Link to='/'>Home</Link></div>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink className='font-[200] text-[16px] capitalize' href='#'>Projects</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </div>
        <section id="projects" className='pt-[50px] pb-[50px] '>
          <Container>

            <Row className=''>
              {
                projects && projects?.slice(0, next)?.map((cur, i) => (
                  <Col lg={3} key={i} className=' flex items-center   p-[10px]'>
                    <Link to={`/projects/${cur?.slug}`} className="w-full overflow-hidden relative project_box ">
                      <LazyLoadImage src={cur?.cover} className='w-full' />
                      <div className="text absolute opacity-[0] bottom-[-100px] w-full border-t-[1px] border-t-[#4A9CC2] pt-[10px] pb-[10px] pl-[20px] pr-[20px] z-30 transition">
                        <h3 className='text-[#fff] font-[400]'>{cur?.name_az}</h3>
                      </div>
                    </Link>
                  </Col>
                ))
              }
              {next < projects?.length && (
                <Button onClick={handleMoreImage} className="bg-[#f3f3f3] max-w-max ml-3 border-none capitalize outline-none shadow1 mt-[20px] mr-0 mb-[10px] rounded-[4px] pt-[5px] pb-[5px] pl-[30px] pr-[30px] text-black text-[17px] ">
                  more
                </Button>
              )}
            </Row>
          </Container>
        </section>

      </m.div>
    </>
  )
}

export default Projects
