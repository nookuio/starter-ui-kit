export default defineNuxtConfig({
  vite: { server: { hmr: { overlay: false } } },
  devtools: { enabled: false },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    'floating-vue/nuxt',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nookuio/nuxt',
  ],
  runtimeConfig: {},
  future: { compatibilityVersion: 4 },
});
