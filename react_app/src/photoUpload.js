import axios from 'axios'

export default class photoUpload {

    constructor() {
        this.cloudinary_url = "https://api.cloudinary.com/v1_1/djmpnun2q/upload"
        this.cloudinary_preset = "i9m6wn31"// API server domain
        this.upload = this.upload.bind(this)
    }

    upload(file){
      let formData = new FormData();
      formData.append('file',file);
      formData.append('upload_preset',this.cloudinary_preset)
        for (let key of formData.entries()) {
        console.log(key[0] + ', ' + key[1]);
        }
      const options = {
        url:this.cloudinary_url,
        method: 'POST',
        headers: { 'Content-type': 'application/x-www-form-urlencoded' },
        data:formData
      }
      console.log(options)

      return axios(options)
}
}
