const asyncHandler = require('express-async-handler')
const Record = require('../models/record')

const createRecord = asyncHandler( async(req, res) => {
    try {
        const record = await Record.create(req.body)
        res.status(201).json(record)
    } catch (error) {
        // console.error('Error creating record:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

const updateRecord = asyncHandler(async (req, res) => {
    const record = await Record.findById(req.user._id)
    if (record) {
        record.bloodType = req.body.bloodType || record.bloodType
        record.disease = req.body.disease || record.disease
        record.epilepsy = req.body.epilepsy || record.epilepsy
        record.organ = req.body.organ || record.organ
        record.weight = req.body.weight || record.weight
        record.height = req.body.height || record.height
        record.conditions = req.body.conditions || record.conditions
        record.allergies = req.body.allergies || record.allergies

        const updatedRecord = await record.save()
        res.status(200).json({
            _id: updatedRecord._id,
            bloodType: updatedRecord.bloodType,
            disease: updatedRecord.disease,
            epilepsy: updatedRecord.epilepsy,
            organ: updatedRecord.organ,
            weight: updatedRecord.weight,
            height: updatedRecord.height,
            conditions: updatedRecord.conditions,
            allergies: updatedRecord.allergies
        })
    } else {
        res.status(404)
        throw new Error('Record not found')
    }
})

const getRecord = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = { createRecord, updateRecord, getRecord }