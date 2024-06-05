import { ListGroup } from 'react-bootstrap'
import useModifyOrder from '../hooks/useModifyOrder.js'
import ListItemForm from './ListItemForm.jsx'
import ListItemProduct from './ListItemProduct.jsx'

const ListItem = ({ id, name, description, clickDelete }) => {
  const { modify, handleModify } = useModifyOrder()

  return (
    <ListGroup.Item className={'mb-3 rounded shadow'}>
      {!modify && (
        <ListItemProduct
          clickDelete={clickDelete}
          name={name}
          id={id}
          handleModify={handleModify}
          description={description}
        />
      )}
      {modify && (
        <ListItemForm
          name={name}
          description={description}
          id={id}
          handleModify={handleModify}
        />
      )}
    </ListGroup.Item>
  )
}

export default ListItem
