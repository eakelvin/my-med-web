import { io } from 'socket.io-client'
import { toast } from 'react-toastify'

const socket = io('http://localhost:3000')

const runEvent = () => {
    socket.emit("new_user", {message: 'SPAM EVERY CONNECTED USER'})
}

const runLocalEvent = () => {
    toast.info('SPAM ONE CONNECTED USER')
} 

export { socket, runEvent, runLocalEvent };