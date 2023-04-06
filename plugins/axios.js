import {getVariables} from "../assets/js/environment";

export default function ({ $axios, req }, inject) {
  let host_name = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/.exec(req?.headers?.host)?.[1]
  let api_url = getVariables(host_name).API
  const api = $axios.create({
    baseURL: api_url,
    timeout: 60000,
    headers: {
      "content-type": "application/json",
      "accept": "application/json",
      //"content-type": "multipart/form-data",
      //'X-CSRF-TOKEN': document.querySelector("meta[name='csrf-token']").content
    },
    responseType: "json",
  })
  inject('mcnApi', api)
}
