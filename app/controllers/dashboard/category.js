import config from 'config'
import logger from '../../utilities/logger'
import status from '../../utilities/http-status-codes'
import Category from '../../models/Category' // Import Category model

/**
 * List all categories
 * 
 */
const index = (req, res) => {
  // Return all category documents
  Category.find({}, (err, categories) => {
    
    if (err) res.send(err)

    logger.info('Rendering dashboard')

    const data = {
      modal: false, // Initialise the state of the modal
      temp: {}, // Send an empty object that will be used on the client-side to delete a bookmark
      categories, // Send the categories
    }

    // Render the Vue view - the data sent needs to be in the form of an object
    res.renderVue('dashboard/categories/Index', data, config.vue.template('Categories'))
  })
}

/**
 * Delete a category
 * 
 */
const destroy = (req, res) => {
  
  Category.remove({ id: req.body.id }, (err) => {
    
    // XHR request and therefore a json error response is sent
    if (err) return res.status(status.INTERNAL_SERVER_ERROR).send(err)
    
    // XHR request and therefore a json response is sent
    return res.status(status.OK).send({
      success: true,
      data: req.body.id,
      message: 'Category successfully deleted'
    })

  })

}

export default { index, destroy }
