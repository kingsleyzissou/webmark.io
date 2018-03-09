import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import config from 'config'
import cors from 'cors'
import Vue from 'express-vue'
import db from './app/database/connect'
import routes from './app/routes/'
import logger from './app/utilities/logger'

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
 * All static files, scripts and stylesheets are configured in the config file
 * 
 */
const VueMiddleware = Vue.init(config.vue.middleware)
app.use(VueMiddleware) // enable res.renderVue()

app.use(cors()) // Enable cors

// Load routes
app.use('/', routes)

app.listen(port, () => {
  logger.info('RESTful API server started on http://localhost:' + port)
})
