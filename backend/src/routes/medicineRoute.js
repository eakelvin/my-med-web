const express = require('express')
const router = express.Router()

const { 
        addMedicine,
        getMedicines, 
        getMedicine, 
        updateMedicine, 
        deleteMedicine 
} = require('../controllers/medicineController')
const { protect } = require('../middleware/authMiddleware')

router.post('/medicine', protect, addMedicine)
router.get('/medicines/:id', protect, getMedicines)
router.get('/medicine/:id', protect, getMedicine)
router.put('/medicine/:id', protect, updateMedicine)
router.delete('/medicine/:id', protect, deleteMedicine)


module.exports = router