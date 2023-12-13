const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reportSchema = new mongoose.Schema({
    // userId: {
    //     type: String,
    //     required: true
    // },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    pageVisits: {
        type: Number,
        default: 0,
        required: true
    },
    // timing: {
    //     type: String,
    //     required: true
    // },

},{timestamps: true})

const Report = mongoose.model('Report', reportSchema)
module.exports = Report