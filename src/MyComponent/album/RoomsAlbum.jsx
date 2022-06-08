import {React} from 'react';
import { Figure } from 'react-bootstrap';


function RoomsAlbum({props}) {
   
  return (
    
      <Figure data-aos="zoom-in-right">
  <Figure.Image
    width={270}
    height={200}
    alt="300x200" 
    src={props.imgsrc}
    
  />


  
  <Figure.Caption>
   <strong> {props.description} </strong>
  </Figure.Caption>

</Figure>


  
  )
}



export default RoomsAlbum
