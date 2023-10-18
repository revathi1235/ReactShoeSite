import React from 'react'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import { Link, Outlet } from 'react-router-dom';
// import './Navbar.css';  
function NavBars() {
  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
        
        <Container>
            <img src="https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png" alt="" />
          <NavbarCollapse href="#home">NavBars</NavbarCollapse>
          <Nav className="Me" >
           <Link to={'/home'}><Nav.Link href="#home">Home</Nav.Link></Link> 
            <Link to={'/feature'}><Nav.Link href="#features">Features</Nav.Link></Link>
        <Link to={'price'}> <Nav.Link href="#pricing">Pricing</Nav.Link></Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
      </div>

  );
}

export default NavBars

