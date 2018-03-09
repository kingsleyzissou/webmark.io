import express from 'express'
import category from '../controllers/dashboard/category'
import bookmark from '../controllers/dashboard/bookmark'

const router = express.Router()

/**
 * Invokes the index method in the category controller 
 * when a get request is made to the '/categories' route
 * 
 */
router.get('/categories', category.index)

/**
 * Invokes the delete method in the category controller 
 * when a post request is made to '/categories/:id'
 * 
 */
router.delete('/categories/:id', category.destroy)

/**
 * Invokes the findByCat method in the bookmark controller 
 * when a get request is made to the '/categories/:cat/bookmarks' route
 * 
 */
router.get('/categories/:cat/bookmarks', bookmark.findByCat)

/**
 * Invokes the delete method in the bookmark controller 
 * when a post request is made to '/bookmarks/:id'
 * 
 */
router.delete('/bookmarks/:id', bookmark.destroy)

export default router
