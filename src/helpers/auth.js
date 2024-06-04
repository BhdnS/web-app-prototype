require('dotenv').config()
const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  const authHeader = req.header('Authorization')
  if (!authHeader) return res.status(401).json({ message: 'Access denied' })

  const token = authHeader.replace('Bearer ', '')

  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY)
    req.customer = verified
    next()
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' })
  }
}

module.exports = auth
