import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],

  vite: { 
    server: { hmr: { overlay: false } },
    plugins: [tailwindcss()],
  },

  devtools: { enabled: false },

  modules: [
    '@vueuse/nuxt',
    '@nuxt/fonts',
    'floating-vue/nuxt',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nookuio/nuxt',
  ],

  future: { compatibilityVersion: 4 },
  colorMode: { classSuffix: '' },
  compatibilityDate: '2025-02-06',
});