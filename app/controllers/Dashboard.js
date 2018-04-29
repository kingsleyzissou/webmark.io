// import _ from 'lodash'
import HTTP from '@app/utilities/http-status-codes'
import User from '@app/models/User' // Import the User Model
import Bookmark from '@app/models/Bookmark' // Import the Bookmark Model
import Library from '@app/models/Library' // Import the Library Model
import Controller from './Controller'

class DashboardController extends Controller {
  constructor () {
    super()
    this.User = new User()
    this.Bookmark = new Bookmark()
    this.Library = new Library()
    this.bindAll(['index', 'destroy'])
  }

  /**
   * List all bookmarks by a particular category
   *
   */
  index (req, res, next) {
    // Search for bookmarks based on the selected category
    let user = this.User.findBy({ id: req.session.user.id })

    if (!user) {
      let err = new Error('That user name or password does not exist')
      err.status = HTTP.UNAUTHORIZED
      return next(err)
    }

    let library = this.Library.getMultiple({ user_id: user.id })
    library = (!library) ? [] : library

    let min = {
      count: 0,
      title: ''
    }

    let max = {
      count: 0,
      title: ''
    }

    library.forEach(lib => {
      let bookmarks = this.Bookmark.getMultiple({ library_id: lib.id })
      bookmarks = (!bookmarks) ? [] : bookmarks
      lib.bookmarks = bookmarks
      if (bookmarks.length > max.count) {
        max.count = bookmarks.length
        max.title = lib.title
      }

      if (bookmarks.length <= min.count) {
        min.count = bookmarks.length
        min.title = lib.title
      }
    })

    const stats = {
      bookmarks: this.Bookmark.countByUser(user.id),
      total: {
        bookmarks: this.Bookmark.all().length,
        users: this.User.all().length
      },
      collections: this.Library.countByUser(user.id),
      min: min,
      max: max
    }

    res.render('dashboard/index', { user, library, stats })
  }

  /**
   * Delete a bookmark - the method does not delete the
   *
   */
  destroy (req, res) {
    Bookmark.remove({ id: req.body.id }, (err) => {
      // XHR request and therefore a json error response is sent
      if (err) return res.status(HTTP.INTERNAL_SERVER_ERROR).send(err)
      // XHR request and therefore a json response is sent
      return res.status(HTTP.OK).send({
        success: true,
        data: req.body.id,
        message: 'Bookmark successfully deleted'
      })
    })
  }

  test (req, res) {
    console.log(this.Bookmark.add({ 'something': 'else' }))
    return res.status(HTTP.OK).send({
      success: true,
      data: req.body.id,
      message: 'Bookmark successfully deleted',
      bookmark: this.Bookmark.all()
    })
  }
}

export default DashboardController
