const express = require('express')
const router = express.Router()

const { 
        createRecord, 
        updateRecord, 
        getRecord,
        getRecords
} = require('../controllers/recordController')
const { protect } = require('../middleware/authMiddleware')

router.post('/create', protect, createRecord)
router.get('/get/:id', protect, getRecord)
router.get('/records/:id', protect, getRecords)
router.put('/update/:id', protect, updateRecord)
// router.put('/update/:id', protect, updateRecord)
// router.route('/record').get(protect, getRecord).put(protect, updateRecord)

module.exports = router