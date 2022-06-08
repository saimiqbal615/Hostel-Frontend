import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import logo from '../images/logo.png'
import './My_Navbar.css'

function MyNavbar() {
  useEffect(() => {
    AOS.init(1500);
    // AOS.refresh();
  }, []);
  return (
   
      <Navbar data-aos="fade-down" style={{ width: '100%' }} collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <img className='logo' src={logo} alt="" />
          <Navbar.Brand  href='/'>Hostel World</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/rooms">Rooms</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="/Registration"><Button variant="outline-info">Register Room</Button></Nav.Link>
            <Nav.Link href="/signup"><Button variant="outline-danger">SignUp</Button></Nav.Link>
            <Nav.Link href="/login"><Button variant="outline-danger">Login</Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
 
  )
}

export default MyNavbar