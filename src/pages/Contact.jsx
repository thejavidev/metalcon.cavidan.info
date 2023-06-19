import { motion as m } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { breadcump } from '~/assets';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiMap } from 'react-icons/bi';
import { BsTelephonePlus } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  AspectRatio
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
const Contact = ({data}) => {
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
                <div className='font-[700] text-[16px] capitalize' ><Link to='/'>Home</Link></div>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink className='font-[200] text-[16px] capitalize' href='#'>Contact</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </div>
        <section className="pt-[50px] pb-[50px]">
          <Container>
            <Row>
              <Col lg={3}>
                <div className="flex flex-col gap-[30px]">
                  <div className="flex items-center gap-[20px]">
                    <BiMap /> 
                    <h3>{options?.unvan_az}</h3>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <BsTelephonePlus /> 
                    <a href={`tel:${options?.tel2}`}>{options?.tel2}</a>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <AiOutlineMail /> 
                    <a href={`mailto:${options?.email}`}>{options?.email}</a>
                  </div>
                </div>
              </Col>
              <Col lg={5}>
                <form className="w-full">
                    <div className="w-full mb-[30px]">
                      <input type="text" placeholder="Ad,Soyad" className="w-full p-[10px] outline-none text-[16px] text-[#000] border-1 border-black" />
                    </div>
                    <div className="w-full mb-[30px]">
                      <input type="text" placeholder="Nomre" className="w-full p-[10px] outline-none text-[16px] text-[#000] border-1 border-black" />
                    </div>
                    <div className="w-full mb-[30px]">
                      <input type="text" placeholder="Email" className="w-full p-[10px] outline-none text-[16px] text-[#000] border-1 border-black" />
                    </div>
                    <div className="w-full mb-[30px]">
                      <textarea name="" placeholder="Mesaj"  className="w-full p-[10px] outline-none text-[16px] resize-none h-[100px] text-[#000] border-1 border-black"></textarea>
                    </div>
                    <div className="w-full mb-[30px]">
                      <Button className="bg-[#ccc] max-w-max  border-none capitalize outline-none shadow1  mr-0 mb-[10px] rounded-[4px] pt-[5px] pb-[5px] pl-[30px] pr-[30px] text-black text-[17px] ">
                        Gonder
                      </Button>
                    </div>
                </form>
              </Col>
              <Col lg={4}>
              <AspectRatio ratio={16 / 9} className=" h-[330px]">
                <iframe src={options?.unvan_map}/>
              </AspectRatio>
              </Col>
            </Row>
          </Container>
        </section>
      </m.div>
    </>
  )
}

export default Contact
