// import config from 'config'
import logger from '@app/utilities/logger'
import User from '@app/models/User'
import Controller from './Controller'
import Bookmark from '@app/models/Bookmark'
import Library from '@app/models/Library'

/**
 * Render the welcome page view
 *
 */
class WelcomeController extends Controller {
  constructor () {
    super()
    this.bindAll(['index'])
    this.User = new User()
    this.Bookmark = new Bookmark()
    this.Library = new Library()
  }

  index (req, res) {
    logger.info('Rendering start page')

    let data = {
      users: this.User.count(),
      bookmarks: this.Bookmark.count(),
      categories: this.Library.count()
    }

    res.render('welcome/index', data)
  }
}

export default WelcomeController
