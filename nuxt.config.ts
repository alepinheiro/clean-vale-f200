// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    'nuxt-swiper',
    '@nuxt/image',
    'shadcn-nuxt',
    '@nuxtjs/i18n',
    'radix-vue/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon'
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'br'
  },
  tailwindcss: {
    configPath: './tailwind.config.js',
  }
})