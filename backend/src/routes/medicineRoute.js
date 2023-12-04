const express = require('express')
const router = express.Router()

const { 
        addMedicine,
        getMedicines, 
        getMedicine, 
        updateMedicine, 
        deleteMedicine 
} = require('../controllers/medicineController')

router.post('/medicine', addMedicine)
router.get('/medicine', getMedicines)
router.get('/medicine/:id', getMedicine)
router.put('/medicine/:id', updateMedicine)
router.delete('/medicine/:id', deleteMedicine)

router.route('/medicine').get(getMedicine).put(updateMedicine).delete(deleteMedicine)

module.exports = router