import { AiOutlineRight } from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiOutlineWhatsApp, AiOutlineMenu ,AiOutlineClose} from 'react-icons/ai';
import { footer_logo } from '../../assets';
import $ from 'jquery';
import { useEffect } from 'react';
import { useState } from 'react';
import Upper from './Upper';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import DarkModeTheme from '../darkmode/DarkMode';
import { useRef } from 'react';


const Header = ({ data }) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const options = data?.about;
  const [t, i18n] = useTranslation("translation");
  const openMobileHeader = useRef();
  const OverlayDiv = useRef();
  const openMenu = () => {
    openMobileHeader?.current?.classList?.add('open-header');
    OverlayDiv?.current?.classList?.add('active');
  }
  const CloseMenu = () => {
    openMobileHeader?.current?.classList?.remove('open-header');
    OverlayDiv?.current?.classList?.remove('active');
  }
  const menu = [
    {
      id: 1,
      path: "/",
      name: `${t('home')}`,
    },
    {
      id: 2,
      path: "/about",
      name: `${t('about')}`,
    },
    {
      id: 3,
      path: "/services/anbar-binalari",
      name: `${t('xidmet')}`,
    },
    {
      id: 4,
      path: "/projects",
      name: `${t('projects')}`,
    },

    {
      id: 5,
      path: "/certificate",
      name: `${t('certificats')}`,
    },
    {
      id: 6,
      path: "/contact",
      name: `${t('contact')}`,
    },
  ]
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 100) { // if scroll down hide the navbar
        $('.topmenu').addClass('nonVisible')
        $('.bottommenu').addClass('bg_rgba')
        $('.ulmaenu').addClass('bg_rgba')
        $('.globalmenu').addClass('bg_rgba2')

      } else { // if scroll up show the navbar
        $('.topmenu').removeClass('nonVisible')
        $('.bottommenu').removeClass('bg_rgba')
        $('.ulmaenu').removeClass('bg_rgba')
        $('.globalmenu').removeClass('bg_rgba2')
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const [open, setOpen] = useState(false);
  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
    setOpen(false);
  }
  const langChecker = useCallback((lang = "az") => {
    return lang !== localStorage.getItem("i18nextLng")
  }, [])
  const langs = ["az", "ru", "en"];
  const myLang = langs?.filter(langChecker);

  return (
    <>
      <div onClick={CloseMenu} ref={OverlayDiv} className="mobile-menu-overlay overflow-x-hidden  block fixed left-[0] top-[0] bottom-[0] right-[0] z-[100] overlay"></div>
      <header className='w-full fixed top-[0] z-[700] left-[0] right-[0] '>
        <div className="topmenu  w-full flex justify-end items-center">
          <div className='flex items-center justify-center'>
            <DarkModeTheme />
          </div>
          <div className="pl-[20px] pr-[20px]">
            <a className='font-[500] text-[16px] text-[#fff]' href={`tel:${options?.tel1}`}>{options?.tel1}</a>
          </div>
          {<Upper
            toggle={() => setOpen(!open)}
            switchLang={
              open && (
                <div className="absolute  mt-6 right-[10px] top-[26px] h-[50px] flex flex-col text-left items-end">
                  {myLang.map((lang, index) => (
                    <button className='text-[--text] z-[200]  lowercase text-[18px] xl:text-[13px] transitions bg-[--bg] hover:text-[#DE0733] pt-[10px] pb-[10px] pr-[15px] pl-[15px]' key={index} onClick={() => clickHandle(lang)} >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
          />}
          <div className="pt-[15px] pb-[15px] pl-[20px] flex items-center justify-center md:p-[0] pr-[20px] cursor-pointer bg-[#4A9CC2] text-[#fff] w-[55px] h-[55px] md:h-[40px] md:w-[40px]">
            <a target='_blank' href={`https://wa.me/${options?.tel2}`}>
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
                  <NavLink className='text-[18px] font-[300] transition3 text-[#fff] capitalize' to={'/about'}>{t("about")}</NavLink>
                </li>
                <li className='relative navbarli'>
                  <NavLink className='text-[18px] font-[300] transition3 text-[#fff] capitalize' to={'/services/anbar-binalari'}>{t("xidmet")}</NavLink>
                </li>
                <li className='relative navbarli'>
                  <NavLink className='text-[18px] font-[300] transition3 text-[#fff] capitalize' to={'/projects'}>{t("projects")}</NavLink>
                </li>
                <li className='relative navbarli'>
                  <NavLink className='text-[18px] font-[300] transition3 text-[#fff] capitalize' to={'/certificate'}>{t("certificats")}</NavLink>
                </li>
                <li className='relative navbarli'>
                  <NavLink className='text-[18px] font-[300] transition3 text-[#fff] capitalize' to={'/contact'}>{t("contact")}</NavLink>
                </li>
              </ul>
            </nav>
            <div className="mobileMenu  justify-end mr-6 hidden lg:flex" onClick={openMenu}>
              <AiOutlineMenu className='text-[#fff] text-[25px] cursor-pointer' />
            </div>
          </Col>
        </div>
      </header>
      <ul ref={openMobileHeader} className='flex items-center  w-full fixed mobileHeader tansitionheader
              right-[-100%]   flex-col lg:w-[350px] bg-[--header] z-[1000] p-[30px] h-full top-[0] justify-start pt-[50px]'>
        <div className="hidden lg:flex" >
          <AiOutlineClose className='text-[25px] text-[#fff] mr-2 cursor-pointer absolute left-[15px] top-[15px]' onClick={CloseMenu} />
        </div>
        {
          menu && menu?.map((cur, i) => (
            <li key={i} className='pt-[10px] pb-[10px] pl-0 pr-0 ml-[20px] lg:ml-[10px] navbarli'>
              <NavLink onClick={CloseMenu} to={cur?.path} className='navbarT text-[--text] capitalize relative text-[14px] lg:text-[#fff]'>
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
