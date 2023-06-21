import { useDispatch, useSelector } from "react-redux"
import Layout from "./components/layout/Layout"
import Router from "./components/router/Router"
import { useEffect, useState } from "react";
import { loadposts } from "./components/store/posts";
import "swiper/css";
import Loader from "./components/loader/Loader";
import "lightgallery.js/dist/css/lightgallery.css";
import { createContext } from "react";
import $ from 'jquery';
export const ThemeContext = createContext(null);
function App() {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const data = useSelector((state) => state.list)

  useEffect(() => {
    setLoading(true)
    dispatch(loadposts())
    setTimeout(() => {
      $(".sitelaoder").addClass("hid")
    }, 3000);
  }, [dispatch])



  return (
    <>
      <Loader />
      <Layout data={data}>
        <Router data={data} />
      </Layout>

    </>
  )
}

export default App
