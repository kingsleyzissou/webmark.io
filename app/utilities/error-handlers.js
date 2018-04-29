import logger from './logger'

const logError = function (err, req, res, next) {
  if (typeof err === 'string') err = new Error(err)
  err.status = err.status || 500
  logger.error(err.status + ': ' + err.message)
  next(err)
}

const xhrErrorHandler = (err, req, res, next) => {
  if (req.xhr) {
    return res.status(err.status).send({
      success: false,
      message: err.message,
      errors: err.errors
    })
  }
  next(err)
}

const errorHandler = (err, req, res, next) => {
  res.render('errors/index', { error: err.message, status: err.status })
}

export { logError, xhrErrorHandler, errorHandler }
