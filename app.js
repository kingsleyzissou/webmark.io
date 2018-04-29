import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import path from 'path'
import config from 'config'
import cors from 'cors'
import session from 'express-session'
import fileupload from 'express-fileupload'
import routes from '@app/routes/'
import logger from '@app/utilities/logger'

const app = express()

// Set port
const port = config.port

// Set directory for static files
app.use(express.static(path.join(__dirname, 'public')))

app.use(cookieParser())
app.use(bodyParser.json()) // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/json' }))

// File upload library
app.use(fileupload())

app.set('views', path.join(__dirname, 'app', 'views', 'pages'))
app.set('view engine', 'ejs')

/**
 * Load the Vue middleware configuration in order to render Vue from the server side
 * All static files, scripts and stylesheets are configured in the config file
 *
 */
// const VueMiddleware = Vue.init(config.vue.middleware)
// app.use(VueMiddleware) // enable res.renderVue()

app.use(cors()) // Enable cors

app.use(session({
  secret: config.secret,
  resave: true,
  saveUninitialized: true
}))

// Load routes
app.use('/', routes)

app.listen(port, () => {
  logger.info('RESTful API server started on http://localhost:' + port)
})

export default app
