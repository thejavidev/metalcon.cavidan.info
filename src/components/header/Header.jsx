import { AiOutlineRight } from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { footer_logo } from '../../assets';


const Header = ({data}) => {
  const options = data?.about;
  return (
    <>  
        <header className='w-full fixed top-[0] z-[700] left-[0] right-[0]'>
            <div className="w-full flex justify-end items-center">
              <div className="pl-[20px] pr-[20px]">
                <a className='font-[500] text-[16px] text-[#fff]' href={`tel:${options?.tel1}`}>{options?.tel1}</a>
              </div>
              <div className="pt-[15px] pb-[15px] pl-[20px] pr-[20px] cursor-pointer bg-[#4A9CC2] text-[#fff] w-[55px] h-[55px]">
                <a target='_blank' href={`https://wa.me/${options?.tel2}`}>
                  <AiOutlineWhatsApp className='text-[22px] ' />
                </a>
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <Col lg={4} className='pl-[30px] bg-transparent flex items-center justify-start'>
                <Link to={'/'}>
                  <LazyLoadImage src={footer_logo} />
                </Link>
              </Col>
              <Col lg={8} className='bg-[--rgba4]'>
                <nav className='flex flex-wrap items-center justify-end pt-[20px] pb-[20px]'>
                    <ul className='flex items-center justify-evenly w-full m-0 p-0'>
                        <li className='relative navbarli'>
                          <NavLink className='text-[18px] font-[300] transition3 text-[#fff] capitalize' to={'/about'}>About</NavLink>
                        </li>
                        <li className='relative navbarli'>
                          <NavLink className='text-[18px] font-[300] transition3 text-[#fff] capitalize' to={'/services/anbar-binalari'}>Xidmətlər</NavLink>
                        </li>
                        <li className='relative navbarli'>
                          <NavLink className='text-[18px] font-[300] transition3 text-[#fff] capitalize' to={'/projects'}>Layihələrimiz</NavLink>
                        </li>
                        <li className='relative navbarli'>
                          <NavLink className='text-[18px] font-[300] transition3 text-[#fff] capitalize' to={'/certificate'}>Sertifikatlar</NavLink>
                        </li>
                        <li className='relative navbarli'>
                          <NavLink className='text-[18px] font-[300] transition3 text-[#fff] capitalize' to={'/contact'}>Əlaqə</NavLink>
                        </li>
                    </ul>
                </nav>
              </Col>
            </div>
        </header>
    </>
  )
}

export default Header
