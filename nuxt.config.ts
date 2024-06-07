// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxt/examples-ui', './ui', './base'],
  runtimeConfig: {
    public: {
      theme: {
        primaryColor: 'user_primary',
      },
    },
  },
})
