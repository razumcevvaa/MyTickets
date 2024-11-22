// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  // devtools: { enabled: true },
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        // { name: 'favicon', content: '/logo.svg' }
      ],
      link: [
        { rel: 'icon', href: 'http://localhost:3000/MyTickets' }
      ],
      titleTemplate: '%s - Site Title',
    }
  },
  css: ['~/assets/css/style.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  nitro: {
    plugins: ['plugins/extend-html.ts']
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['swiper-container', 'swiper-slide'].includes(tag),
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    }
  },

  prisma: {
    installCLI: false,
    installClient: false,
    generateClient: false,
    installStudio: false,
    autoSetupPrisma: true
  },

  modules: ['@pinia/nuxt', '@prisma/nuxt', '@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})