import config from 'config'
import logger from '../utilities/logger'

/**
 * Render the about page view
 * 
 */
const index = (req, res) => {

  logger.info('Rendering About page.')

  // Render the Vue view - no data is sent and therefore an empty object is sent to the view
  res.renderVue('about/Index', {}, config.vue.template('About'))

}

export default { index }
