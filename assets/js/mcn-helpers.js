function toBase64(string) {
  if (process.client) {
    return string ? window.btoa(string) : ''
  } else {
    return string ? Buffer.from(`${string}`, 'ascii').toString('base64') : ''
  }
}

function fromBase64(string) {
  if (process.client) {
    return string ? window.atob(string) : ''
  } else {
    return string ? Buffer.from(`${string}`, 'base64').toString('ascii') : ''
  }
}

function hexToRgb(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : {};
}

function serializeObject(data, Model, param = null) {
  let model = typeof Model === 'function' ? new Model(param) : Model
  if (data && model) {
    Object.keys(model).forEach(key => {
      if (data[model[key]['fieldName']] !== undefined) {
        if (model[key]?.model) {
          let data_type = typeof data[model[key]['fieldName']]
          if (Array.isArray(data[model[key]['fieldName']])) {
            let dataArray = []
            data[model[key]['fieldName']].forEach(subObject => dataArray.push(serializeObject(subObject, model[key].model)))
            model[key].content = dataArray
          } else if (data[model[key]['fieldName']] && data_type === 'object')
            model[key].content = serializeObject(data[model[key]['fieldName']], model[key].model)
          else model[key].content = data[model[key]['fieldName']]
        } else if (model[key].type && model[key].type === 'json' && typeof data[model[key]['fieldName']] === 'string') {
          model[key].content = JSON.parse(data[model[key]['fieldName']])
        } else {
          model[key].content = data[model[key]['fieldName']]
        }
      }
    })
  }
  return model
}

function isConstructor(f) {
  try {
    new f();
  } catch (err) {
    // verify err is the expected error and then
    return false;
  }
  return true;
}

const getType = v => Object.prototype.toString.call(v).slice(8, -1)
const isObject = v => getType(v) === 'Object'
const isString = v => getType(v) === 'String'
const isFunction = v => getType(v) === 'Function'
const hasAstrix = v => Array.isArray(v) && v.some(item => item === '*')

export {
  toBase64,
  fromBase64,
  hexToRgb,
  serializeObject,
  isConstructor,
  getType,
  isObject,
  isString,
  isFunction,
  hasAstrix
}
