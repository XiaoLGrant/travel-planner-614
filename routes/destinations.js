const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')

const destinationsController = require('../controllers/destinations')

router.get('/', ensureAuth, destinationsController.getDestinations)

router.post('/createDestination', destinationsController.createDestination)

router.put('/markVisited', destinationsController.markVisited)

router.put('/markNotVisited', destinationsController.markNotVisited)

router.delete('/deleteDestination/:id', destinationsController.deleteDestination)

router.get('/:id', destinationsController.getDestination)

router.put('/:id', destinationsController.updateDestination)

module.exports = router 