import mongoose from 'mongoose'
const Schema = mongoose.Schema

// Set the schema for Bookmarks
const bookmarkSchema = new Schema({
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
