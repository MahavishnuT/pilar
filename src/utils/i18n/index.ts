import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import nl from './locales/nl/nl.json';
import en from './locales/en/en.json';
import fr from './locales/fr/fr.json';

const savedLanguage = localStorage.getItem('language') || 'en';

const resources = {
  en: {
    translation: en,
  },
  nl: {
    translation: nl,
  },
  fr: {
    translation: fr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  lng: savedLanguage,

  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
