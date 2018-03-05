import config from 'config'
import logger from '../utilities/logger'

// Render the about view
const index = (req, res) => {
  logger.info('Rendering About page.')
  res.renderVue('about/Index', {}, config.vue.template('About'))

}

export default { index }
