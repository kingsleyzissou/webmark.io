/**
 * Seeds the bookmark and category collections to the
 * database on completion of the drop() method
 *
 */
const authenticated = (req, res, next) => {
  if (req.session.authenticated) {
    next()
  }
  res.redirect('/login')
}

export default authenticated
