// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    'nuxt-swiper',
    '@nuxt/image',
    'shadcn-nuxt',
    '@nuxtjs/seo',
    '@nuxtjs/i18n',
    'radix-vue/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'br'
  },
  tailwindcss: {
    configPath: './tailwind.config.js',
  },
  site: {
    url: 'https://example.com',
    name: 'F200 - Detergente Alcalino - Clean Vale',
    description: 'A eficiência na higienização que a sua cozinha precisa',
    defaultLocale: 'br', // not needed if you have @nuxtjs/i18n installed
  },
  googleFonts: {
    families: {
      Montserrat: '100..900',
    }
  }
})