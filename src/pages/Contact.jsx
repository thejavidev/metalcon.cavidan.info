
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




const Contact = () => {
 
 
  
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
                <BreadcrumbLink className='font-[200] text-[16px] capitalize' href='#'>elaqe</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </div>
        <section className="pt-[50px] pb-[50px] bg-[--bg]">
          <Container>
            <Row>
              <Col lg={3} className="lg:mt-[40px]">
                <div className="flex flex-col flex-wrap lg:flex-row gap-[30px]">
                  <div className="flex items-center gap-[20px]">
                    <BiMap className="text-[30px] lg:text-[20px] text-[--text]" />
                    <h3 className="text-[20px] lg:text-[16px] text-[--text]">test</h3>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <BsTelephonePlus className="text-[30px] lg:text-[20px] text-[--text]" />
                    <a className="text-[20px] lg:text-[16px] text-[--text]" href=''>test</a>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <AiOutlineMail className="text-[30px] lg:text-[20px] text-[--text]" />
                    <a className="text-[20px] lg:text-[16px] text-[--text]" href=''>test</a>
                  </div>
                </div>
              </Col>
              <Col lg={5} className="order-[-2]">
                <form className="w-full" >
                  <div className="w-full mb-[30px]">
                    <input
                     
                      
                      name='name'
                      type="text" placeholder='test' className="w-full p-[10px] bg-[--bg] outline-none text-[16px] text-[--text] border-1 border-[--text2]" />
                  </div>
                  <div className="w-full mb-[30px]">
                    <input
                     
                      name='phone'
                      type="text"
                      placeholder='test' className="w-full p-[10px] bg-[--bg] outline-none text-[16px] text-[--text] border-1 border-[--text2]" />
                  </div>
                  <div className="w-full mb-[30px]">
                    <input
                      type="text"
                     
                      name='email'
                      placeholder='test' className="w-full p-[10px] bg-[--bg] outline-none text-[16px] text-[--text] border-1 border-[--text2]" />
                  </div>
                  <div className="w-full mb-[30px]">
                    <textarea
                     
                      name="message"
                     
                      placeholder='test' className="w-full p-[10px] bg-[--bg] outline-none text-[16px] resize-none h-[100px] text-[--text] border-1 border-[--text2]"></textarea>
                  </div>
                  <div className="w-full mb-[30px]">
                    <Button type="submit"  className="bg-[#ccc] max-w-max  border-none capitalize outline-none shadow1  mr-0 mb-[10px] rounded-[4px] pt-[5px] pb-[5px] pl-[30px] pr-[30px]
                       text-[#000] hover:text-[#fff] text-[17px] ">
                        gonder
                    </Button>
                  </div>
                </form>
              </Col>
              <Col lg={4} className="order-[-1]">
                <AspectRatio ratio={16 / 9} className=" h-[330px]">
                  <iframe src='' />
                </AspectRatio>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  )
}

export default Contact
