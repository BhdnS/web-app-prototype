const express = require('express')
const auth = require('../helpers/auth')
const {
  createOrder,
  deleteOrder,
  editOrder,
  reviewOrder,
} = require('../controller/orderController')
const router = express.Router()

router.post('/', auth, createOrder)
router.get('/', auth, reviewOrder)
router.delete('/:id', auth, deleteOrder)
router.put('/:id', auth, editOrder)

module.exports = router
