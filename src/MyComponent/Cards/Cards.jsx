import React from 'react'
import { Card,Button } from 'react-bootstrap'
import img2 from '../images/img2.jpeg'
import './CardsStyle.css'

function Cards ({cardprop}) {
 
  return (
      
   
        
      <Card data-aos="fade-up" style={{ width: '98%'  }} >
  <Card.Img variant="top" src={cardprop.picsrc} style={{height:'250px'}}/>
  <Card.Body>
    <Card.Title>{cardprop.title}</Card.Title>
    <Card.Text>
     {cardprop.detail}
    </Card.Text>
    <a href="/registration">
    <Button type='button' variant="primary">Book Room</Button></a>
  </Card.Body>
</Card>

  )
}

export default Cards
