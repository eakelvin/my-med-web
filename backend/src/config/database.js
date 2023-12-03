require('dotenv')
const mongoose = require('mongoose')
const uri = process.env.MONGO_URI

const connectDatabase = async () => {
    try {
        const connect = await mongoose.connect(uri)
        console.log(`Mongo Database Connected to ${connect.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDatabase