const getType = v => Object.prototype.toString.call(v).slice(8, -1)
const isObject = v => getType(v) === 'Object'
const isFunction = v => getType(v) === 'Function'
function serializeObject(data, Model, param = null) {
  if (!data) return null
  if (!Model) return data
  let model = isFunction(Model) ? new Model(param) : Model
  if (data && model) {
    Object.keys(model).forEach(key => {
      if (data[model[key].fieldName] !== undefined) {
        if (model[key].model || model[key].dynamicModel) {
          if (Array.isArray(data[model[key].fieldName])) {
            let dataArray = []
            data[model[key].fieldName].forEach(subObject =>
              dataArray.push(serializeObject(
                subObject,
                isFunction(model[key].dynamicModel)
                  ? model[key].dynamicModel(subObject)
                  : model[key].model
              )))
            model[key].content = dataArray
          } else if (isObject(data[model[key].fieldName]))
            model[key].content = serializeObject(
              data[model[key].fieldName],
              isFunction(model[key].dynamicModel)
                ? model[key].dynamicModel(data[model[key].fieldName])
                : model[key].model
            )
          else model[key].content = data[model[key].fieldName]
        } else if (model[key].type && model[key].type === 'json' && typeof data[model[key].fieldName] === 'string') {
          model[key].content = JSON.parse(data[model[key].fieldName])
        } else model[key].content = data[model[key].fieldName]
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

function hexToRgb(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export {
  getType,
  serializeObject,
  isConstructor,
  isFunction,
  isObject,
  hexToRgb
}
