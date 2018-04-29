import Router from 'express-promise-router'
import About from '@app/controllers/About'
import authenticated from '@app/middleware/authenticated'

const router = Router()
const about = new About()

/**
 * Invokes the index method in the about controller
 * when a get request is made to the '/about' route
 *
 */
router.get('/about', authenticated, about.index)

router.post('/about', authenticated, about.addComment)

export default router
