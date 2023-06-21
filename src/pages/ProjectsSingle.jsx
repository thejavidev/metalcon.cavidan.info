import React, { useEffect } from 'react';
import { motion as m } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { breadcump } from '~/assets';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router';
import { LightgalleryItem } from "react-lightgallery";
import { useTranslation } from 'react-i18next';
import { getMultiLang as ml } from '~/components/MultiLang';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const ProjectsSingle = ({ data }) => {
  const { slug } = useParams();
  const [t] = useTranslation("translation");
  const projects = data?.projects;
  const currentPost = projects?.find((post) => post?.slug === slug);
  const currentImages = currentPost?.images;
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <Helmet>
        <title >Metalcon - {t("projects1")} - {ml(currentPost?.name_az, currentPost?.name_ru, currentPost?.name_en)}</title>
      </Helmet>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        <div className='relative w-full p-[0] m-[0] h-[35vh] breadcump'>
          <LazyLoadImage src={breadcump} className='w-full h-full' />
          <Container>
            <Breadcrumb className='absolute bottom-[10px] z-10 text-[#fff] breadcumpol' spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
              <BreadcrumbItem>
                <div className='font-[700] text-[16px] capitalize' ><Link to='/'>{t("home")}</Link></div>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <div className='font-[700] text-[16px] capitalize' ><Link to='/projects'>{t("projects1")}</Link></div>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink className='font-[200] text-[16px] capitalize' href='#'>{ml(currentPost?.name_az, currentPost?.name_ru, currentPost?.name_en)}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </div>
        <section className='pt-[50px] pb-[50px] bg-[--bg]'>
          <Container>
            <Row>
              {
                currentImages && currentImages?.map((cur, i) => (
                  <Col key={i} lg={3} md={6} xs={6} className='mb-[20px]'>
                    <LightgalleryItem group="any" src={cur?.src} >
                      <a >
                        <LazyLoadImage src={cur?.src} className='w-[100%!important] h-[300px] md:h-[150px] cursor-zoom-in' />
                      </a>
                    </LightgalleryItem>
                  </Col>
                ))
              }
            </Row>
          </Container>
        </section>
      </m.div>
    </>
  )
}

export default ProjectsSingle
