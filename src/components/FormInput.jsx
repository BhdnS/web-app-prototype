import { Form } from 'react-bootstrap'

const FormInput = ({ title, controlID, ...props }) => {
  return (
    <Form.Group className={'mb-3'} controlId={controlID}>
      <Form.Label>{title}:</Form.Label>
      <Form.Control {...props} />
    </Form.Group>
  )
}

export default FormInput
