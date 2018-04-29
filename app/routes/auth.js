import Router from 'express-promise-router'
import User from '@app/controllers/User'
import Session from '@app/controllers/Session'

const router = Router()
const user = new User()
const session = new Session()

/**
 * Invokes the index method in the category controller
 * when a get request is made to the '/categories' route
 *
 */
router.get('/login', session.create)
router.post('/login', session.store)

router.get('/logout', session.destroy)

/**
 * Invokes the delete method in the category controller
 * when a post request is made to '/categories/:id'
 *
 */
router.get('/signup', user.create)

/**
 * Invokes the delete method in the category controller
 * when a post request is made to '/categories/:id'
 *
 */
router.post('/signup', user.store)

/**
 * Invokes the findByCat method in the bookmark controller
 * when a get request is made to the '/categories/:cat/bookmarks' route
 *
 */
// router.get('/categories/:cat/bookmarks', bookmark.findByCat)

/**
 * Invokes the delete method in the bookmark controller
 * when a post request is made to '/bookmarks/:id'
 *
 */
// router.delete('/bookmarks/:id', bookmark.destroy)

export default router
