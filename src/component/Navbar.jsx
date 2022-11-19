import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const NavbarHome = () => {
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="./indihome.png" alt="indihome" className='w-12 '/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto sm:ml-[70%]">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Jangkauan Indihome" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to='/'>Indihome Tangerang</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/sukabumi'>Indihome SukaBumi</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/bogor'>Indihome Bogor</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarHome