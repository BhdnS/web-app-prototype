import { Alert } from 'react-bootstrap'

const Error = ({ error }) => {
  return error ? <Alert variant='danger'>{error}</Alert> : null
}

export default Error
