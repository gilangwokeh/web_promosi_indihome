import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavbarHome = () => {
  return (
    <div>
    <Navbar bg="info" expand="lg">
      <Container>
        <Navbar.Brand href="https://indihome-tangerang.netlify.app/">
          <img src="./indihome.png" alt="Indihome Tangerang" className='w-12 '/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto sm:ml-[70%]">
            <Nav.Link href="https://indihome-tangerang.netlify.app/" className='text-black'>Indihome Tangerang</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarHome