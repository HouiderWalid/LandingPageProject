export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  vue: {
    config: {
      productionTip: false,
      //devtools: true
    }
  },

  head: {
    titleTemplate: '%s - LandingPageProject',
    title: 'LandingPageProject',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Landing Page Project.'},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      //{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    //'@nuxtjs/vuetify',
    //'@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n'
  ],

  // googleFonts: {
  //   display: 'swap',
  //   families: {
  //     Tajawal: [200, 300, 400, 500, 700, 800, 900]
  //   }
  // },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      options: { variations: false },
      themes: {
        light: {
          primary: '#252733',
          secondary: '#0073c0',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          danger: '#FF5252'
        },
      }
    },
    defaultAssets: false
  },

  i18n: {
    locales: [
      {
        code: 'en', iso: 'en-US', dir: 'ltr', cr: ["AS", "AI", "AG", "AU", "BS", "BB", "BZ", "BM", "BW", "IO", "CM",
          "CA", "KY", "CX", "CC", "CK", "DM", "ER", "FK", "FJ", "GM", "GH", "GI", "GD", "GU", "GG", "GY", "HK", "IN",
          "IE", "IM", "JM", "JE", "KE", "KI", "LS", "LR", "MW", "MT", "MH", "MU", "FM", "MS", "NA", "NR", "NZ", "NG",
          "NU", "NF", "MP", "PK", "PW", "PG", "PH", "PN", "PR", "RW", "SH", "KN", "LC", "MF", "VC", "WS", "SC", "SL",
          "SG", "SB", "ZA", "GS", "SD", "SZ", "TZ", "TK", "TO", "TT", "TC", "TV", "UG", "GB", "US", "VU", "VG", "VI",
          "ZM", "ZW"]
      },
      {
        code: 'fr', iso: 'en-FR', dir: 'ltr', cr: ["BE", "BJ", "BF", "BI", "CM", "CA", "CF", "TD", "KM", "CG", "CD",
          "CI", "DJ", "GQ", "FR", "GF", "PF", "GA", "GP", "GG", "GN", "HT", "JE", "LB", "LU", "MG", "ML", "MQ", "YT",
          "MC", "NC", "NE", "RW", "RE", "BL", "MF", "PM", "SN", "SC", "CH", "TG", "VU", "WF",]
      },
      {
        code: 'es', iso: 'en-ES', dir: 'ltr', cr: ["AR", "BZ", "BO", "CL", "CO", "CR", "CU", "DO", "EC", "SV", "GQ",
          "GU", "GT", "HN", "MX", "NI", "PA", "PY", "PE", "PR", "ES", "UY", "VE",]
      },
      {
        code: 'ar', iso: 'en-EG', dir: 'rtl', cr: ["DZ", "BH", "TD", "KM", "DJ", "EG", "ER", "IQ", "IL", "JO", "KW",
          "LB", "LY", "MR", "MA", "OM", "PS", "QA", "SA", "SO", "SD", "SY", "TN", "AE", "YE"]
      },
      {code: 'it', iso: 'en-IT', dir: 'ltr', cr: ["VA", "IT", "SM", "CH"]}
    ],
    strategy: 'no_prefix',
    defaultLocale: 'en',
    vueI18n: {
      silentTranslationWarn: true,
      silentFallbackWarn: true,
      fallbackLocale: 'en',
      messages: {}
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: {
      ignoreOrder: true
    },
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: true,
        maxSize: 244000,
        cacheGroups: {
          vendor: {
            name: 'node_vendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            maxSize: 244000
          }
        }
      }
    }
  }
}
