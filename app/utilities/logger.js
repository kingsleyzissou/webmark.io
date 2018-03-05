import winston from 'winston'

// Logger method used to log events to the console
const logger = new (winston.Logger)({
  transports: [new (winston.transports.Console)({ json: false })]
})

logger.level = 'debug'

if (process.env.LEVEL) {
  logger.level = process.env.LEVEL
}

export default logger
