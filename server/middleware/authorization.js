module.exports = function authorization (req, res, next) {
  if (req.headers.authorization !== 'xyz0987654321') {
    return res.sendStatus(401)
  }

  next()
}
