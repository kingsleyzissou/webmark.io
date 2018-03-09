import Bookmark from '../models/Bookmark'
import Category from '../models/Category'
import bookmarks from './bookmarks'
import categories from './categories'
import logger from '../utilities/logger'

/**
 * Seeds the bookmark and category collections to the 
 * database on completion of the drop() method
 * 
 */
const seed = {

  bookmarks: () => {

    bookmarks.collection.forEach(bookmark => {

      var newBookmark = new Bookmark(bookmark);
      newBookmark.save();

    });

    logger.info('Bookmark collection successfully seeded to db')

  },

  categories: () => {

    categories.collection.forEach(category => {
  
      var newCategory = new Category(category);
      newCategory.save();
  
    });

    logger.info('Category collection successfully seeded to db')

  }

}

export default seed