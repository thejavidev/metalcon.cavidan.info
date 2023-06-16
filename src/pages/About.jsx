import React from 'react';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { breadcump } from '../assets';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

const About = () => {
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
          <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

      </m.div>
    </>
  )
}

export default About
