import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../store/orderSlice.js'

const useCreateOrder = () => {
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.user)
  const { loading, error } = useSelector((state) => state.order)
  const [orderData, setOrderData] = useState({
    name: '',
    description: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (token) {
      dispatch(createOrder(orderData))
      setOrderData({
        name: '',
        description: '',
      })
    }
  }

  return {
    loading,
    error,
    handleSubmit,
    orderData,
    handleChange,
  }
}

export default useCreateOrder
