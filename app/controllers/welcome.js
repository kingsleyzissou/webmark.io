import config from 'config'
import logger from '../utilities/logger'

/**
 * Render the about page view
 * 
 */
const index = (req, res) => {

  logger.info('Rendering start page')

  // Render the Vue view - no data is sent and therefore an empty object is sent to the view
  res.renderVue('welcome/Index', {}, config.vue.template('Welcome'))

}

export default { index }
