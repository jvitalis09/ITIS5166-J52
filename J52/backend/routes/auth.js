const express = require('express')
const jwt = require('jsonwebtoken')

const router = express.Router()

const validUsername = 'jhania'
const validPassword = 'jhania'

router.post('/login', (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required' })
  }
  if (username !== validUsername || password !== validPassword) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }
  const token = jwt.sign({ user: username }, process.env.JWT_SECRET, { expiresIn: '1h' })
  res.json({ token })
})

module.exports = router
