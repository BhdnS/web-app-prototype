import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editOrder, fetchAllOrders } from '../store/orderSlice.js'

const useListItemForm = ({ description, name, id }) => {
  const { token } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name,
    description,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (token) {
      dispatch(editOrder({ orderId: id, orderData: formData }))
      dispatch(fetchAllOrders())
    }
  }

  return {
    handleSubmit,
    handleChange,
    formData,
  }
}

export default useListItemForm
