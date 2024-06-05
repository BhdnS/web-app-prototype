import { Alert } from 'react-bootstrap'

const EmptyOrders = ({ view }) => {
  return view ? <Alert>Orders Empty</Alert> : null
}

export default EmptyOrders
