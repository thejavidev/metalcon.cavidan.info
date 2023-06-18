
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { corn_logo, footer_bg, footer_logo } from '~/assets';

const Footer = ({data}) => {
  const options = data?.about;
  const year =new Date().getFullYear();
  return (
    <>
      <footer className='w-full relative footer_bg'   style={{
              background: `url(${footer_bg})`,
            }}>
       
        <Row className=" w-full m-0   bg-[--rgba1] text-[#fff] p-[70px] ">
           <div className="flex items-center justify-center">
           <a className='text-center text-[#fff]' href={`tel:${options?.tel1}`}>{options?.tel1}</a> <span className='ml-[10px] mr-[10px]'> / </span>
            <a className='text-[#fff]' href={`mailto:${options?.email}`}>{options?.email}</a>
           </div>
        </Row>
        <Row className="w-full m-0 justify-between bg-[--rgba2] text-[#fff] pt-[20px] pb-[20px] pl-[50px] pr-[50px] ">
            <Col lg={6} className="left">
              <LazyLoadImage src={footer_logo}/>
            </Col>
            <Col lg={6} className="right flex gap-[20px] items-center justify-end ">
                <LazyLoadImage src={corn_logo} />
                <div className=" flex items-center gap-3">
                  
                  <p>Bütün hüquqlar qorunur </p>
                  {year} 
                </div>
            </Col>
        </Row>
      </footer>
    </>
  )
}

export default Footer
