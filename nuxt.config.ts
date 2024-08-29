// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", '@nuxtjs/robots'],
  app: {
    head: {
      title: 'Foto X Skjelstadås',
      htmlAttrs: {
        'data-theme': 'dark', // Set your desired theme here
        lang: 'no', // Set the language attribute to Norwegian
      },
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap',
          rel: 'stylesheet',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap',
          rel: 'stylesheet',
        },
      ],
    },
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
});