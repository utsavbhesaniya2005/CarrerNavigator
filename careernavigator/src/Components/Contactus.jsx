import React from "react";
import "../Components/css/contactus.css";
import { Col, Container, Row } from "react-bootstrap";
import "./css/Home.css";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";

function Contactus() {
  return (
    <div style={{ height: "auto" }}>
      <div className="mainBg">
        <div className="colorGradiant">
          <Container>
            <div className="Content-txt">
              <h3
                style={{ color: "white", fontSize: "45px", margin: "0px" }}
                className="Content-h3"
              >
                Contact Us
              </h3>
              <div className="make-btn">
                <span style={{ marginRight: "5px", cursor: "pointer" }}>
                  Home
                </span>
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ marginLeft: "8px" }}
                ></i>
                <span style={{ marginLeft: "8px" }}>Contact Us</span>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Container
        style={{ margin: "0 auto", padding: "80px 20px", overflow: "hidden" }}
      >
        <Row>
          <Col lg={6} md={12} sm={12} xs={12}>
            <div className="contact-page-heading">
              <div className="main-blog-transform">
                <div className="header">
                  <div
                    className="emp-expr-2 flex contact-Heading"
                    style={{ width: "120px" }}
                  >
                    <p className="tranforming-p">Contact Us</p>
                    <i
                      className="fa-solid fa-arrow-right"
                      style={{ marginLeft: "8px" }}
                    ></i>
                  </div>
                  <h1 className="blog-transform-h1 ">
                    Don't Hesitate To Ask Any Questions
                  </h1>
                  <p
                    style={{
                      marginBottom: "20px",
                      fontSize: "20px",
                      color: "gray",
                      fontWeight: "400",
                    }}
                  >
                    Volutpat ex vehicula ridiculus magnis a facilisi vulputate
                    id.
                  </p>
                </div>
              </div>
            </div>
            <Row>
              <Col lg={6} md={6} sm={12} xs={12}>
                <div style={{ marginTop: "15px", padding: "10px" }}>
                  <div className="icon-below-box flex">
                    <div className="icon-box flex">
                      <div>
                        <BiSolidPhoneCall
                          style={{ fontSize: "35px", color: "white" }}
                        />
                      </div>
                    </div>
                  </div>
                  <h4 className="icon-meaning">Call Us 24hrs</h4>
                  <div
                    style={{
                      flexDirection: "column",
                      display: "inline",
                      width: "fit-content",
                    }}
                    className="description-contactUs-icon"
                  >
                    <p className="icon-description">+011-234-5678</p>
                  </div>
                  <div
                    style={{
                      flexDirection: "column",
                      width: "fit-content",
                    }}
                    className="description-contactUs-icon"
                  >
                    <p
                      className="icon-description"
                      style={{ marginTop: "0px" }}
                    >
                      +011-234-56789
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <div style={{ marginTop: "15px", padding: "10px" }}>
                  <div className="icon-below-box flex">
                    <div className="icon-box flex">
                      <div>
                        <MdEmail style={{ fontSize: "35px", color: "white" }} />
                      </div>
                    </div>
                  </div>
                  <h4 className="icon-meaning">Email Us</h4>
                  <div
                    style={{
                      flexDirection: "column",
                      display: "inline",
                      width: "fit-content",
                    }}
                    className="description-contactUs-icon"
                  >
                    <p className="icon-description">info@example.com</p>
                    <p
                      className="icon-description"
                      style={{ marginTop: "0px" }}
                    >
                      support@example.com
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <div style={{ marginTop: "15px", padding: "10px" }}>
                  <div className="icon-below-box flex">
                    <div className="icon-box flex">
                      <div>
                        <FaLocationDot
                          style={{ fontSize: "35px", color: "white" }}
                        />
                      </div>
                    </div>
                  </div>
                  <h4 className="icon-meaning">Office Address</h4>
                  <div
                    style={{
                      flexDirection: "column",
                      display: "inline",
                      width: "fit-content",
                    }}
                    className="description-contactUs-icon"
                  >
                    <p className="icon-description">
                      No: 58 A, East Madison Street, Baltimore, MD, USA 4508
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <div style={{ marginTop: "15px", padding: "10px" }}>
                  <div className="icon-below-box flex">
                    <div className="icon-box flex">
                      <div>
                        <MdWatchLater
                          style={{ fontSize: "35px", color: "white" }}
                        />
                      </div>
                    </div>
                  </div>
                  <h4 className="icon-meaning">Office Hours</h4>
                  <div
                    style={{
                      flexDirection: "column",
                      display: "inline",
                      width: "fit-content",
                    }}
                    className="description-contactUs-icon"
                  >
                    <p className="icon-description">
                      Mon-Fri - 9am to 6pm, Sat-Sun - Holiday
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contactus;
