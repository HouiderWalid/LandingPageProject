import {serializeObject} from "../assets/js/mcn-helpers";
import repository from "./helpers/actions";
import Model from "../assets/js/models/Model";
import Domain from "../assets/js/models/Domain";

export const state = () => ({
  savedData: {
    orders: [],
    sale_page_referrer_id: null,
    sale_page_pt: null,
    click_query: {},
    client_language: null,
    client_country: null,
  },
  pageAddOns: null,
  client_location: null,
  domain: null
})

export const mutations = {

}

export const actions = {
  sendRequest({commit, state}, payload = null) {
    return repository.sendApiRequest({i18n: this.$i18n, axios: this.$mcnApi, commit, state, ...payload})
  },
}

export const getters = {
  getDomain(state) {
    return Model.reInstantiate(state.domain, Domain)
  },
  isNavBarActive(state) {
    return state.pageAddOns?.NavBar?.content ?? true
  }
}

export const strict = false
