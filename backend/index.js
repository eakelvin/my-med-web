const express = require('express')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const server = express()
const PORT = process.env.PORT || 3000

const connectDatabase = require('./src/config/database')
const { notFound, errorHandler } = require('./src/middleware/errorMiddleware')
const userRoute = require('./src/routes/userRoute')
const medicineRoute = require('./src/routes/medicineRoute')

connectDatabase()
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cookieParser())

server.use('/api/users', userRoute)
server.use('/api/medicines', medicineRoute)


server.get('/', (req, res) => res.send('EA Server'))

server.use(notFound)
server.use(errorHandler)

server.listen(PORT, () => console.log(`Server live & open on Port ${PORT}`))