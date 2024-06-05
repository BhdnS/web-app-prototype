import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteOrder, fetchAllOrders } from '../store/orderSlice.js'

const useAllOrders = () => {
  const dispatch = useDispatch()
  const { orders, loading, error } = useSelector((state) => state.order)
  const { token } = useSelector((state) => state.user)

  useEffect(() => {
    if (token) {
      dispatch(fetchAllOrders())
    }
  }, [dispatch, token])

  const handleDeleteClick = (id) => {
    if (token) {
      dispatch(deleteOrder(id))
      dispatch(fetchAllOrders())
    }
  }

  return {
    handleDeleteClick,
    loading,
    error,
    orders,
  }
}

export default useAllOrders
