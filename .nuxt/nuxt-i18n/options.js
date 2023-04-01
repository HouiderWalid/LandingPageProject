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
  vueI18n: {"silentTranslationWarn":true,"silentFallbackWarn":true,"fallbackLocale":"en","messages":{}},
  vueI18nLoader: false,
  locales: [{"code":"en","iso":"en-US","dir":"ltr","cr":["AS","AI","AG","AU","BS","BB","BZ","BM","BW","IO","CM","CA","KY","CX","CC","CK","DM","ER","FK","FJ","GM","GH","GI","GD","GU","GG","GY","HK","IN","IE","IM","JM","JE","KE","KI","LS","LR","MW","MT","MH","MU","FM","MS","NA","NR","NZ","NG","NU","NF","MP","PK","PW","PG","PH","PN","PR","RW","SH","KN","LC","MF","VC","WS","SC","SL","SG","SB","ZA","GS","SD","SZ","TZ","TK","TO","TT","TC","TV","UG","GB","US","VU","VG","VI","ZM","ZW"]},{"code":"fr","iso":"en-FR","dir":"ltr","cr":["BE","BJ","BF","BI","CM","CA","CF","TD","KM","CG","CD","CI","DJ","GQ","FR","GF","PF","GA","GP","GG","GN","HT","JE","LB","LU","MG","ML","MQ","YT","MC","NC","NE","RW","RE","BL","MF","PM","SN","SC","CH","TG","VU","WF"]},{"code":"es","iso":"en-ES","dir":"ltr","cr":["AR","BZ","BO","CL","CO","CR","CU","DO","EC","SV","GQ","GU","GT","HN","MX","NI","PA","PY","PE","PR","ES","UY","VE"]},{"code":"ar","iso":"en-EG","dir":"rtl","cr":["DZ","BH","TD","KM","DJ","EG","ER","IQ","IL","JO","KW","LB","LY","MR","MA","OM","PS","QA","SA","SO","SD","SY","TN","AE","YE"]},{"code":"it","iso":"en-IT","dir":"ltr","cr":["VA","IT","SM","CH"]}],
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
  normalizedLocales: [{"code":"en","iso":"en-US","dir":"ltr","cr":["AS","AI","AG","AU","BS","BB","BZ","BM","BW","IO","CM","CA","KY","CX","CC","CK","DM","ER","FK","FJ","GM","GH","GI","GD","GU","GG","GY","HK","IN","IE","IM","JM","JE","KE","KI","LS","LR","MW","MT","MH","MU","FM","MS","NA","NR","NZ","NG","NU","NF","MP","PK","PW","PG","PH","PN","PR","RW","SH","KN","LC","MF","VC","WS","SC","SL","SG","SB","ZA","GS","SD","SZ","TZ","TK","TO","TT","TC","TV","UG","GB","US","VU","VG","VI","ZM","ZW"]},{"code":"fr","iso":"en-FR","dir":"ltr","cr":["BE","BJ","BF","BI","CM","CA","CF","TD","KM","CG","CD","CI","DJ","GQ","FR","GF","PF","GA","GP","GG","GN","HT","JE","LB","LU","MG","ML","MQ","YT","MC","NC","NE","RW","RE","BL","MF","PM","SN","SC","CH","TG","VU","WF"]},{"code":"es","iso":"en-ES","dir":"ltr","cr":["AR","BZ","BO","CL","CO","CR","CU","DO","EC","SV","GQ","GU","GT","HN","MX","NI","PA","PY","PE","PR","ES","UY","VE"]},{"code":"ar","iso":"en-EG","dir":"rtl","cr":["DZ","BH","TD","KM","DJ","EG","ER","IQ","IL","JO","KW","LB","LY","MR","MA","OM","PS","QA","SA","SO","SD","SY","TN","AE","YE"]},{"code":"it","iso":"en-IT","dir":"ltr","cr":["VA","IT","SM","CH"]}],
  localeCodes: ["en","fr","es","ar","it"],
  additionalMessages: [],
}
export const localeFiles = {
  0: "{",
  1: "}",
}

export const localeMessages = {}
