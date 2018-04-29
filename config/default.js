import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 8080

const secret = 'thisisthesecretsauce'

const maps = {
  api_key: process.env.MAPS_API_KEY
}

const cloudinary = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
}

export { port, secret, cloudinary, maps }
