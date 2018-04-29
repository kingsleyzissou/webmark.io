import Router from 'express-promise-router'
import auth from './auth'
import about from './about'
import library from './library'
import welcome from './welcome'
import bookmark from './bookmark'
import dashboard from './dashboard'
import sessionData from '@app/middleware/session'
import { logError, xhrErrorHandler, errorHandler } from '../utilities/error-handlers'

const router = Router()

router.use(sessionData)

router.use(auth)
router.use(about) // Import about page route
router.use(library) // Import about page route
router.use(welcome) // Import landing page route
router.use(bookmark) // Import bookmark routes
router.use(dashboard) // Import dashboard routes

/**
 * This method is only called if it no route has been found.
 * At this point a 404 page
 *
 */
router.use((req, res, next) => {
  let err = new Error('Oops, that page doesn\'t exist')
  err.status = 404
  next(err)
})

router.use(logError)
router.use(xhrErrorHandler)
router.use(errorHandler)

export default router
