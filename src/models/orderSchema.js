const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
})

const order = mongoose.model('Order', orderSchema)

module.exports = order
