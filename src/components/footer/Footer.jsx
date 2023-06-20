
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { corn_logo, footer_bg, footer_logo } from '~/assets';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = ({data}) => {
  const options = data?.about;
  const year =new Date().getFullYear();
  const [t] = useTranslation("translation");
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
              <Link to={'/'}><LazyLoadImage src={footer_logo}/></Link>
            </Col>
            <Col lg={6} className="right flex gap-[20px] items-center justify-end ">
                <a href="https://corn.az" target='_blank'><LazyLoadImage src={corn_logo} /></a>
                <div className=" flex items-center gap-3">
                  
                  <p>{t("huquq")} </p>
                  {year} 
                </div>
            </Col>
        </Row>
      </footer>
    </>
  )
}

export default Footer
