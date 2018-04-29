import Controller from './Controller'
// import logger from '@app/utilities/logger'
import User from '@app/models/User'
import Image from '@app/models/Image'
import HTTP from '@app/utilities/http-status-codes'

/**
 * Render the about page view
 *
 */
class UploadController extends Controller {
  constructor () {
    super()
    this.User = new User()
    this.Image = new Image()
    this.bindAll(['store'])
  }

  async store (req, res, next) {
    let user = this.User.findBy({ username: 'gianluca' })

    if (!user) {
      let err = new Error('That user name or password does not exist')
      err.status = HTTP.UNAUTHORIZED
      return next(err)
    }

    let file = req.files.file

    this.Image.upload(user.id, file, (result) => {
      return res.status(HTTP.OK).send({
        success: true,
        data: {
          'url': result.url
        },
        message: 'Successful'
      })
    })
  }
}

export default UploadController
