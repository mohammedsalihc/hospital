import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaRegHospital } from 'react-icons/fa';;



function Body() {
  return (
    
    <div className="body">
      
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        

        <Navbar.Brand href="#home"> <FaRegHospital/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Features</Nav.Link>
            <NavDropdown title="Facilities" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Departments</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Nursing services
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pharmacy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Rooms</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">
                Insurance
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav >
            <Nav.Link ><a href='signin'>Login</a> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  


        <div className="homeimg">
          <div className="content">
            <h1 className="title">Hospital</h1>
            
                <button className='button'><Link className="anger" to='/bookings'>Bookings</Link> </button>
                {/* <button className='button'>Bookings </button> */}
          </div>
        </div>
      </div>
    
  );
}

export default Body;
