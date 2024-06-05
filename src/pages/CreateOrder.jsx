import { Button, Form } from 'react-bootstrap'
import Error from '../components/Error.jsx'
import FormInput from '../components/FormInput.jsx'
import Loader from '../components/Loader.jsx'
import useCreateOrder from '../hooks/useCreateOrder.js'

const CreateOrder = () => {
  const { orderData, error, handleChange, handleSubmit, loading } = useCreateOrder()

  if (loading) return <Loader />

  return (
    <>
      <h1>Create an order:</h1>
      <Form onSubmit={handleSubmit}>
        <FormInput
          title='Order name'
          controlID='name'
          type='text'
          name='name'
          value={orderData.name}
          onChange={handleChange}
          placeholder='Enter order name'
          required
        />
        <FormInput
          title='Order description'
          controlID='description'
          type='text'
          name='description'
          value={orderData.description}
          onChange={handleChange}
          placeholder='Enter product description'
          required
        />
        <Button disabled={loading} variant='primary' type='submit'>
          Create order
        </Button>
      </Form>
      <Error error={error} />
    </>
  )
}

export default CreateOrder
