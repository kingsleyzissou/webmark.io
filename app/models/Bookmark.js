import mongoose from 'mongoose'
import logger from '../utilities/logger'
const Schema = mongoose.Schema

/**
 * Define the Mongoose schema for bookmarks
 * 
 */
const bookmarkSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  }
})

const Bookmark = mongoose.model('Bookmark', bookmarkSchema)

export default Bookmark
