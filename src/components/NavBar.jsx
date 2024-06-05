import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { NavLink } from 'react-router-dom'
import useNavBar from '../hooks/useNavBar.js'

const NavBar = () => {
  const { handleLogout, token } = useNavBar()

  return (
    <Navbar expand='md' className='bg-body-tertiary mb-3'>
      <Container fluid>
        <Navbar.Brand href='#'>Web App Prototype</Navbar.Brand>
        <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' />
        <Navbar.Offcanvas
          id='offcanvasNavbar-expand-md'
          aria-labelledby='offcanvasNavbarLabel-expand-md'
          placement='end'
        >
          <Offcanvas.Header closeButton />
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              {!token && (
                <Nav.Link as={NavLink} to={'registration'}>
                  Registration
                </Nav.Link>
              )}
              {!token && (
                <Nav.Link as={NavLink} to={'login'}>
                  Sign in
                </Nav.Link>
              )}
              {token && (
                <Nav.Link as={NavLink} to={'order'}>
                  Create order
                </Nav.Link>
              )}
              {token && (
                <Nav.Link as={NavLink} to={'orders'}>
                  All orders
                </Nav.Link>
              )}
              {token && <Nav.Link onClick={handleLogout}>Logout</Nav.Link>}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavBar
