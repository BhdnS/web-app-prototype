import { Button } from 'react-bootstrap'

const ListItemBtn = ({
  action,
  modify,
  flag,
  textOne,
  textTwo,
  variantOne,
  variantTwo,
}) => {
  return (
    <div className='d-flex gap-3'>
      <Button onClick={action} variant={variantOne}>
        {textOne}
      </Button>
      <Button onClick={() => modify(flag)} variant={variantTwo}>
        {textTwo}
      </Button>
    </div>
  )
}

export default ListItemBtn
