import mongoose from 'mongoose'
import bluebird from 'bluebird'
import config from 'config'
import logger from '../utilities/logger'
import Bookmark from '../models/Bookmark'
import Category from '../models/Category'
import bookmarks from './bookmarks'
import categories from './categories'

// Set promise library to Bluebird
mongoose.Promise = bluebird

// Connect to database
const connect = () => {
  mongoose.connect(config.dbhost)

  mongoose.connection.on('connected', () => {
    logger.info('Mongoose default connection open')
    drop()
  })

  mongoose.connection.on('error', (err) => {
    logger.error('Mongoose default connection error: ' + err)
  })

  mongoose.connection.on('disconnected', () => {
    logger.info('Mongoose default connection disconnected')
  })

  // Close Mongo connection
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      logger.info('Mongoose default connection disconnected through app termination')
      process.exit(0)
    })
  })
}

const drop = () => {

  Bookmark.remove({}, (err) => {
    if (err) logger.error('There was an error truncating the bookmark collection')

    logger.info('Bookmark collection truncated successfully')
    seed.bookmarks()

  })

  Category.remove({}, (err) => {
    if (err) logger.error('There was an error truncating the category collection')

    logger.info('Category collection truncated successfully')
    seed.categories()

  })

}

const seed = {

  bookmarks: () => {

    bookmarks.collection.forEach(bookmark => {

      var newBookmark = new Bookmark(bookmark);
      newBookmark.save();
  
    });

  },

  categories: () => {

    categories.collection.forEach(category => {
  
      var newCategory = new Category(category);
      newCategory.save();
  
    });

  }

}

export default { connect }
