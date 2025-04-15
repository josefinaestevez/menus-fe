import type { NuxtI18nOptions } from '@nuxtjs/i18n';

const i18nOptions: NuxtI18nOptions = {
  locales: [
    {
      code: 'es',
      name: 'Español',
    },
    {
      code: 'en',
      name: 'English',
    },
  ],
  defaultLocale: 'es',
  vueI18n: './i18n.config.ts', // Path to Vue I18n configuration
  bundle: {
    optimizeTranslationDirective: false,
  },
};

export default i18nOptions;
