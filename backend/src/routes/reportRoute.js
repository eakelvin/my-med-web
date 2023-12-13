const express = require('express')
const router = express.Router()

const { 
        countVisits, 
        getPageVisits 
} = require('../controllers/reportController')

router.post('/count', countVisits)
router.get('/page-visits/:id', getPageVisits)

module.exports = router