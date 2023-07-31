
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { corn_logo, footer_bg, footer_logo } from '~/assets';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {

  return (
    <>
      <footer className='w-full relative footer_bg'   style={{
              background: `url(${footer_bg})`,
            }}>
       
        <Row className=" w-full m-0   bg-[--rgba1] text-[#fff] p-[70px] md:p-[20px]">
           <div className="flex items-center justify-center">
           <a className='text-center text-[#fff]' href=''>test</a> <span className='ml-[10px] mr-[10px]'> / </span>
            <a className='text-[#fff]' href=''>test</a>
           </div>
        </Row>
        <Row className="w-full m-0 justify-between bg-[--rgba2] text-[#fff] pt-[20px] pb-[20px] pl-[50px] pr-[50px] md:pl-[20px] md:pr-[20px] md:flex-col">
            <Col lg={6} xs={12} className="left md:items-center flex md:justify-center md:mb-4">
              <Link to={'/'}><LazyLoadImage src={footer_logo} className='md:h-[40px]'/></Link>
            </Col>
            <Col lg={6} xs={12} className="right flex gap-[20px] items-center justify-end md:justify-center md:mt-3 md:flex-col">
                <a href="https://corn.az" target='_blank'><LazyLoadImage src={corn_logo} className='md:h-[20px]' /></a>
                <div className=" flex items-center gap-3">
                  
                  <p className='md:text-[14px]'>Lorem ipsum dolor, sit amet. </p>
                 
                </div>
            </Col>
        </Row>
      </footer>
    </>
  )
}

export default Footer
