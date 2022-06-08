import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'
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
          <Navbar.Brand>Hostel One</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav  className="mx-auto">  

              <Link id='navmenu' to='/'>Home</Link> 
              <Link id='navmenu'  to="/about">About</Link>
              <Link id='navmenu'  to="/rooms">Rooms</Link>
              <Link id='navmenu'  to="/gallery">Gallery</Link>
              <Link id='navmenu'  to="/contact">Contact Us</Link>
            </Nav>
            <Nav>
            <Link id='button' to="/Registration"><Button variant="outline-info">Register Room</Button></Link>
            <Link id='button' to="/signup"><Button variant="outline-secondary">SignUp</Button></Link>
            <Link id='button' to="/login"><Button variant="outline-secondary">Login</Button></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
 
  )
}

export default MyNavbar