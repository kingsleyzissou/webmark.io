import Bookmark from '../models/Bookmark'
import Category from '../models/Category'
import bookmarks from './bookmarks'
import categories from './categories'
import logger from '../utilities/logger'

/**
 * Truncates all collection from the database
 * on connection to the database
 * 
 */
const rollback = {

  bookmarks: () => {

    // creates a new promise so seeding can be performed after rollback is complete
    return new Promise((resolve,reject)=> {
      Bookmark.remove({}, (err) => {

        if (err) reject('There was an error rolling back the bookmark collection')
    
        logger.info('Bookmark collection was successfully rolled back')
        resolve()

      })
    })
  
  },

  categories: () => {

    // creates a new promise so seeding can be performed after rollback is complete
    return new Promise((resolve,reject) => {
      Category.remove({}, (err) => {

        if (err) reject('There was an error rolling back the category collection')
    
        logger.info('Category collection successfully rolled back')
        resolve()
    
      })
    })

  }

}

export default rollback