import mongoose from 'mongoose'
const Schema = mongoose.Schema

/**
 * Define the Mongoose schema for categories
 * 
 */
const categorySchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})

const Category = mongoose.model('Category', categorySchema)

export default Category
