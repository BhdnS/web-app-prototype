import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ height: '80vh' }}
    >
      <Spinner className='m-auto' animation='border' />
    </div>
  )
}

export default Loader
