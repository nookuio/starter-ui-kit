export default defineNuxtConfig({
  vite: { server: { hmr: { overlay: false } } },
  devtools: { enabled: false },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@nooku/nuxt',
    'floating-vue/nuxt',
    '@nuxt/icon',
    '@pinia/nuxt',
  ],
  runtimeConfig: {},
  future: {
    compatibilityVersion: 4,
  }
});
