import React from 'react'
import './footer.css'
import logo from '../images/logo.png'


const Footer = () => {
  
  return (
      
    <footer data-aos="fade-down" style={{backgroundColor:'#212529', color:'white'}}>
  <div className="container">
    <div className="row">
   
      
       <div className="col-md-4 footer-column">
       <h2  className='footer-h2'>  <img className='logo' src={logo} alt="" /> Hostel One</h2>
<p className='footer-p'>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.Fuga nam mollitia doloremque quam at fugit ipsam laboriosam enim assumenda iure.Lorem ipsum dolor sit amet consectetur adipisicing elit.Deleniti,asperiores.
</p>
       </div>
       
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Quick Links</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/rooms">
              Rooms
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/gallery">
              Gallery
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Contact &amp; Support</span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <i className="fas fa-phone" />
              +92 303 0738615
            </span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-comments" />
              Live chat
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-envelope" />
              Contact us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-star" />
              Give feedback
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="text-center">
      <i className="fas fa-ellipsis-h" />
    </div>
    <div className="row text-center">
      <div className="col-md-4 box">
        <span className="copyright quick-links">Copyright © Your Website</span>
      </div>
      <div className="col-md-4 box">
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 box">
        <ul className="list-inline quick-links">
          <li className="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms of Use</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer

