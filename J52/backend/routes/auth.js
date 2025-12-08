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

  console.log('Login: JWT_SECRET at sign time =>', process.env.JWT_SECRET)
  console.log('Login: token created (first 25 chars) =>', token.slice(0, 25))

  res.json({ token })
})

module.exports = router
