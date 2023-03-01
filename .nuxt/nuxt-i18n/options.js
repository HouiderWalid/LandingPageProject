export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"silentTranslationWarn":true,"silentFallbackWarn":true,"fallbackLocale":"en","lazy":true,"langDir":"lang/main/"},
  vueI18nLoader: false,
  locales: [{"code":"en","iso":"en-US","dir":"ltr","file":"en-US.js","cr":["AS","AI","AG","AU","BS","BB","BZ","BM","BW","IO","CM","CA","KY","CX","CC","CK","DM","ER","FK","FJ","GM","GH","GI","GD","GU","GG","GY","HK","IN","IE","IM","JM","JE","KE","KI","LS","LR","MW","MT","MH","MU","FM","MS","NA","NR","NZ","NG","NU","NF","MP","PK","PW","PG","PH","PN","PR","RW","SH","KN","LC","MF","VC","WS","SC","SL","SG","SB","ZA","GS","SD","SZ","TZ","TK","TO","TT","TC","TV","UG","GB","US","VU","VG","VI","ZM","ZW"]}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "no_prefix",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieAge":365,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en","iso":"en-US","dir":"ltr","file":"en-US.js","cr":["AS","AI","AG","AU","BS","BB","BZ","BM","BW","IO","CM","CA","KY","CX","CC","CK","DM","ER","FK","FJ","GM","GH","GI","GD","GU","GG","GY","HK","IN","IE","IM","JM","JE","KE","KI","LS","LR","MW","MT","MH","MU","FM","MS","NA","NR","NZ","NG","NU","NF","MP","PK","PW","PG","PH","PN","PR","RW","SH","KN","LC","MF","VC","WS","SC","SL","SG","SB","ZA","GS","SD","SZ","TZ","TK","TO","TT","TC","TV","UG","GB","US","VU","VG","VI","ZM","ZW"]}],
  localeCodes: ["en"],
  additionalMessages: [],
}
export const localeFiles = {
  0: "{",
  1: "}",
}

export const localeMessages = {}
