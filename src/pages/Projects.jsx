
import React from 'react';

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


import { myprojects  } from '../components/fadedata/fakedata';



const Projects = () => {


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
                <BreadcrumbLink className='font-[200] text-[16px] capitalize' href='#'>projects</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </div>
        <section id="projects" className='pt-[50px] pb-[50px] bg-[--bg]'>
          <Container>

            <Row className=''>
              {
                myprojects && myprojects?.map((cur, i) => (
                  <Col lg={3} md={4} xs={6} key={i} className=' flex items-center   p-[10px]'>
                    <Link to={`/projects/${cur?.slug}`} className="w-full overflow-hidden relative project_box ">
                      <LazyLoadImage src={cur?.image} className='w-full' />
                      <div className="text absolute opacity-[0] bottom-[-100px] w-full border-t-[1px] border-t-[#4A9CC2] pt-[10px] pb-[10px] pl-[20px] pr-[20px] z-30 transition">
                        <h3 className='text-[#fff] font-[400]'>{cur?.text}</h3>
                      </div>
                    </Link>
                  </Col>
                ))
              }

            </Row>
            <div className='mt-2'>
            <Button  className="bg-[#ccc] max-w-max  border-none capitalize outline-none shadow1 mt-[20px] mr-0 mb-[10px] 
                rounded-[4px] pt-[5px] pb-[5px] pl-[30px] pr-[30px] text-[#000] text-[17px] hover:text-[#fff] ">
                 daha cox
                </Button>
            </div>
          </Container>
        </section>

      </div>
    </>
  )
}

export default Projects
