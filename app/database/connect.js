import mongoose from 'mongoose'
import bluebird from 'bluebird'
import config from 'config'
import logger from '../utilities/logger'

// Set promise library to Bluebird
mongoose.Promise = bluebird

// Connect to database
const connect = () => {
  mongoose.connect(config.dbhost)

  mongoose.connection.on('connected', () => {
    logger.info('Mongoose default connection open')
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
