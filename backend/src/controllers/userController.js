const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const generateToken = require('../utils/generateToken')

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
        })
    } else {
        res.status(401)
        throw new Error('Invalid Email or Password')
    }
})

const registerUser = asyncHandler(async (req, res) => {
    // const { name, email, password } = req.body
    const { firstname, lastname, email, password, phone, country, gender, dateOfBirth, picture } = req.body;
    // console.log(req.body);
    const existingUser = await User.findOne({ email })
    if (existingUser) {
        res.status(400)
        throw new Error('User already exists')
    } else {
        const user = await User.create({
            firstname,
            lastname,  
            email, 
            password, 
            phone, 
            country, 
            gender, 
            dateOfBirth
        })
        if (user) {
            generateToken(res, user._id)
            res.status(201).json({
                _id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                phone: user.phone,
                country: user.country,
                gender: user.gender,
                dateOfBirth: user.dateOfBirth
            })
        } else {
            res.status(400)
            throw new Error('Invalid User Details')
        }
    }
})

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({ message: 'User Logged Out'})
})

const getUserProfile = asyncHandler(async (req, res) => {
    const user = {
        _id: req.user._id,
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        email: req.user.email,
        phone: req.user.phone,
        country: req.user.country,
        gender: req.user.gender,
        dateOfBirth: req.user.dateOfBirth
    }
    res.status(200).json(user)
})

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        user.firstname = req.body.firstname || user.firstname
        user.lastname = req.body.lastname || user.lastname
        user.email = req.body.email || user.email
        user.phone = req.body.phone || user.phone
        user.country = req.body.country || user.country
        user.gender = req.body.gender || user.gender
        user.dateOfBirth = req.body.dateOfBirth || user.dateOfBirth

        if (req.body.password) {
            user.password = req.body.password
        }
        const updatedUser = await user.save()
        res.status(200).json({
            _id: updatedUser._id,
            firstname: updatedUser.firstname,
            lastname: updatedUser.lastname,
            email: updatedUser.email,
            phone: updatedUser.phone,
            country: updatedUser.country,
            gender: updatedUser.gender,
            dateOfBirth: updatedUser.dateOfBirth,
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

module.exports = { loginUser, registerUser, logoutUser, getUserProfile, updateUserProfile }