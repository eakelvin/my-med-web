const express = require('express')
const router = express.Router()

const { 
        countVisits, 
        getPageVisits 
} = require('../controllers/reportController')
const { protect } = require('../middleware/authMiddleware')

router.post('/count', countVisits)
router.get('/visits/:id', protect, getPageVisits)

module.exports = router