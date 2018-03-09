import mongoose from 'mongoose'
import bluebird from 'bluebird'
import config from 'config'
import logger from '../utilities/logger'
import rollback from './rollback'
import seed from './seed'

// Set promise library to Bluebird
mongoose.Promise = bluebird

/**
 * Connects to the MongoDB database
 * 
 */
const connect = () => {
  mongoose.connect(config.dbhost)

  mongoose.connection.on('connected', () => {
    logger.info('Mongoose default connection open')

    // rollback the bookmarcs collection, seed the database on rollback
    rollback.bookmarks()
      .then(() => { seed.bookmarks() })
      .catch(err => { logger.error(err) })
    
      // rollback the category collection, seed the database on rollback
    rollback.categories()
      .then(() => { seed.categories() })
      .catch(err => { logger.error(err) })
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

export default { connect }
