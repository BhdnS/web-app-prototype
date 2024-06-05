import ListItemBtn from './ListItemBtn.jsx'

const ListItemProduct = ({
  name,
  description,
  id,
  handleModify,
  clickDelete,
}) => {
  return (
    <>
      <h5>Product name: {name}</h5>
      <h5>Product description: {description}</h5>
      <ListItemBtn
        modify={handleModify}
        action={() => clickDelete(id)}
        textOne={'Delete'}
        variantOne={'outline-danger'}
        textTwo={'Edit'}
        variantTwo={'primary'}
        flag={true}
      />
    </>
  )
}

export default ListItemProduct
