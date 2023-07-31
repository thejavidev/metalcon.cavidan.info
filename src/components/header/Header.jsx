
import Col from 'react-bootstrap/Col';
import { Link, NavLink } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiOutlineWhatsApp, AiOutlineMenu ,AiOutlineClose} from 'react-icons/ai';
import { footer_logo } from '../../assets';




const Header = () => {


  
  
  const menu = [
    {
      id: 1,
      path: "/",
      // name: `${t('home')}`,
      name:"ana sehife"
    },
    {
      id: 2,
      path: "/about",
      name: 'haqqimizda',
    },
    {
      id: 3,
      path: "/services/anbar-binalari",
      name: 'xidmetler',
    },
    {
      id: 4,
      path: "/projects",
      name: 'projects',
    },

    {
      id: 5,
      path: "/certificate",
      name: 'sertifikatlar',
    },
    {
      id: 6,
      path: "/contact",
      name: 'elaqe',
    },
  ]


 

  return (
    <>
      <div  className="mobile-menu-overlay overflow-x-hidden  block fixed left-[0] top-[0] bottom-[0] right-[0] z-[100] overlay"></div>
      <header className='w-full fixed top-[0] z-[700] left-[0] right-[0] '>
        <div className="topmenu  w-full flex justify-end items-center">
          <div className='flex items-center justify-center'>
        
          </div>
          <div className="pl-[20px] pr-[20px]">
            <a className='font-[500] text-[16px] text-[#fff]' href=''>555 555 55</a>
          </div>
          
          <div className="pt-[15px] pb-[15px] pl-[20px] flex items-center justify-center md:p-[0] pr-[20px] cursor-pointer bg-[#4A9CC2] text-[#fff] w-[55px] h-[55px] md:h-[40px] md:w-[40px]">
            <a target='_blank' href={`https://wa.me/+994557778844`}>
              <AiOutlineWhatsApp className='text-[22px] md:text-[16px]' />
            </a>
          </div>
        </div>
        <div className=" w-full flex justify-between items-center lg:bg-[--rgba5] globalmenu">
          <Col lg={4} className='pl-[30px] bg-[transparent] flex items-center justify-start bottommenu pt-[10px] pb-[10px]'>
            <Link to={'/'} className=''>
              <LazyLoadImage src={footer_logo} className='md:h-[40px]' />
            </Link>
          </Col>
          <Col lg={8} className='bg-[--rgba4] lg:bg-transparent pt-[20px] pb-[20px] ulmaenu'>
            <nav className='flex flex-wrap items-center justify-end lg:hidden'>
              <ul className='flex items-center justify-evenly w-full m-0 p-0'>
                <li className='relative navbarli'>
                  <NavLink className='text-[18px] font-[300] transition3 text-[#fff] capitalize' to={'/about'}>haqqimizda</NavLink>
                </li>
                <li className='relative navbarli'>
                  <NavLink className='text-[18px] font-[300] transition3 text-[#fff] capitalize' to={'/services/anbar-binalari'}>xidmetler</NavLink>
                </li>
                <li className='relative navbarli'>
                  <NavLink className='text-[18px] font-[300] transition3 text-[#fff] capitalize' to={'/projects'}>proyektler</NavLink>
                </li>
                <li className='relative navbarli'>
                  <NavLink className='text-[18px] font-[300] transition3 text-[#fff] capitalize' to={'/certificate'}>sertifikatlar</NavLink>
                </li>
                <li className='relative navbarli'>
                  <NavLink className='text-[18px] font-[300] transition3 text-[#fff] capitalize' to={'/contact'}>elaqe</NavLink>
                </li>
              </ul>
            </nav>
            <div className="mobileMenu  justify-end mr-6 hidden lg:flex" >
              <AiOutlineMenu className='text-[#fff] text-[25px] cursor-pointer' />
            </div>
          </Col>
        </div>
      </header>
      <ul  className='flex items-center  w-full fixed mobileHeader tansitionheader
              right-[-100%]   flex-col lg:w-[350px] bg-[--header] z-[1000] p-[30px] h-full top-[0] justify-start pt-[50px]'>
        <div className="hidden lg:flex" >
          <AiOutlineClose className='text-[25px] text-[#fff] mr-2 cursor-pointer absolute left-[15px] top-[15px]'  />
        </div>
        {
          menu && menu?.map((cur, i) => (
            <li key={i} className='pt-[10px] pb-[10px] pl-0 pr-0 ml-[20px] lg:ml-[10px] navbarli'>
              <NavLink to={cur?.path} className='navbarT text-[--text] capitalize relative text-[14px] lg:text-[#fff]'>
                {cur?.name}
              </NavLink>
            </li>

          ))
        }
      </ul>
    </>
  )
}

export default Header
