import _ from 'lodash'
import cloudinary from 'cloudinary'
import path from 'path'
import config from 'config'
import Model from './Model'

class Image extends Model {
  constructor () {
    super('images')
    cloudinary.config(config.cloudinary)
  }

  upload (user, image, response) {
    return image.mv('tempimage', err => {
      if (!err) {
        cloudinary.uploader.upload('tempimage')
          .then(result => {
            // console.log(result)
            response(result)
          })
      }
    })
  }

  deletePicture (user, image) {
    const id = path.parse(image)
    let album = this.getAlbum(user)
    _.remove(album.photos, { img: image })
    cloudinary.api.delete_resources([id.name], function (result) {
      console.log(result)
    })
  }

  deleteAllPictures (user) {
    let album = this.getAlbum(user)
    if (album) {
      album.photos.forEach(photo => {
        const id = path.parse(photo.img)
        cloudinary.api.delete_resources([id.name], result => {
          console.log(result)
        })
      })
      this.store.remove(album)
    }
  }
}

export default Image
