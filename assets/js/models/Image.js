import {ImageExtension} from "./ImageExtension";

export class Image {
    ImageId = {
        fieldName: 'image_id',
        fieldTitle: 'Image Id',
        content: null
    }
    ImageName = {
        fieldName: 'image_name',
        fieldTitle: 'Image Name',
        content: null
    }
    ImageUrl = {
        fieldName: 'image_url',
        fieldTitle: 'Image Url',
        content: null
    }
    ImageExtension = {
        fieldName: 'image_extension',
        fieldTitle: 'Image Extension',
        content: null
    }
    ImageFolder = {
        fieldName: 'image_folder',
        fieldTitle: 'Image Folder',
        content: null
    }
    ImageOtherExtensions = {
        fieldName: 'image_other_extensions',
        fieldTitle: 'Image Other Extensions',
        model: ImageExtension,
        content: null
    }

    getUrl(){
      return this.ImageUrl.content
    }
}

export default Image
