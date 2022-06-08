import React from 'react'
import { Card, Col,Row } from 'react-bootstrap'
import { MdPhoneIphone } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { RiParkingBoxLine } from 'react-icons/ri';
import Contactform from './Contactform';



function Contact() {
 
  return (
    <div data-aos="zoom-in">
     
      <iframe 
        title="googlemap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4835.5283637962475!2d74.21277779053138!3d31.402068503107177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ffd0bc7c5f71%3A0x879e9b82857bcd94!2sCOMSATS%20University%2C%20Lahore%20Campus!5e0!3m2!1sen!2s!4v1653311723578!5m2!1sen!2s"
        width="100%"
        height="350"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> <br /> <br />
 <center>
  <Row style={{width:'100%'}}>
    <Col  data-aos="zoom-in"><Card style={{border:'solid 1px gray'}}>
      <center>
<MdPhoneIphone size={50}/>
</center>
    <Card.Body>
      <Card.Text>
        <center>
        <strong>+92 303 0738615</strong> <br />
        <strong>+92 323 8616001</strong>
        </center>
      </Card.Text>
    </Card.Body>
  </Card></Col>


  <Col  data-aos="zoom-in"><Card style={{border:'solid 1px gray'}}>
      <center>
<AiOutlineMail size={50}/>
</center>
    <Card.Body >
      <Card.Text>
        <center>
        <strong>saimiqbal@gmail.com</strong> <br />
        <strong>hosteller@gmail.com</strong>
        </center>
      </Card.Text>
    </Card.Body>
  </Card></Col>


  <Col  data-aos="zoom-in" ><Card style={{border:'solid 1px gray'}}>
      <center>
<MdPhoneIphone size={50}/>
</center>
    <Card.Body >
      <Card.Text>
        <center>
        <strong>+92 303 0738615</strong> <br />
        <strong>+92 323 8616001</strong>
        </center>
      </Card.Text>
    </Card.Body>
  </Card></Col>
  </Row> <br />
  </center>

  <Contactform/>
    </div>
  


  )
}

export default Contact