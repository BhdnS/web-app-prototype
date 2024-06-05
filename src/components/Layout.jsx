import Container from 'react-bootstrap/Container'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar.jsx'

const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  )
}

export default Layout
