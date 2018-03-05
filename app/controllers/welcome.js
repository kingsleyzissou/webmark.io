import config from 'config'
import logger from '../utilities/logger'

// Render the landing page
const index = (req, res) => {
  logger.info('Rendering start page')
  res.renderVue('welcome/Index', {}, config.vue.template('Welcome'))
}

export default { index }
