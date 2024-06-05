import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiOrder } from '../api/api.js'

export const createOrder = createAsyncThunk(
  'createOrder',
  async (orderData, { rejectWithValue, getState }) => {
    const { token } = getState().user
    try {
      const response = await fetch(`${apiOrder}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderData),
      })

      if (!response.ok) {
        throw new Error('Failed to create order')
      }

      return await response.json()
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

export const fetchAllOrders = createAsyncThunk(
  'fetchAllOrders',
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().user
    try {
      const response = await fetch(`${apiOrder}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error('Failed to fetch orders')
      }

      return await response.json()
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

export const deleteOrder = createAsyncThunk(
  'deleteOrder',
  async (orderId, { rejectWithValue, getState }) => {
    const { token } = getState().user

    try {
      const response = await fetch(`${apiOrder}/${orderId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error('Failed to delete order')
      }

      return await response.json()
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

export const editOrder = createAsyncThunk(
  'orders/editOrder',
  async ({ orderId, orderData }, { rejectWithValue, getState }) => {
    const { token } = getState().user

    try {
      const response = await fetch(`${apiOrder}/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderData),
      })

      if (!response.ok) {
        throw new Error('Failed to edit order')
      }

      return await response.json()
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createOrder.fulfilled, (state, { payload }) => {
        state.loading = false
        state.orders.push(payload)
      })
      .addCase(createOrder.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
      })
      .addCase(fetchAllOrders.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAllOrders.fulfilled, (state, { payload }) => {
        state.loading = false
        state.orders = payload
      })
      .addCase(fetchAllOrders.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
      })
      .addCase(deleteOrder.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteOrder.fulfilled, (state, { payload }) => {
        state.loading = false
        state.orders = state.orders.filter((order) => order._id !== payload._id)
      })
      .addCase(deleteOrder.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
      })
      .addCase(editOrder.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(editOrder.fulfilled, (state, { payload }) => {
        state.loading = false
        const index = state.orders.findIndex(
          (order) => order._id === payload._id
        )
        if (index !== -1) {
          state.orders[index] = payload
        }
      })
      .addCase(editOrder.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
      })
  },
})

export default orderSlice.reducer
