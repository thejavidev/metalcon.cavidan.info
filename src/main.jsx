import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { LightgalleryProvider } from "react-lightgallery";
import { Provider } from 'react-redux';
import configeStore from './components/store/configureStore.js'
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from './components/transitions/index.js';


const defaultLanguage = ["az"]
i18next.use(LanguageDetector, initReactI18next,).init({
  resources,
  fallbackLng: defaultLanguage,
  interpolation: { escapeValue: true },
  lng: window.localStorage.getItem('i18nextLng'),
  debug: false,
})

const store = configeStore();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LightgalleryProvider>
        <Provider store={store}>
          <I18nextProvider i18n={i18next}>
            <App />
          </I18nextProvider>
        </Provider>
      </LightgalleryProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
