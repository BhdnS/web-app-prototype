require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.log(`DB connection error: ${err}`))

const customerRoutes = require('./src/routes/customers')
const orderRoutes = require('./src/routes/orders')

app.use('/customers', customerRoutes)
app.use('/orders', orderRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server started on port localhost://${process.env.PORT}`)
})
