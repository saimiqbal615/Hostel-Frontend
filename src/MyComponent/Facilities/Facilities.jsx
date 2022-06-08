import React from 'react'
import { Col,Row,Carousel,Button } from 'react-bootstrap'
import img11 from '../images/img11.jpg'
import img5 from '../images/img5.jpg'
import img9 from '../images/img9.jpg'
import { AiOutlineWifi } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { RiParkingBoxLine } from 'react-icons/ri';
import './StyleFacilities.css'


function Facilities() {
  return (
    <div>
    
      <a href="/rooms"  ><Button className='btn-f' type='button' variant="dark">View all rooms</Button></a>
      
 <Row style={{width:"100%"}}>
    <Col data-aos="fade-right" className='Fcol1' xs={6}>
        <h1>We have everything you need</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa qui molestiae ratione tenetur vitae vel aperiam blanditiis autem neque officiis, veritatis accusantium! Sed, illum sit esse eius et id nostrum!</p>
      

      <div>
         <ul style={{listStyle:"none",padding:50}}>
           <li>
             <AiOutlineWifi size={30}/>
             <strong>Free available high speed WiFi</strong>
           </li> <br />

           <li>
             < GrLocation size={30}/>
             <strong>Convenient location in the center</strong>
           </li> <br />

           <li>
              <RiShoppingBag3Line size={30}/>
              <strong>Free storage of luggage of any size</strong>
           </li> <br />

           <li>
           <RiParkingBoxLine size={30}/>
           <strong>Parking place allocated to you</strong>
           </li> <br />
        
           <a href="/registration"><Button type='button' variant="light">Book Now</Button></a>
         </ul>
        
      </div>
       
     

    </Col>


    <Col data-aos="fade-right"  className='Fcol2' xs={6}>
    <Carousel fade >
  <Carousel.Item>
    <img style={{height:'40'}}
      className="img-fluid"
      src={img9}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-fluid"
      src={img5}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-fluid"
      src={img11}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </Col>
  </Row>


    </div>
  )
}

export default Facilities