//Set up dependencies
const express = require('express')
const router = express.Router()

//Connect to controllers file
const mainController = require('../controllers/main')
const authController = require('../controllers/auth')

//Set up routers
router.get('/', mainController.getIndex) //Login 
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports = router 