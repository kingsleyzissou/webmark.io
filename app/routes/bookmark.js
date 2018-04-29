import Router from 'express-promise-router'
import { check } from 'express-validator/check'
import Bookmark from '@app/controllers/Bookmark'
// import authenticated from '@app/middleware/authenticated'

const router = Router()
const bookmark = new Bookmark()

const validate = [
  check('title', 'A title is required')
    .isLength(1),

  check('url', 'Please enter a valid url')
    .matches(/^((?:https?:\/\/)?[^./]+(?:\.[^./]+)+(?:\/.*)?)$/)
]

/**
 * Invokes the index method in the category controller
 * when a get request is made to the '/categories' route
 *
 */
router.get('/bookmark/create', bookmark.create)

router.post('/bookmark', validate, bookmark.store)

router.post('/bookmark/linkpreview', bookmark.linkPreview)

router.get('/bookmark/:period', bookmark.getByDate)

/**
 * Invokes the delete method in the category controller
 * when a post request is made to '/categories/:id'
 *
 */
router.delete('/bookmark/:id', bookmark.destroy)

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
