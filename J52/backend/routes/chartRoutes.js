const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

// GET /api/chart/summary
router.get('/summary', authMiddleware, (req, res) => {
  res.json({
    chartId: 'crisperSitesOverTime',
    title: 'Active CRISPR Sickle Cell Treatment Sites (2023 to 2025)',
    xKey: 'year',
    yKey: 'sites',
    yLabel: 'Number of active treatment sites',
    data: [
      { year: 2023, sites: 5 },
      { year: 2024, sites: 20 },
      { year: 2025, sites: 50 }
    ]
  })
})

// GET /api/chart/reports
router.get('/reports', authMiddleware, (req, res) => {
  res.json({
    chartId: 'geneTherapyCostComparison',
    title: 'Cost Comparison of Current Gene Therapy and RNA Based Alternatives',
    xKey: 'therapy',
    yKey: 'costUsdMillions',
    yLabel: 'Cost per patient in millions (USD)',
    data: [
      { therapy: 'Current gene therapy', costUsdMillions: 2.0 },
      { therapy: 'Future RNA based option', costUsdMillions: 0.3 }
    ]
  })
})

module.exports = router
