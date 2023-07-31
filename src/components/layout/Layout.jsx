import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Helmet } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Metalcon Ana Sehife</title>
        <meta
          name="description"
          content="Author: A.N. Author, Illustrator: P. Picture, Category: Books, Price:  £9.24, Length: 784 pages"
        />
        <meta
          name="google-site-verification"
          content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34="
        />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <Header />
      <AnimatePresence>{children}</AnimatePresence>

      <Footer />
    </>
  );
};

export default Layout;
