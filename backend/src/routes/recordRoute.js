const express = require('express')
const router = express.Router()

const { 
        createRecord, 
        updateRecord, 
        getRecord
} = require('../controllers/recordController')
const { protect } = require('../middleware/authMiddleware')

router.post('/create', protect, createRecord)
router.get('/get/:id', protect, getRecord)
router.put('/update', protect, updateRecord)
// router.put('/update/:id', protect, updateRecord)
// router.route('/record').get(protect, getRecord).put(protect, updateRecord)

module.exports = router