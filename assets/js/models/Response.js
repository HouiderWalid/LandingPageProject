import Model from "./Model";

export class Response extends Model {

  constructor(data_model) {
    super()
    if (data_model) this.ResponseData.model = data_model
  }

  ResponseCode = {
    fieldName: 'code',
    content: null
  }
  ResponseData = {
    fieldName: 'data',
    content: null
  }
  ResponseMessages = {
    fieldName: 'messages',
    content: null
  }

  getResponseData() {
    return this.ResponseData?.content
  }

  getVisitId() {
    return this.getResponseData()?.['visit_id']
  }
}

export default Response
