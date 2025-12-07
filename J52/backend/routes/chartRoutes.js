const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/summary', authMiddleware, (req, res) => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    values: [10, 20, 30, 40]
  }
  res.json(data)
})

router.get('/reports', authMiddleware, (req, res) => {
  const data = {
    labels: ['2021', '2022', '2023', '2024'],
    values: [100, 120, 150, 180]
  }
  res.json(data)
})

module.exports = router
