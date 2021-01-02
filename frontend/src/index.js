import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import COMMON_EN from './translations/en/common.json';
import FORMS_EN from './translations/en/forms.json';
import MAIN_EN from './translations/en/main.json';
import COMMON_RU from './translations/ru/common.json';
import FORMS_RU from './translations/ru/forms.json';
import MAIN_RU from './translations/ru/main.json';
import App from './components/App/App';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: COMMON_EN,
      forms: FORMS_EN,
      main: MAIN_EN,
    },
    ru: {
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
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
