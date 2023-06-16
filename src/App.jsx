import { useDispatch, useSelector } from "react-redux"
import Layout from "./components/layout/Layout"
import Router from "./components/router/Router"
import { useEffect } from "react";
import { loadposts } from "./components/store/posts";

function App() {

  const dispatch =useDispatch();
  const data =useSelector((state)=>state.list)

  useEffect(()=>{
    dispatch(loadposts())
  },[dispatch])

  console.log(data)

  return (
    <>
      <Layout >
        <Router />
      </Layout>
    </>
  )
}

export default App
