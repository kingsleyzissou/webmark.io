import Router from 'express-promise-router'
import Library from '@app/controllers/Library'
import authenticated from '@app/middleware/authenticated'

const router = Router()
const library = new Library()

router.get('/library', authenticated, library.index)

router.get('/library/:id', library.show)

router.post('/library', authenticated, library.store)

/**
 * Invokes the delete method in the category controller
 * when a post request is made to '/categories/:id'
 *
 */
router.delete('/library/:id', authenticated, library.destroy)

/**
 * Invokes the index method in the category controller
 * when a get request is made to the '/categories' route
 *
 */

/**
 * Invokes the delete method in the category controller
 * when a post request is made to '/categories/:id'
 *
 */
// router.delete('/categories/:id', authenticated, category.destroy)

/**
 * Invokes the findByCat method in the bookmark controller
 * when a get request is made to the '/categories/:cat/bookmarks' route
 *
 */
// router.get('/categories/:cat/bookmarks', authenticated, bookmark.findByCat)

/**
 * Invokes the delete method in the bookmark controller
 * when a post request is made to '/bookmarks/:id'
 *
 */
// router.delete('/bookmarks/:id', authenticated, bookmark.destroy)

export default router
