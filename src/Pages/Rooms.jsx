import React from 'react'
import img4 from '../MyComponent/images/img4.jpg'
import img5 from '../MyComponent/images/img5.jpg'
import img9 from '../MyComponent/images/img9.jpg'
import img6 from '../MyComponent/images/img6.jpg'
import img11 from '../MyComponent/images/img11.jpg'
import img12 from '../MyComponent/images/img12.jpg'
import Roomcard from '../MyComponent/RoomsCard/Roomcard'
import Cards from '../MyComponent/Cards/Cards'
import { Col,Row,Container } from 'react-bootstrap'





function Rooms() {
//--------------------------home card array calling--------------//
    const cardarry=[
        {
           picsrc:img4,
           title : 'Room No.4',
           detail: 'Bed of 2 with attached washroom'
        },
    
        {
          picsrc:img5,
          title : 'Room No.5',
          detail: 'Bed of 4 with attached washroom'
       },
    
       {
        picsrc:img6,
        title : 'Room No.6',
        detail: 'Bed of 5 with attached washroom'
     }
      ]

//-----------------------room card array------//

   
    const array=[
        {
            imgsrc: img5,
            roomno:1,
            roomcap:3,
            roomprice:3000,
            roomdes:"Bed of 4 with attached washroom"
        
        },
       
        {
            imgsrc: img9,
            roomno:2,
            roomcap:5,
            roomprice:3000,
            roomdes:"Bed of 4 with attached washroom"
        },
        {
            imgsrc: img11,
            roomno:3,
            roomcap:6,
            roomprice:5000,
            roomdes:"Bed of 6 with attached washroom"
        },
        {
            imgsrc: img12,
            roomno:4,
            roomcap:3,
            roomprice:7000,
            roomdes:"Bed of 2 with attached washroom"
        }
    ]
    
    

  return (
    <div>
   {/* //----------------home card map--------------// */}


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

{/* //----------------room card map--------------// */}
<br /> <br />

{
array.map((item)=>{
   return <Roomcard item={item}/>
}
)}
        
    </div>
  )
}

export default Rooms