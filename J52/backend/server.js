require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(cors()); 
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'J52 backend is running',
    time: new Date().toISOString()
  });
});

// TODO: add routes:
// app.post('/api/auth/login', ...);
// app.get('/api/chart/summary', ...);
// app.get('/api/chart/reports', ...);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`J52 backend listening on port ${PORT}`);
});
