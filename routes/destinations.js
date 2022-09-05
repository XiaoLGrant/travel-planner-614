const express = require('express')
const router = express.Router()
const destinationsController = require('../controllers/destinations')
//const editController = require('../controllers/edit')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, destinationsController.getDestinations)

router.post('/createDestination', destinationsController.createDestination)

router.put('/markVisited', destinationsController.markVisited)

router.put('/markNotVisited', destinationsController.markNotVisited)

router.delete('/deleteDestination', destinationsController.deleteDestination)

router.get('/:id', destinationsController.getDestination)

router.put('/:id', destinationsController.updateDestination)

module.exports = router