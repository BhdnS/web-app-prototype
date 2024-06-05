import { Form } from 'react-bootstrap'
import useListItemForm from '../hooks/useListItemForm.js'
import FormInput from './FormInput.jsx'
import ListItemBtn from './ListItemBtn.jsx'

const ListItemForm = ({ description, name, id, handleModify }) => {
  const { handleChange, handleSubmit, formData } = useListItemForm({
    description,
    name,
    id,
  })

  return (
    <Form>
      <FormInput
        title='Order name'
        controlID='name'
        type='text'
        name='name'
        value={formData.name}
        onChange={handleChange}
        placeholder='Enter order name'
        required
      />
      <FormInput
        title='Order description'
        controlID='description'
        type='text'
        name='description'
        value={formData.description}
        onChange={handleChange}
        placeholder='Enter order description'
        required
      />
      <ListItemBtn
        flag={false}
        modify={handleModify}
        action={handleSubmit}
        textOne={'Save'}
        textTwo={'Cancel'}
        variantOne='primary'
        variantTwo={'outline-danger'}
      />
    </Form>
  )
}

export default ListItemForm
