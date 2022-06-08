import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./roomcardstyle.css";
import { faBed, faPerson } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState } from 'react';
import img5 from '../images/img5.jpg'

function Roomcard({item} ) {
  // useState(() => {
  //   Aos.init({ duration: 1500 });
  // });
 

 
  return (
    <div className="d-flex"
      id="card-room"
      style={{
        marginBottom:"5rem",marginInline:'50px',
      }}
    >
      <Col sm={4}>
        <img id="imageroom" src={item.imgsrc} alt="hero" />
      </Col>
      <Col sm={6}>
        <h3
          className="room-title"
          style={{ cursor: "pointer" }}
          onMouseOver={changeBackground}
          onMouseLeave={normalbackground}
          
        >
          {item.roomdes}
        </h3>
        <br className="2" />
        <p className="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
          blanditiis facilis quia molestias nihil
        </p>
        <br />
        <li style={{textDecoration:'none'}}>
          <FontAwesomeIcon icon={faPerson} size="2x" />{" "}
          <strong>{item.roomcap}</strong> Sleeps
        </li>
        <li style={{textDecorastion:'none'}}>
          <FontAwesomeIcon icon={faBed} size="2x" /> <strong>no</strong>{" "}
          Air Conditioner
        </li>
      </Col>
      <Col sm={2}>
        <div className=" hero-s">
          <p>Rs{item.roomprice}</p>
        </div>
        <br className="2" />
        <div className="bookdesc">
          
<a href="/registration">
            <Button type="button" variant="primary" size="lg">
              Book Now
            </Button></a>
          
        </div>
      </Col>
    </div>
  );
  function changeBackground(e) {
    e.target.style.color = "#285484";
  }
  function normalbackground(e) {
    e.target.style.color = null;
  }
}

export default Roomcard;
