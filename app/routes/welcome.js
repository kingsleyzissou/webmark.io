import Router from 'express-promise-router'
import Welcome from '@app/controllers/Welcome'

const router = Router()
const welcome = new Welcome()

/**
 * Invokes the index method in the welcome controller
 * when a get request is made to the '/' route
 *
 */
router.get('/', welcome.index)

export default router
