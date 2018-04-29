/**
 * Seeds the bookmark and category collections to the
 * database on completion of the drop() method
 *
 */
const sessionData = (req, res, next) => {
  if (req.session.authenticated) {
    res.locals.authenticated = true
    res.locals.user = req.session.user
    next()
  }
  res.locals.authenticated = false
  res.locals.user = {}
  next()
}

export default sessionData
