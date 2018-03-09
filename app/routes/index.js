import express from 'express'
import config from 'config'
import dashboard from './dashboard'
import welcome from './welcome'
import about from './about'
import logger from '../utilities/logger'

const router = express.Router()

router.use(dashboard) // Import dashboard routes
router.use(welcome) // Import landing page route
router.use(about) // Import about page route

/**
 * This method is only called if it no route has been found.
 * At this point a 404 page 
 * 
 */
router.use((req, res) => {

  logger.error('Not found')

  // Render the 404 page
  res.renderVue('errors/404', {}, config.vue.template('404! Not found'))

})

/**
 * Error handling method. Catches any errors
 * and renders an internal server error view
 * 
 */
router.use((err, req, res, next) => {
  
  logger.error('There was an internal server error: ' + err)

  // Render the internal server error view
  res.renderVue('errors/500', {}, config.vue.template(err))

})

export default router
