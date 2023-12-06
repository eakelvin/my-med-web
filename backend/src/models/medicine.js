const mongoose = require('mongoose')

const medicineSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        // required: true,
        enum: ['Pill', 'Syrup']
    },
    dosage: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    interval: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        // required: true
    },
    extraTime: { type: String},
    when: {
        type: String,
        // required: true,
        enum: ['Take before meal', 'Take in between meal', 'Take after meal']
    }
}, {timestamps: true})

const Medicine = mongoose.model('Medicine', medicineSchema)
module.exports = Medicine