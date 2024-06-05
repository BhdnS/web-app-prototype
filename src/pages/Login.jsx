import { Button, Form } from 'react-bootstrap'
import Error from '../components/Error.jsx'
import FormInput from '../components/FormInput.jsx'
import Loader from '../components/Loader.jsx'
import useAuthForm from '../hooks/useAuthForm.js'

const Login = () => {
  const { error, loading, handleChange, handleSubmit, formData } = useAuthForm(true)

  if (loading) return <Loader />

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        title='Phone number'
        controlID='phoneNumber'
        type='number'
        name='phoneNumber'
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder='Enter your phone number'
        required
      />
      <FormInput
        title='Password'
        controlID='password'
        type='password'
        name='password'
        value={formData.password}
        onChange={handleChange}
        placeholder='Enter your password'
        required
      />
      <Error error={error} />
      <Button disabled={loading} variant='primary' type='submit'>
        Login
      </Button>
    </Form>
  )
}

export default Login
