const express = require('express')
const router = express.Router()
const editDestinationController = require('../controllers/edit')

router.get('/:id', editDestinationController.getDestination)

router.put('/:id', editDestinationController.updateDestination)

module.exports = router