import React from 'react';
import '../Components/css/contactus.css';
import { FaArrowsAltH } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';
import { FaLongArrowAltRight } from "react-icons/fa";

function Contactus() {
  return (
    <div style={{ height: "auto" }}>
      <div className='mainBg'>
        <div className="colorGradiant">
          <Container>
            <div className="Content-txt">
              <h3 style={{ color: "white", fontSize: "45px", margin: "0px" }} className='Content-h3'>Contact Us</h3>
              <div className="make-btn">
                <span style={{ marginRight: "5px", cursor: "pointer" }}>Home</span>
                <FaArrowsAltH />
                <span style={{ marginLeft: "5px" }}>Contact Us</span>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Container style={{ padding: "5rem 15px" }}>
        <Row>
          <Col lg={6} md={12} sm={12} xs={12}>
            <div className="make-btn2">
              <span style={{ marginRight: "7px" }}>Conatct Us</span><FaLongArrowAltRight />
            </div>
            <h2 style={{ fontSize: '50px', padding: "1rem 0rem" }}>Don't Hesitate To Ask Any Questions</h2>
            <p>Volutpat ex vehicula ridiculus magnis a facilisi vulputate id.</p>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contactus
