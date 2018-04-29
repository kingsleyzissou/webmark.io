import uuid from 'uuid'
import moment from 'moment'
import LinkPreview from 'react-native-link-preview'
import { validationResult } from 'express-validator/check'
import logger from '@app/utilities/logger'
import HTTP from '@app/utilities/http-status-codes'
import Bookmark from '@app/models/Bookmark' // Import the Bookmark Model
import Image from '@app/models/Image'
import Library from '@app/models/Library'
import User from '@app/models/User' // Import the Bookmark Model
import Controller from './Controller'

/**
 * List all bookmarks by a particular category
 *
 */
class BookmarkController extends Controller {
  constructor () {
    super()
    this.User = new User()
    this.Image = new Image()
    this.Bookmark = new Bookmark()
    this.Library = new Library()
    this.bindAll(['findByCat', 'destroy', 'store', 'getByDate'])
  }

  findByCat (req, res) {
    // Search for bookmarks based on the selected category
    this.Bookmark.find({ category: req.params.cat }, (err, bookmarks) => {
      if (err) res.send(err)

      const data = {
        title: req.params.cat, // Set the title to be sent to the view in the data object
        modal: false, // Initialise the state of the modal
        temp: {}, // Send an empty object that will be used on the client-side to delete a bookmark
        bookmarks // Send the bookmarks
      }

      logger.info('Rendering bookmarks by ' + req.params.cat + ' category' + data)

      // Render the Vue view - the data sent needs to be in the form of an object
      // res.renderVue('dashboard/categories/Show', data, config.vue.template(data.title.toUpperCase() + ' Bookmarks'))
    })
  }

  create (req, res, next) {
    res.render('bookmark/create')
  }

  getByDate (req, res, next) {
    let user = this.User.findBy({ id: req.session.user.id })

    let bookmarks = this.Bookmark.filterByDate(user.id, req.params.period)

    return res.status(HTTP.OK).send({
      success: true,
      data: bookmarks,
      message: 'Bookmark successfully added'
    })
  }

  async linkPreview (req, res, next) {
    let link = await LinkPreview.getPreview(req.body.url)
    return res.status(HTTP.OK).send({
      success: true,
      data: link,
      message: 'Bookmark successfully deleted'
    })
  }

  store (req, res, next) {
    let user = this.User.findBy({ id: req.session.user.id })

    if (!user) {
      let err = new Error('That user name or password does not exist')
      err.status = HTTP.UNAUTHORIZED
      return next(err)
    }

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      let err = new Error()
      err.errors = errors.mapped()
      err.status = HTTP.UNPROCESSABLE_ENTITY

      if (!req.files || !req.files.file) err.errors.file = { 'msg': 'Please add a photo' }

      return next(err)
    }

    if (!req.files || !req.files.file) {
      let err = new Error()
      err.errors = { 'msg': 'Please add a photo' }
      err.status = HTTP.UNPROCESSABLE_ENTITY
      return next(err)
    }

    let bookmark = {
      id: uuid(),
      user_id: user.id,
      library_id: req.body.library_id,
      title: req.body.title,
      url: req.body.url,
      description: req.body.description,
      created_at: moment.now()
    }

    this.Image.upload(user.id, req.files.file, (result) => {
      bookmark.image_url = result.url
      let valid = this.Bookmark.add(bookmark)

      if (!valid) {
        let err = new Error('Unable to add bookmark')
        err.status = HTTP.INTERNAL_SERVER_ERROR
        return next(err)
      }

      return res.status(HTTP.OK).send({
        success: true,
        data: bookmark,
        message: 'Bookmark successfully added'
      })
    })
  }

  /**
   * Delete a bookmark - the method does not delete the
   *
   */
  destroy (req, res, next) {
    let valid = this.Bookmark.remove({ id: req.body.id })

    // XHR request and therefore a json error response is sent
    // if (err) return res.status(HTTP.INTERNAL_SERVER_ERROR).send(err)
    if (!valid) {
      let err = new Error('Unable to add bookmark')
      err.status = HTTP.INTERNAL_SERVER_ERROR
      return next(err)
    }
    // XHR request and therefore a json response is sent
    return res.status(HTTP.OK).send({
      success: true,
      data: req.body.id,
      message: 'Bookmark successfully deleted'
    })
  }
}

export default BookmarkController
