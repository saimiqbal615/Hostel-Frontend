import React from 'react'
import RoomsAlbum from './../MyComponent/album/RoomsAlbum';
import img1 from '../MyComponent/images/img1.jpeg'
import img6 from '../MyComponent/images/img6.jpg'
import img5 from '../MyComponent/images/img5.jpg'
import img2 from '../MyComponent/images/img2.jpeg'
import img8 from '../MyComponent/images/img8.jpg'
import { Col,Container,Row } from 'react-bootstrap';
import Roomcard from '../MyComponent/RoomsCard/Roomcard';


function Gallery() {
    const albumarray=[
        {
           imgsrc:img1,
          description:'7 person room'
        
        },

        {
            imgsrc: img8 ,
           description:'3 person room'
         
         },

         {
            imgsrc: img6 ,
           description:'5 person room'
         
         },
         {
            imgsrc:img6,
           description:'2 persons room'
         
         },
 
         {
             imgsrc: img2,
            description:'3 person room'
          
          },
 
          {
             imgsrc:img1,
            description:'6 person room'
          
          }

     
     ]     
        
     const item=
        {     imgsrc:img5,
              roomno:4,
              roomcap:3,
              roomprice:7000,
              roomdes:"Bed of 2 with attached washroom"
        }
    
 

    
  return (
    <div>
        <br />
<Container style={{textAlign:'center'}}>
    <Row>
{
albumarray.map((props)=>{
   
    return(
    
   <Col id="colpadding" xs={12} sm={6} md={4} lg={4}>
     <RoomsAlbum props={props}/>
     </Col>
     
   )
}
)}
</Row>
</Container>
<br />

    <Roomcard item={item}/>
     
<br />

     <Container style={{textAlign:'center'}}>
    <Row>
{
albumarray.map((props)=>{
   
    return(
    
   <Col id="colpadding" xs={12} sm={6} md={4} lg={2}>
     <RoomsAlbum props={props}/>
     </Col>
     
   )
}
)}
</Row>
</Container>
    

    


 
    </div>
  )
}

export default Gallery