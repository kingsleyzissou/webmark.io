import config from 'config'
import logger from '../../utilities/logger'
import Category from '../../models/Category' // Import Category model

// List all categories
const index = (req, res) => {
  Category.find({}, (err, categories) => {
    if (err) {
      res.send(err)
    }
    const data = {
      categories
    }
    logger.info('Rendering dashboard')
    res.renderVue('dashboard/categories/Index', data, config.vue.template('Hello'))
  })
}

// Delete a category
const destroy = (req, res) => {
  return res.status(status.OK).send({
    success: true,
    data: req.body.id,
    message: 'You hit this route'
  })
}

export default { index, destroy }
