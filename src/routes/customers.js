const express = require('express')
const {
  customerRegister,
  customerLogin,
} = require('../controller/customersController')
const router = express.Router()

router.post('/register', customerRegister)

router.post('/login', customerLogin)

module.exports = router
