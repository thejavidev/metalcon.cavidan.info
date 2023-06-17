import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer';
import { AnimatePresence } from 'framer-motion';

const Layout = ({data, children }) => {
  return (
    <>
      <Header />
      <AnimatePresence >
        {children}
      </AnimatePresence>
      <Footer data={data} />
    </>
  )
}

export default Layout
