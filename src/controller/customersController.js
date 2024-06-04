const Customer = require('../models/customerSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const customerRegister = async (req, res) => {
  try {
    const { name, phoneNumber, password } = req.body

    const existingCustomer = await Customer.findOne({ phoneNumber })
    if (existingCustomer) {
      return res.status(400).json({ message: 'Phone number already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const customer = new Customer({
      name,
      phoneNumber,
      password: hashedPassword,
    })

    await customer.save()

    res.status(200).json({ message: 'Customer saved successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const customerLogin = async (req, res) => {
  try {
    const { phoneNumber, password } = req.body
    const customer = await Customer.findOne({ phoneNumber })

    if (!customer)
      return res.status(400).json({ message: 'Invalid credentials' })

    const isMatch = await bcrypt.compare(password, customer.password)

    if (!isMatch)
      return res.status(400).json({ message: 'Invalid credentials' })

    const token = jwt.sign(
      { customerId: customer._id },
      process.env.SECRET_KEY,
      {
        expiresIn: '1h',
      }
    )

    res.json({ token })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = {
  customerRegister,
  customerLogin,
}
