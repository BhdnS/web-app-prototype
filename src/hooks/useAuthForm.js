import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearError, loginUser, registerUser } from '../store/userSlice.js'

const useAuthForm = (isLogin = false) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    password: '',
  })
  const dispatch = useDispatch()
  const { token, loading, error, userInfo } = useSelector((state) => state.user)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isLogin) {
      if (!token) {
        dispatch(loginUser(formData))
      }
    } else {
      dispatch(registerUser(formData))
    }
  }

  useEffect(() => {
    if (isLogin && token) {
      navigate('/order')
    } else if (!isLogin && userInfo) {
      navigate('/login')
    }

    return () => {
      dispatch(clearError())
    }
  }, [token, userInfo, isLogin, navigate, dispatch])

  return {
    loading,
    error,
    handleSubmit,
    handleChange,
    formData,
  }
}

export default useAuthForm
