const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    bloodType: {
        type: String,
        required: true,
        enum: ['O+', 'O-', 'AB+', 'B+', 'B-', 'AB-']
    },
    disease: {
        type: String,
    },
    epilepsy: {
        type: String,
        required: true,
        enum: ['Yes', 'No']
    },
    organ: {
        type: String,
        required: true,
        enum: ['Yes', 'No']
    },
    weight: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    conditions: {
        type: String,
        // required: true
    },
    allergies: {
        type: String,
        // required: true
    },

}, {timestamps: true})

const Record = mongoose.model('Record', recordSchema)
module.exports = Record