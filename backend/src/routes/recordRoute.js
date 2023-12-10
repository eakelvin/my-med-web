const express = require('express')
const router = express.Router()

const { 
        createRecord, 
        updateRecord, 
        getRecord
} = require('../controllers/recordController')
const { protect } = require('../middleware/authMiddleware')

router.post('/record', protect, createRecord)
router.get('/record', protect, getRecord)
router.put('/record', protect, updateRecord)

module.exports = router