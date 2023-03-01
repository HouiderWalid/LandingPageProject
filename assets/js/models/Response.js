export class Response {

  constructor(data_model) {
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

  getResponseData(){
    return this.ResponseData?.content
  }
}

export default Response
