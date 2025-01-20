import React from "react";
import "./css/Home.css";
import "../Components/css/contactus.css";
import { Col, Container, Row } from "react-bootstrap";
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
          <Col lg={6} md={12} sm={12} xs={12}>
            <div className="below-box-contact-form flex">
              <div className="contact-form-container ">
                <div className="feedBack-heading flex">
                  <h2>Feedback Form</h2>
                </div>
                <form className="contact-form">
                  <Col>
                    <div className="form-group">
                      <input type="text" placeholder="Your Name*" required />
                      <input
                        type="email"
                        placeholder="Email Address*"
                        required
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Mobile Number*"
                        required
                      />
                      <select required>
                        <option value="" disabled selected>
                          Choose types of service*
                        </option>
                        <option value="service1">Service 1</option>
                        <option value="service2">Service 2</option>
                      </select>
                    </div>
                  </Col>
                  <Col>
                    <div className="form-group">
                      <textarea placeholder="Additional Message"></textarea>
                    </div>
                  </Col>
                  <Col style={{ marginTop: "20px" }}>
                    <div style={{ marginTop: "30px" }}>
                      <a
                        type="button"
                        href="#"
                        className="btn1 sendMsg-FormBtn"
                      >
                        <span>Send Message</span>
                        <div className="box">
                          <div className="arrow-cross">
                            <i className="fa-solid fa-arrow-up"></i>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Col>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div
        style={{ overflow: "hidden", margin: "0px auto", padding: "40px 0px" }}
      >
        <Row>
          <Col
            className="flex"
            md={12}
            lg={12}
            sm={12}
            xm={12}
            style={{ marginBottom: "20px" }}
          >
            <div className="emp-expr-2 flex">
              <i
                class="fa-solid fa-arrow-left"
                style={{ marginRight: "8px" }}
              ></i>
              <p className="tranforming-p">Tour Our Various Sites</p>{" "}
              <i
                class="fa-solid fa-arrow-right"
                style={{ marginLeft: "8px" }}
              ></i>
            </div>
          </Col>
          <Col
            md={12}
            lg={12}
            sm={12}
            xm={12}
            className="flex"
            style={{ marginBottom: "40px" }}
          >
            <div
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <h1 className="video-h1">Explore Our Other Locations</h1>
            </div>
          </Col>
          <Col>
            <div className="map-main-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.540813253558!2d-76.61411630048937!3d39.29866302513345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8049765e14a59%3A0xdc8161350711f86e!2sSciTechSyndicate!5e0!3m2!1sen!2sin!4v1737386206861!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Contactus;
