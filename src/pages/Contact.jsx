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
import { useTranslation } from 'react-i18next';
import { getMultiLang as ml } from '~/components/MultiLang';
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  AspectRatio
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";

const Sending=()=>{
  return(
    <div class="loaderContact block mt-[10px] mb-[10px] w-[130px] h-[4px] rounded-[30px] relative bg-[--rgba3]"></div>
  )
}

const Contact = ({data}) => {
  const options = data?.about;
  const formRef = useRef();
  const [t] = useTranslation("translation");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value, message, phone, email } = e.target;
    setForm({ ...form, [name]: value, [message]: value, [phone]: value, [email]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_ifvxroq', 'template_pad4cel',
      {
          to_name: form.name,
          to_phone: form.phone,
          to_email: form.email,
          to_email: 'contact@metalcon.az',
          message: form.message
      },
      'xeLUauh7KhJi8704j',
    )
      .then(() => {
        setLoading(false);
        Swal.fire(`${t("swal1")}`, `${t("swal2")}`, "success");
        setForm({
          name: '',
          phone: '',
          email: '',
          message: ''
        }, (error) => {
          setLoading(false)
          console.log(error)
          alert('xeta bas verdi')
        })
      })
  }
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
                <BreadcrumbLink className='font-[200] text-[16px] capitalize' href='#'>{t("contact")}</BreadcrumbLink>
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
                    <BiMap className="text-[30px]" /> 
                    <h3 className="text-[20px]">{ml(options?.unvan_az,options?.unvan_ru,options?.unvan_en)}</h3>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <BsTelephonePlus className="text-[30px]" /> 
                    <a className="text-[20px]" href={`tel:${options?.tel2}`}>{options?.tel2}</a>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <AiOutlineMail className="text-[30px]" /> 
                    <a className="text-[20px]" href={`mailto:${options?.email}`}>{options?.email}</a>
                  </div>
                </div>
              </Col>
              <Col lg={5}>
                <form className="w-full" onSubmit={handleSubmit} ref={formRef}>
                    <div className="w-full mb-[30px]">
                      <input
                        value={form.name} required
                        onChange={handleChange}
                        name='name'
                       type="text" placeholder={t("namesurname")} className="w-full p-[10px] outline-none text-[16px] text-[#000] border-1 border-black" />
                    </div>
                    <div className="w-full mb-[30px]">
                      <input 
                        value={form.phone} required
                        onChange={handleChange}
                        name='phone'
                        type="text"
                       placeholder={t("phone")} className="w-full p-[10px] outline-none text-[16px] text-[#000] border-1 border-black" />
                    </div>
                    <div className="w-full mb-[30px]">
                      <input 
                      type="text" 
                      value={form.email} required
                      onChange={handleChange}
                      name='email'
                      placeholder={t("email")} className="w-full p-[10px] outline-none text-[16px] text-[#000] border-1 border-black" />
                    </div>
                    <div className="w-full mb-[30px]">
                      <textarea
                        value={form.message} required
                        name="message"
                        onChange={handleChange}
                      placeholder={t("messages")}  className="w-full p-[10px] outline-none text-[16px] resize-none h-[100px] text-[#000] border-1 border-black"></textarea>
                    </div>
                    <div className="w-full mb-[30px]">
                      <Button className="bg-[#ccc] max-w-max  border-none capitalize outline-none shadow1  mr-0 mb-[10px] rounded-[4px] pt-[5px] pb-[5px] pl-[30px] pr-[30px]
                       text-[#000] hover:text-[#fff] text-[17px] ">
                      {loading ? <Sending /> : (t("send"))}
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
