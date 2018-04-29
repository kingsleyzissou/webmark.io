import Router from 'express-promise-router'
import Dashboard from '@app/controllers/Dashboard'
import Bookmark from '@app/controllers/Bookmark'
import User from '@app/controllers/User'
import authenticated from '@app/middleware/authenticated'

const router = Router()
const user = new User()
const dashboard = new Dashboard()
const bookmark = new Bookmark()

/**
 * Invokes the index method in the category controller
 * when a get request is made to the '/categories' route
 *
 */
router.get('/dashboard', authenticated, dashboard.index)

router.get('/rankings', user.rankings)

/**
 * Invokes the findByCat method in the bookmark controller
 * when a get request is made to the '/library/:id/bookmarks' route
 *
 */
router.get('/library/:id/bookmarks', authenticated, bookmark.findByCat)

/**
 * Invokes the delete method in the bookmark controller
 * when a post request is made to '/bookmarks/:id'
 *
 */
router.delete('/bookmarks/:id', authenticated, bookmark.destroy)

export default router
