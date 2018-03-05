import express from 'express'
import welcome from '../controllers/welcome'

const router = express.Router()

/**
 * Invokes the index method in the welcome controller 
 * when a get request is made to the '/' route
 */
router.get('/', welcome.index)

export default router
