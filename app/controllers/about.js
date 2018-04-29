import Controller from './Controller'
import User from '@app/models/User'
import Comment from '@app/models/Comment'
import HTTP from '@app/utilities/http-status-codes'

/**
 * Render the about page view
 *
 */
class AboutController extends Controller {
  constructor () {
    super()
    this.User = new User()
    this.Comment = new Comment()
    this.bindAll(['index', 'addComment'])
  }

  index (req, res, next) {
    let comments = this.Comment.all()
    let user = this.User.findBy({ username: 'gianluca' })

    if (!user) {
      let err = new Error('That user name or password does not exist')
      err.status = HTTP.UNAUTHORIZED
      return next(err)
    }

    res.render('about/index', { comments, user })
  }

  addComment (req, res, next) {
    let comment = {
      username: req.body.username,
      subject: req.body.subject,
      message: req.body.message
    }

    this.Comment.add(comment)

    return res.status(HTTP.OK).send({
      success: true,
      data: comment,
      message: 'Comment successfully added'
    })
  }
}

export default AboutController
