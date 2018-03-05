import express from 'express'
import dashboard from './dashboard'
import welcome from './welcome'
import about from './about'

const router = express.Router()

router.use(dashboard) // Import dashboard routes
router.use(welcome) // Import landing page route
router.use(about) // Import about page route

export default router
