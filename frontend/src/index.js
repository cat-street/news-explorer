import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import COMMON_EN from './translations/en-US/common.json';
import FORMS_EN from './translations/en-US/forms.json';
import MAIN_EN from './translations/en-US/main.json';
import COMMON_RU from './translations/ru-RU/common.json';
import FORMS_RU from './translations/ru-RU/forms.json';
import MAIN_RU from './translations/ru-RU/main.json';
import App from './components/App/App';

i18next.use(LanguageDetector).init({
  interpolation: { escapeValue: false },
  resources: {
    'en-US': {
      common: COMMON_EN,
      forms: FORMS_EN,
      main: MAIN_EN,
    },
    'ru-RU': {
      common: COMMON_RU,
      forms: FORMS_RU,
      main: MAIN_RU,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App language={i18next.language} />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
