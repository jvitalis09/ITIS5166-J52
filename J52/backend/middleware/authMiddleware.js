const jwt = require('jsonwebtoken')

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    console.log('AuthMiddleware: no Authorization header')
    return res.status(401).json({ message: 'No token provided' })
  }

  const parts = authHeader.split(' ')
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    console.log('AuthMiddleware: bad header format ->', authHeader)
    return res.status(401).json({ message: 'Invalid authorization header' })
  }

  const token = parts[1]

  console.log('AuthMiddleware: JWT_SECRET at verify time =>', process.env.JWT_SECRET)
  console.log('AuthMiddleware: token received (first 25 chars) =>', token.slice(0, 25))

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log('AuthMiddleware: jwt.verify ERROR =>', err.message)
      return res
        .status(403)
        .json({ message: 'Invalid token: ' + err.message })
    }
    console.log('AuthMiddleware: token OK, decoded.user =>', decoded.user)
    req.user = decoded.user
    next()
  })
}

module.exports = authMiddleware
