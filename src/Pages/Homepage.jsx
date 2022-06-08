import React from 'react'
import Hero from '../MyComponent/Hero/Hero';
import Facilities from '../MyComponent/Facilities/Facilities';
import img4 from '../MyComponent/images/img4.jpg'
import img5 from '../MyComponent/images/img5.jpg'
import img6 from '../MyComponent/images/img6.jpg'
import { Col,Row,Container } from 'react-bootstrap'
import Cards from '../MyComponent/Cards/Cards'


function Homepage() {
  const cardarry=[
    {
       picsrc:img4,
       title : 'Room No.1',
       detail: 'Bed of 2 with attached washroom'
    },

    {
      picsrc:img5,
      title : 'Room No.2',
      detail: 'Bed of 4 with attached washroom'
   },

   {
    picsrc:img6,
    title : 'Room No.3',
    detail: 'Bed of 5 with attached washroom'
 }
  ]
  return (
    <div>
    <Hero/>
     
    <Container style={{textAlign:'center', marginTop:'150px'}}>
    <Row>

{
  cardarry.map((cardprop)=>{
    
       return(
    
    <Col id="colpadding" xs={12} sm={6} md={4} lg={4}>
    <Cards cardprop={cardprop}/>
    
    
    </Col>
       );
  }
  )
}
  
</Row>
</Container>

    {/* <Subhero props={props}/> */}
    <Facilities/>
   
    

    </div>
  )
}

export default Homepage