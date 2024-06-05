import { ListGroup } from 'react-bootstrap'
import EmptyOrders from '../components/EmptyOrders.jsx'
import Error from '../components/Error.jsx'
import ListItem from '../components/ListItem.jsx'
import Loader from '../components/Loader.jsx'
import useAllOrders from '../hooks/useAllOrders.js'

const AllOrders = () => {
  const { orders, loading, error, handleDeleteClick } = useAllOrders()

  if (loading) return <Loader />

  return (
    <>
      <h1>My orders:</h1>
      {!!orders.length && (
        <ListGroup>
          {orders.map((order) => (
            <ListItem
              key={order._id}
              clickDelete={handleDeleteClick}
              id={order._id}
              name={order.name}
              description={order.description}
            />
          ))}
        </ListGroup>
      )}
      <EmptyOrders view={!orders.length} />
      <Error error={error} />
    </>
  )
}

export default AllOrders
