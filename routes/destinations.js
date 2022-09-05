const express = require('express')
const router = express.Router()
const destinationsController = require('../controllers/destinations')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, destinationsController.getDestinations)

router.post('/createDestination', destinationsController.createDestination)

router.put('/markVisited', destinationsController.markVisited)

router.put('/markNotVisited', destinationsController.markNotVisited)

router.delete('/deleteDestination', destinationsController.deleteDestination)

module.exports = router