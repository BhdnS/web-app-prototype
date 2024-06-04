const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderItemSchema = new Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
})

const orderItem = mongoose.model('OrderItem', orderItemSchema)

module.exports = orderItem
