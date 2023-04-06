import repository from "./helpers/actions";
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
/*  SendRequest({commit, state}, payload = null) {
    if (!payload.test) payload.headers = {'Authorization': `Bearer ${state.savedData.token}`}
    return repository.sendApiRequest({i18n: this.$i18n, axios: this.$mcnApi, commit, state, ...payload})
  },*/
}

export const getters = {

}

export const strict = false
