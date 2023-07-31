import Layout from "./components/layout/Layout";
import Router from "./components/router/Router";
import { useEffect, useState } from "react";
import "swiper/css";
import Loader from "./components/loader/Loader";
import "lightgallery.js/dist/css/lightgallery.css";
import { createContext } from "react";
import $ from "jquery";
export const ThemeContext = createContext(null);
import { atom, useRecoilState } from "recoil";

const repoApi = atom({
  key: "api",
  default: [],
});

function App() {
  const [api, setApi] = useRecoilState(repoApi);

  useEffect(() => {
    setTimeout(() => {
      $(".sitelaoder").addClass("hid");
    }, 500);

    const get_api = async () => {
      const url = "https://metalcon.az/api/fulldata";
      const res = await fetch(url);
      const body = await res.json();
      setApi(body);
    };
    get_api();
  }, []);

  console.log(api);

  return (
    <>
      <Loader />
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
