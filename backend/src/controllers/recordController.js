const asyncHandler = require('express-async-handler')
const Record = require('../models/record')

const createRecord = async(req, res) => {
    try {
        const record = await Record.create(req.body)
        res.status(201).json(record)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const updateRecord = asyncHandler(async (req, res) => {
    try {
        const record = await Record.findOneAndUpdate(
            { user: req.user._id },
            {
                bloodType: req.body.bloodType,
                disease: req.body.disease,
                epilepsy: req.body.epilepsy,
                weight: req.body.weight,
                height: req.body.height,
                organ: req.body.organ,
                conditions: req.body.conditions,
                allergies: req.body.allergies,
            },
            { new: true, upsert: true }
        );

        res.status(200).json(record);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


const getRecord = async(req, res) => {
    try {
        const record = await Record.findById(req.params.id)
        if (!record) {
            return res.status(404).json({ error: 'Record not found'})
        }
        res.status(200).json(record)
    } catch (error) {
        res.status(500).json({ error: 'error.message'})
    }
}

const getRecords = async(req, res) => {
    try {
        if (req.user.id === req.params.id) {
            const records = await Record.find({ user: req.params.id})
            res.status(200).json(records)
        } else {
            res.status(403).json({ error: 'Access forbidden. You can only access your own medicines.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createRecord, updateRecord, getRecord, getRecords }