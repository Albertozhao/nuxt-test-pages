export default {
  /*
   ** Rendering mode
   ** Doc: https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",

    /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',

  /*
   ** Nuxt.js modules
   ** Doc: https://nuxtjs.org/guide/modules
   */
  modules: [
    // Doc: https://http.nuxtjs.org
    "@nuxt/http",
    // TODO: Remove it if you want to eject from codeSandbox
    "./codesandbox",
    "nuxt-i18n"
  ],

  i18n: {
    baseUrl: "",
    detectBrowserLanguage: {
      useCookie: true,
      cookieDomain: null,
      cookieKey: "i18n_redirected",
      alwaysRedirect: true,
      fallbackLocale: "",
      onlyOnRoot: true
    },
    differentDomains: false,
    strategy: "prefix",
    locales: [
      {
        code: "en",
        iso: "en",
        name: "English"
      },
      {
        code: "ru",
        iso: "ru-RU",
        name: "Russian"
      }
    ],
    defaultLocale: "en",
    langDir: null,
    lazy: false,
    parsePages: true,
    pages: {},
    rootRedirect: null,
    seo: false,
    vueI18n: {
      messages: {
        ru: {
          home: "Главная",
          about: "О нас"
        },
        en: {
          home: "Homepage",
          about: "About us"
        }
      },
      fallbackLocale: "en"
    },
    vueI18nLoader: true,
    vuex: {
      moduleName: "i18n",
      syncLocale: false,
      syncMessages: false,
      syncRouteParams: true
    }
  },

  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Nuxt.js starter for CSB",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Official Nuxt.js starter for CodeSandBox"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/api/configuration-css
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/guide/plugins
   */
  plugins: [],

  /*
   ** HTTP module configuration
   */
  http: {
    // See https://http.nuxtjs.org/api/#options
  },

  /*
   ** Build configuration
   ** Doc: https://nuxtjs.org/api/configuration-build
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
