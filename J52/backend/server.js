require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDb = require('./config/db')
const authRoutes = require('./routes/auth')
const chartRoutes = require('./routes/chartRoutes')

const app = express()

connectDb()

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/auth', authRoutes)
app.use('/api/chart', chartRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`J52 backend listening on port ${port}`)
})
