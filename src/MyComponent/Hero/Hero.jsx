import React from 'react'
import './Herostyle.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import {Col} from 'react-bootstrap'
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
function Hero() {
  return (
    <div>
         <Container className='Hero-section'>
  <Row>
    {/* Left side of hero section */}
    <Col className="leftside" sm={7}>
      
      <h1 className='hero-title'>
      HostelBook <br />
      </h1>
      <h2>
      Amazing hostel for students and the free spirited traveler
      </h2>

      <br className="2" />
      <p className='herodescription'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
         Nesciunt blanditiis facilis quia molestias nihil autem veritatis, <br />
         culpa commodi quisquam dicta doloremque vero dolore ipsum esse, debitis beatae adipisci, libero deserunt!
      </p>
    </Col>
    {/* Right side of hero section */}
    <Col sm={5}>
      <div>
      <div data-aos="zoom-in" className='heroimg'>
        <img src={img1} alt="hero" />
        </div>
 </div>


    </Col>
  </Row>
  </Container>
         
    </div>
  )
}

export default Hero