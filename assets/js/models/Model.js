import {isConstructor, isObject} from "../mcn-helpers";

export default class Model {
  constructor() {
  }

  static reInstantiate(model, Type) {
    if (!isObject(model) || !isConstructor(Type)) return null
    let new_model = new Type();
    Object.keys(new_model).forEach(new_model_key => {
      let model_field = model[new_model_key]
      let new_model_field = new_model[new_model_key]
      new_model[new_model_key].content = new_model_field.model
        ? Array.isArray(model_field.content)
          ? model_field.content.map(item => Model.reInstantiate(item, new_model_field.model))
          : Model.reInstantiate(model_field.content, new_model_field.model)
        : model_field?.content ?? null
    })
    return new_model
  }

}
