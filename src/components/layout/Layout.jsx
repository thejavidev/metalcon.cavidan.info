import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer';
import { AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Layout = ({ data, children }) => {
  const [t] = useTranslation("translation");
  const sitelang =localStorage.getItem("i18nextLng");
  return (
    <>
      <Helmet>
        <html lang={sitelang} />
        <title >Metalcon - {t("home")}</title>
      </Helmet>
      <Header data={data} />
      <AnimatePresence >
        {children}
      </AnimatePresence>
      <Footer data={data} />
    </>
  )
}

export default Layout
