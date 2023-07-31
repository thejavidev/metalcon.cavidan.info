import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { LightgalleryProvider } from "react-lightgallery";
import { RecoilRoot } from "recoil";
import { HelmetProvider } from "react-helmet-async";
import { I18nextProvider, initReactI18next } from "react-i18next";
import  LanguageDetector  from "i18next-browser-languagedetector";
import i18next from "i18next";
import resources from "./components/transitions/index.js"

const defaultLang = ["az"];

i18next.use(LanguageDetector, initReactI18next).init({
  resources,
  fallbackLang: defaultLang,
  lng: window.localStorage.getItem("i18nextLng")
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LightgalleryProvider>
      <HelmetProvider>
        <RecoilRoot>
          <I18nextProvider i18n={i18next}>
            <App />
          </I18nextProvider>
        </RecoilRoot>
      </HelmetProvider>
    </LightgalleryProvider>
  </BrowserRouter>
);
