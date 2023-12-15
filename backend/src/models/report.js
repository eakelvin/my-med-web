const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reportSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    pageVisits: {
        type: Number,
        default: 0,
        required: true
    },

},{timestamps: true})

const Report = mongoose.model('Report', reportSchema)
module.exports = Report