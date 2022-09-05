const mongoose = require('mongoose')

const DestinationSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  visited: {
    type: Boolean,
    required: true,
  },
  notes: {
    type: String,
    required: false,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Destination', DestinationSchema)
