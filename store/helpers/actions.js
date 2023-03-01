import {serializeObject, getType} from "../../assets/js/mcn-helpers";
import Response from "../../assets/js/models/Response";

const sendApiRequest = function (context) {
  let {
    axios,
    i18n,
    store,
    method,
    uri,
    data,
    headers,
    contentType,
    onUploadProgress,
    onDownloadProgress,
    baseURL,
    timeout,
    raw
  } = context
  let url_obj = new URL([axios.defaults.baseURL, uri].join(''))
  let url_search = new URLSearchParams(url_obj.search)
  url_search.set('lang', i18n.locale ?? 'en')
  let AxiosConfig = {
    method,
    url: [url_obj.pathname.replace(/^\/api/, ''), '?', url_search.toString()].join(''),
    data: Object.assign({}, axios.defaults.data, data),
    headers: Object.assign({}, axios.defaults.headers, headers)
  }
  if (contentType === 'form-data' && AxiosConfig) {
    AxiosConfig.headers['content-type'] = 'multipart/form-data'
    const formData = new FormData();
    if (Array.isArray(data)) data.forEach(field => {
      Array.isArray(field.value)
        ? field.value.length > 0
        ? field.value.forEach(sv => formData.append(`${field.name}[]`, sv))
        : formData.append(`${field.name}[]`, field.value)
        : formData.append(field.name, field.value)
    })
    if (AxiosConfig.method === 'PUT') {
      formData.append('_method', AxiosConfig.method)
      AxiosConfig.method = 'POST'
    }
    AxiosConfig.data = formData
  } else AxiosConfig.data = Array.isArray(data)
    ? data.map(i => JSON.stringify(i)).reduce((pi, i) => Object.assign(pi, JSON.parse(i)), {})
    : JSON.stringify(data)
  if (onUploadProgress) AxiosConfig.onUploadProgress = onUploadProgress
  if (onDownloadProgress) AxiosConfig.onDownloadProgress = onDownloadProgress
  if (baseURL) AxiosConfig.baseURL = baseURL
  if (timeout) AxiosConfig.timeout = timeout
  return new ResponseManager(axios(AxiosConfig), context, raw)
}

function ResponseManager(httpClient, context, raw = false) {
  //httpClient.then(res => res?.data?.code === 400 ? router.push('/login') : null)
  let {isAsync} = context
  this.OnStart = start => {
    getType(start) === 'Function' ? start() : null
    return this
  }
  this.OnSuccess = (success, model, loop = true) => {
    httpClient.then(res => {
        let response_data = res?.data
        let code = response_data?.code
        let data = response_data?.data
        let message = response_data?.message
        code === 200
          ? model
          ? Array.isArray(data)
            ? loop
              ? data.forEach(row => success(serializeObject(row, model)))
              : success(data.map(row => serializeObject(row, model)))
            : success(serializeObject(data, model), message)
          : success(raw ? response_data : serializeObject(response_data, Response))
          : null
      }
    )
    return this
  }
  this.OnFailure = failure => {
    httpClient.then(res => ![401, 200, 501].includes(res?.data?.code) && res?.data?.code ? failure(raw ? res?.data : res?.data?.messages) : null)
      .catch(err => failure(err))
    return this
  }
  this.OnValidationErrors = validation => {
    httpClient.then(res => res?.data?.code === 401 ? validation?.(raw ? res?.data : res?.data?.messages) : null)
    return this
  }
  this.OnPaymentFailure = paymentFailure => {
    httpClient.then(res => res?.data?.code === 501 ? paymentFailure(raw ? res?.data : res?.data?.messages) : null)
      .catch(err => paymentFailure(err))
    return this
  }
  this.OnFinished = finished => {
    httpClient.then(() => finished()).catch(() => finished())
    return this
  }

  if (isAsync) return this

  return new Promise((resolve, reject) => {
    httpClient.then(res => {
      /*console.log('Promise uri', context.uri)
      console.log('Promise res', res.data)*/
      let dummy_res = {code: 500, data: [], messages: 'Server failure.'}
      let model = context?.data?.data_model
      let return_data_model = context?.data?.return_data
      let data = return_data_model ? res.data.data : res.data
      if (res.data?.code === 200) resolve(serializeObject(data, (return_data_model ? new model() : new Response(model ?? null))))
      else if (res.data?.code) reject(serializeObject(res.data, new Response()))
      else reject(serializeObject(dummy_res, new Response()))
    }).catch(err => {
      let dummy_res = {code: 500, data: [], messages: err.message}
      reject(serializeObject(dummy_res, new Response()))
    })
  })
}

export default {
  sendApiRequest
};
