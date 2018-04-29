/**
 * Custom helper object used to send http status codes for xhr requests
 *
 */
const httpStatusCodes = {
  'OK': 200,
  'CREATE': 201,
  'UNAUTHORIZED': 401,
  'NOT_FOUND': 404,
  'UNPROCESSABLE_ENTITY': 422,
  'INTERNAL_SERVER_ERROR': 500
}

export default httpStatusCodes
