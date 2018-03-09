import config from 'config'
import logger from '../../utilities/logger'
import status from '../../utilities/http-status-codes'
import Bookmark from '../../models/Bookmark' // Import the Bookmark Model

/**
 * List all bookmarks by a particular category
 * 
 */
const findByCat = (req, res) => {
  // Search for bookmarks based on the selected category
  Bookmark.find({ category: req.params.cat }, (err, bookmarks) => {
    
    if (err) res.send(err)
    
    // Set the title to be sent to the view in the data object
    const title  = req.params.cat 

    logger.info('Rendering bookmarks by ' + req.params.cat + ' category')

    // Render the Vue view - the data sent needs to be in the form of an object
    res.renderVue('dashboard/categories/Show', { title, bookmarks }, config.vue.template(title + 'Bookmarks'))

  })
}

/**
 * Delete a bookmark - the method does not delete the 
 * 
 */
const destroy = (req, res) => {

  Bookmark.remove({ id: req.body.id }, (err) => {
    
    // XHR request and therefore a json error response is sent
    if (err) return res.status(status.INTERNAL_SERVER_ERROR).send(err)
    
    // XHR request and therefore a json response is sent
    return res.status(status.OK).send({
      success: true,
      data: req.body.id,
      message: 'Bookmark successfully deleted'
    })

  })

}

export default { findByCat, destroy }
