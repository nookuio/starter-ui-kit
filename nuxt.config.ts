export default defineNuxtConfig({
  vite: { server: { hmr: { overlay: false } } },
  devtools: { enabled: false },
  modules: [
    '@nookuio/nuxt',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    'floating-vue/nuxt',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  future: { compatibilityVersion: 4 },
  colorMode: {
    classSuffix: ''
  }
});
