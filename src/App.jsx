import { useDispatch, useSelector } from "react-redux"
import Layout from "./components/layout/Layout"
import Router from "./components/router/Router"
import { useEffect, useState } from "react";
import { loadposts } from "./components/store/posts";
import "swiper/css";
import Loader from "./components/loader/Loader";
function App() {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const data = useSelector((state) => state.list)

  useEffect(() => {
    setLoading(true)
    dispatch(loadposts())
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }, [dispatch])



  return (
    <>
      {
        loading ? <Loader /> :
          <Layout data={data}>
            <Router data={data} />
          </Layout>
      }

    </>
  )
}

export default App
