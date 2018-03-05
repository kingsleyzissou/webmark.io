import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import config from 'config'
import cors from 'cors'
import Vue from 'express-vue'
import db from './app/database/connect'
import routes from './app/routes/'
import logger from './app/utilities/logger'
// import status from './app/utilities/http-status-codes'

const app = express()

// Set port
const port = config.port

// Open MongoDB conection
db.connect()

// Set directory for static files
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json()) // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/json' }))

/**
 * Load the Vue middleware configuration in order to render Vue from the server side
 */
const VueMiddleware = Vue.init(config.vue.middleware)
app.use(VueMiddleware) // enable res.renderVue()

// app.use(morgan('dev'))
app.use(cors()) // Enable cors

// Load routes
app.use('/', routes)

// 404 not found
app.use((req, res) => {
  // logger.error('404 Not found')
  res.renderVue('errors/404', {}, config.vue.template('404! Not found'))
})

// Other errors
app.use((err, req, res) => {
  logger.error(err)
  res.renderVue('errors/500', {}, config.vue.template(err))
})

app.listen(port, () => {
  logger.info('RESTful API server started on http://localhost:' + port)
})
