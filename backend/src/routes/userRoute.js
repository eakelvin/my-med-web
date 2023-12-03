const express = require('express')
const router = express.Router()

const { 
        registerUser, 
        logoutUser, 
        getUserProfile, 
        updateUserProfile, 
        loginUser
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

module.exports = router