// https://nuxt.com/docs/api/configuration/nuxt-config
import i18nOptions from './i18n/i18n.options';
import { defineNuxtConfig } from 'nuxt/config';
import { resolve } from 'path';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({
  path: resolve(
    __dirname,
    'environment',
    `${process.env.NODE_ENV || 'development'}.env`
  ),
});

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  typescript: {
    typeCheck: true,
  },
  i18n: i18nOptions,
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
    },
  },
});
