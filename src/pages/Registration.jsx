import { Button, Form } from 'react-bootstrap'
import Error from '../components/Error.jsx'
import FormInput from '../components/FormInput.jsx'
import Loader from '../components/Loader.jsx'
import useAuthForm from '../hooks/useAuthForm.js'

const Registration = () => {
  const { handleChange, handleSubmit, loading, error, formData } = useAuthForm()

  if (loading) return <Loader />

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        title='User Name'
        controlID='name'
        type='text'
        name='name'
        value={formData.username}
        onChange={handleChange}
        placeholder='Enter the user name'
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
      <Error error={error} />
      <Button disabled={loading} variant='primary' type='submit'>
        Register
      </Button>
    </Form>
  )
}

export default Registration
