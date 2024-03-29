const express = require('express')
const http = require('http')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const server = express()
const PORT = process.env.PORT || 3000
const path = require('path')
const httpServer = http.createServer(server)
const cors = require('cors')
const setupSocket = require('./socket')

const connectDatabase = require('./src/config/database')
const { notFound, errorHandler } = require('./src/middleware/errorMiddleware')
const userRoute = require('./src/routes/userRoute')
const medicineRoute = require('./src/routes/medicineRoute')
const recordRoute = require('./src/routes/recordRoute')
const reportRoute = require('./src/routes/reportRoute')

setupSocket(httpServer)
connectDatabase()
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cookieParser())
server.use(cors({
    origin: [
        'http://localhost:5173',
        'https://localhost:5173',
        'https://my-med-web-fabe.vercel.app/'
    ]
}))

server.use('/api/users', userRoute)
server.use('/api/medicines', medicineRoute)
server.use('/api/records', recordRoute)
server.use('/api/reports', reportRoute)

// if (process.env.NODE_ENV === 'production') {
//     const __dirname = path.resolve()
//     server.use(express.static(path.join(__dirname, 'frontend/dist')))

//     server.get('*', (req, res) => 
//         res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
//     )
// } else {
//     server.get('/', (req, res) => res.send('My Med Server'))
// }

server.get('/', (req, res) => {
    res.send('My Med Server')
})

server.use(notFound)
server.use(errorHandler)

// server.listen(PORT, () => console.log(`Server live & open on Port ${PORT}`))
httpServer.listen(PORT, () => console.log(`Server live & open on Port ${PORT}`))