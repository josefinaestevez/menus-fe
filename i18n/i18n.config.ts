import type { I18nOptions } from 'vue-i18n';
import en from '../locales/en';
import es from '../locales/es';

const i18nConfig: I18nOptions = {
  legacy: false,
  locale: 'es', // Default locale
  fallbackLocale: 'en',
  messages: {
    en,
    es,
  },
};

export default i18nConfig;
