import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <Row>
      <Col md={6} className='mx-auto'>
        <div className='text-center'>
          <h1 className='display-4'>Oops, something went wrong!</h1>
          <p className='lead'>We apologize for the inconvenience.</p>
          <p>Please go back to the app</p>
          <Link className='btn btn-primary' to='/'>
            Back
          </Link>
        </div>
      </Col>
    </Row>
  )
}

export default ErrorPage
