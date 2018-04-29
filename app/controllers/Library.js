// import _ from 'lodash'
import uuid from 'uuid'
// import { validationResult } from 'express-validator/check'
import Controller from './Controller'
import User from '@app/models/User' // Import Library model
import Library from '@app/models/Library' // Import Library model
import Bookmark from '@app/models/Bookmark' // Import Bookmark model
import logger from '@app/utilities/logger'
import HTTP from '@app/utilities/http-status-codes'

class LibraryController extends Controller {
  constructor () {
    super()
    this.User = new User()
    this.Library = new Library()
    this.Bookmark = new Bookmark()
    this.bindAll(['index', 'show', 'store', 'destroy'])
  }

  /**
   * List all categories
   *
   */
  index (req, res) {
    // Return all category documents
  }

  show (req, res, next) {
    let user = this.User.findBy({ username: 'gianluca' })

    if (!user) {
      let err = new Error('That user name or password does not exist')
      err.status = HTTP.UNAUTHORIZED
      return next(err)
    }

    let library = this.Library.findBy({ id: req.params.id })
    library = (!library) ? [] : library

    let bookmarks = this.Bookmark.getMultiple({ library_id: req.params.id })
    bookmarks = (!bookmarks) ? [] : bookmarks

    res.render('library/show', { user, library, bookmarks })
    // return res.status(HTTP.OK).send({
    //   success: true,
    //   data: collection,
    //   message: 'Library saved to database'
    // })
  }

  /**
   * List all categories
   *
   */
  store (req, res, next) {
    let user = this.User.findBy({ id: req.session.user.id })

    if (!user) {
      let err = new Error('That user name or password does not exist')
      err.status = HTTP.UNAUTHORIZED
      return next(err)
    }

    let library = {
      id: uuid(),
      title: req.body.title,
      user_id: user.id,
      bookmarks: []
    }

    let valid = this.Library.add(library)

    if (!valid) {
      let err = new Error('That user name or password does not exist')
      err.status = HTTP.UNAUTHORIZED
      return next(err)
    }

    logger.info('Library saved to database')

    return res.status(HTTP.OK).send({
      success: true,
      data: library,
      message: 'Library saved to database'
    })
  }

  /**
   * Delete a bookmark collection - the method does not delete the
   *
   */
  destroy (req, res, next) {
    let valid = this.Library.remove({ id: req.body.id })

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
      message: 'Library successfully deleted'
    })
  }
}

export default LibraryController
