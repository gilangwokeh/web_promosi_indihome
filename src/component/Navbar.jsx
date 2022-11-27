import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavbarHome = () => {
  return (
    <div>
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="./indihome.png" alt="indihome" className='w-12 '/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto sm:ml-[70%]">
            <Nav.Link href="https://indihomejakartabarat.com/" className='text-black'>Indihome Jakarta Barat</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarHome