import _ from 'lodash'
import uuid from 'uuid'
import bcrypt from 'bcrypt-promise'
import User from '@app/models/User' // Import User model
import Bookmark from '@app/models/Bookmark' // Import Bookmark model
import Controller from './Controller'
import HTTP from '../utilities/http-status-codes'

class UserController extends Controller {
  constructor () {
    super()
    this.User = new User()
    this.Bookmark = new Bookmark()
    // binds 'this' keyword to specified methods
    this.bindAll(['index', 'create', 'rankings'])
  }

  async index (req, res) {
    const users = await User.find({})
    res.render('/users', users)
  }

  create (req, res) {
    res.render('auth/signup')
  }

  async store (req, res) {
    let hash = await bcrypt.hash(req.body.password, 10)

    const user = {
      id: uuid(),
      name: 'Name',
      surname: 'Surname',
      username: req.body.username.toLowerCase(),
      email: req.body.email,
      password: hash,
      bookmarks: []
    }

    await this.User.add(user)

    return res.status(200).send('Success')
  }

  rankings (req, res, next) {
    let users = this.User.all()

    users.forEach(user => {
      user.bookmarks = {
        count: this.Bookmark.getMultiple({ user_id: user.id }).length
      }
    })
    // console.log(min)
    // XHR request and therefore a json error response is sent
    // if (err) return res.status(HTTP.INTERNAL_SERVER_ERROR).send(err)
    if (!users) {
      let err = new Error('Unable to get user list')
      err.status = HTTP.INTERNAL_SERVER_ERROR
      return next(err)
    }

    let min = _.orderBy(users, ['count'], ['asc']).slice(0, 3)
    let max = _.orderBy(users, ['count'], ['asc']).slice(0, 3)
    max = _.takeRight(max, 3)

    // XHR request and therefore a json response is sent
    return res.status(HTTP.OK).send({
      success: true,
      data: { min, max },
      message: 'Bookmark successfully deleted'
    })
  }
}

export default UserController
