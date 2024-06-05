import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/userSlice.js'

const useNavBar = () => {
  const token = useSelector((state) => state.user.token)
  const dispatch = useDispatch()

  const handleLogout = () => {
    if (token) {
      dispatch(logout())
    }
  }

  return {
    handleLogout,
    token,
  }
}

export default useNavBar
