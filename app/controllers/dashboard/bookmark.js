import config from 'config'
import logger from '../../utilities/logger'
import status from '../../utilities/http-status-codes'
import Bookmark from '../../models/Bookmark' // Import the Bookmark Model

// List all bookmarks by a particular category
const findByCat = (req, res) => {
  Bookmark.find({ category: req.params.cat }, (err, bookmarks) => {
    if (err) {
      res.send(err)
    }
    const data = {
      title: req.params.cat,
      bookmarks
    }
    logger.info('Rendering bookmarks by ' + req.params.cat + ' category')
    res.renderVue('dashboard/categories/Show', data, config.vue.template('Hello'))
  })
}

// Delete a bookmark
const destroy = (req, res) => {
  return res.status(status.OK).send({
    success: true,
    data: req.body.id,
    message: 'You hit this route'
  })
}

export default { findByCat, destroy }
