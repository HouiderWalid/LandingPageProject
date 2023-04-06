import {isConstructor, isFunction, isObject} from "../mcn-helpers";

export default class Model {

  constructor() {
  }

  static reInstantiate(oldModel, type) {
    let Type = type ?? this
    if (!isObject(oldModel) || !isConstructor(Type)) return null
    let newModel = new Type();
    Object.keys(newModel).forEach(newModelKey => {
      let oldModelField = oldModel[newModelKey]
      let newModelField = newModel[newModelKey]
      if (!oldModelField || !newModelField) return
      let hasDynamicModel = isFunction(newModelField.dynamicModel)
      newModel[newModelKey].content = newModelField.model || hasDynamicModel
        ? Array.isArray(oldModelField.content)
          ? oldModelField.content.map(item => Model.reInstantiate(item, hasDynamicModel
            ? newModelField.dynamicModel(item)
            : newModelField.model))
          : Model.reInstantiate(oldModelField.content, hasDynamicModel
            ? newModelField.dynamicModel(oldModelField.content)
            : newModelField.model)
        : oldModelField?.content ?? null
    })
    return newModel
  }

}
