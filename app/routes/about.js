import express from 'express'
import about from '../controllers/about'

const router = express.Router()

/**
 * Invokes the index method in the about controller 
 * when a get request is made to the '/about' route
 */
router.get('/about', about.index)

export default router
