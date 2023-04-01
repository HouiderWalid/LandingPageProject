import Vue from 'vue'
import Bugsnag from '@bugsnag/js'
import BugsnagPluginVue from '@bugsnag/plugin-vue'
const options = {"environment":"development","appVersion":"1.0.0","apiKey":"be9706b5587fbab65b48a9ab61232e18"}
options.plugins = [new BugsnagPluginVue()]

let bugsnagClient

export default function ({ app }, inject) {
  if (!Bugsnag._client) {
    bugsnagClient = Bugsnag.start(options)
    Bugsnag.getPlugin('vue').installVueErrorHandler(Vue)
  } else {
    bugsnagClient = Bugsnag._client
  }

  inject('bugsnag', bugsnagClient)
}
