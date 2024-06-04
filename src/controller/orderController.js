const Order = require('../models/orderSchema')
const Product = require('../models/productSchema')
const OrderItem = require('../models/orderItemSchema')

const createOrder = async (req, res) => {
  try {
    const { customerId } = req.customer
    const { name, description } = req.body

    let order = await Order.findOne({ customerId })

    if (!order) {
      order = new Order({ customerId })
      await order.save()
    }

    const product = new Product({ name, description })
    await product.save()

    const orderItem = new OrderItem({
      orderId: order._id,
      productId: product._id,
    })
    await orderItem.save()

    res.status(201).json({ message: 'Product added!' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'An error occurred while adding data' })
  }
}

const reviewOrder = async (req, res) => {
  try {
    const { customerId } = req.customer
    const orders = await Order.find({ customerId })

    const orderItems = orders.map((order) =>
      OrderItem.find({ orderId: order._id }).lean()
    )
    const productId = await Promise.all(orderItems)
      .then((res) => res.flat())
      .then((products) => products.map((product) => product.productId))

    const products = await Promise.all(
      productId.map((id) => Product.find({ _id: id }))
    )

    res.json(products.flat())
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const deleteOrder = async (req, res) => {
  try {
    const productId = req.params.id

    const deletedOrderItem = await OrderItem.findOneAndDelete({ productId })

    if (!deletedOrderItem) {
      return res
        .status(404)
        .json({ error: 'OrderItem not found for the given product' })
    }

    const deletedProduct = await Product.findByIdAndDelete(productId)

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' })
    }

    res.json({
      message: 'Product and associated OrderItem deleted successfully',
    })
  } catch (err) {
    res.status(500).json({
      error:
        'An error occurred while deleting the product and associated OrderItem',
    })
  }
}

const editOrder = async (req, res) => {
  try {
    const productId = req.params.id
    const updateData = req.body

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updateData,
      { new: true }
    )

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' })
    }

    res.json({ message: 'Product updated', product: updatedProduct })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = {
  createOrder,
  reviewOrder,
  deleteOrder,
  editOrder,
}
