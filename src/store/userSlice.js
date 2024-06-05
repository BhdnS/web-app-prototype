import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiUser } from '../api/api.js'

export const registerUser = createAsyncThunk(
  'userRegister',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${apiUser}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok || response.status !== 200) {
        throw new Error('There is a user with that phone number')
      }

      return await response.json()
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

export const loginUser = createAsyncThunk(
  'userLogin',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(`${apiUser}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      if (!response.ok) {
        throw new Error('Invalid credentials')
      }

      return await response.json()
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.userInfo = null
      state.token = null
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false
        state.userInfo = payload
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false
        state.token = payload.token
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
      })
  },
})

export const { logout, clearError } = userSlice.actions
export default userSlice.reducer
