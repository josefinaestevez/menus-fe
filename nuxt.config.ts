// https://nuxt.com/docs/api/configuration/nuxt-config
import i18nOptions from './i18n/i18n.options';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  typescript: {
    typeCheck: true,
  },
  i18n: i18nOptions,
});
