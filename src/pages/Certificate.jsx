import { motion as m } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { breadcump } from '~/assets';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import { LightgalleryItem } from "react-lightgallery";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useEffect } from "react";

const Certificate = ({ data }) => {
  const licency = data?.licency;
  const [t] = useTranslation("translation");
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
                <BreadcrumbLink className='font-[200] text-[16px] capitalize' href='#'>{t("certificats")}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </div>
        <section className="pt-[50px] pb-[50px]">
          <Container>
            <Row>
              {
                licency && licency?.map((cur, i) => (
                  <Col lg={3} key={i}>
                    <LightgalleryItem group="any" src={cur?.src} >
                      <a>
                        <LazyLoadImage src={cur?.src} className='w-[100%!important]  md:h-[150px] cursor-zoom-in' alt={cur?.alt_az} />
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

export default Certificate
