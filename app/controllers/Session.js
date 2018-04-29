import bcrypt from 'bcrypt-promise'
// import config from 'config'
import httpStatusCode from '@app/utilities/http-status-codes'
import User from '@app/models/User' // Import User model
import Controller from './Controller'

class SessionController extends Controller {
  constructor () {
    super()
    this.User = new User()
    this.bindAll = this.bindAll(['create', 'store', 'destroy'])
  }

  create (req, res) {
    res.render('auth/login')
  }

  async store (req, res, next) {
    const user = this.User.findBy({ 'username': req.body.username })

    if (!user) {
      let err = new Error('That user name or password does not exist')
      err.status = httpStatusCode.UNAUTHORIZED
      return next(err)
    }

    const valid = await bcrypt.compare(req.body.password, user.password)

    if (!valid) {
      let err = new Error('Incorrect username or password')
      err.status = httpStatusCode.UNAUTHORIZED
      return next(err)
    }

    req.session.authenticated = true
    req.session.user = user

    return res.status(httpStatusCode.OK).send({
      success: true,
      message: 'You have been successfully signed in',
      user: user
    })
  }

  destroy (req, res) {
    req.session.authenticated = false
    req.session.user = {}
    res.redirect('/')
  }
}

export default SessionController
