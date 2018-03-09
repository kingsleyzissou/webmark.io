import mongoose from 'mongoose'
import logger from '../utilities/logger'
const Schema = mongoose.Schema

// Set the schema for Bookmarks
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
  image: {
    type: String
  }
})

const Bookmark = mongoose.model('Bookmark', bookmarkSchema)

export default Bookmark
