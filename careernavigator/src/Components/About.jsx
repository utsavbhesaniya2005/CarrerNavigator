import React from "react";
import "./css/Home.css";
import "../Components/css/contactus.css";
import { Col, Container, Row } from "react-bootstrap";
import "../Components/css/about.css";

function About() {
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
        style={{
          margin: "0px auto",
          padding: "80px 20px",
          overflow: "hidden",
        }}
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
              <p className="tranforming-p">Transforming Workplaces</p>{" "}
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
              <h1 className="video-h1">
                What drives us: Passion for <br /> People, Dedication to Results
              </h1>
            </div>
          </Col>
          <Col lg={12} md={12} sm={12} xm={12}>
            <div className="horizontal"></div>
            <div className="work-main-box">
              <div className="workplace-box">
                <h4 className="workplace-h4">01</h4>
                <h2 className="workplace-h2">Recruitment Staffing</h2>
                <div className="btn-2-2 workplac-btn">
                  VIEW DETAILS
                  <a type="button" href="#" class="read-more">
                    <div class="box-read-more">
                      <div class="arrow-cross-read-more">
                        <i class="fa-solid fa-arrow-up read-arrow white-brd"></i>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={12} md={12} sm={12} xm={12}>
            <div className="work-main-box  work-main-box2">
              <div className="workplace-box">
                <h4 className="workplace-h4">02</h4>
                <h2 className="workplace-h2 set-h2-box2">
                  Compensation Management
                </h2>
                <div className="btn-2-2 workplac-btn">
                  VIEW DETAILS
                  <a type="button" href="#" className="read-more">
                    <div class="box-read-more">
                      <div class="arrow-cross-read-more">
                        <i class="fa-solid fa-arrow-up read-arrow white-brd"></i>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={12} md={12} sm={12} xm={12}>
            <div className="work-main-box  work-main-box3 ">
              <div className="workplace-box">
                <h4 className="workplace-h4">03</h4>
                <h2 className="workplace-h2 set-h2-box3">
                  Training Development
                </h2>
                <div className="btn-2-2 workplac-btn">
                  VIEW DETAILS
                  <a type="button" href="#" className="read-more">
                    <div class="box-read-more">
                      <div class="arrow-cross-read-more">
                        <i class="fa-solid fa-arrow-up read-arrow white-brd"></i>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={12} md={12} sm={12} xm={12}>
            <div className="work-main-box work-main-box4">
              <div className="workplace-box">
                <h4 className="workplace-h4">04</h4>
                <h2 className="workplace-h2 set-h2-box4">
                  Performance Management
                </h2>
                <div className="btn-2-2 workplac-btn">
                  VIEW DETAILS
                  <a type="button" href="#" className="read-more">
                    <div class="box-read-more">
                      <div class="arrow-cross-read-more">
                        <i class="fa-solid fa-arrow-up read-arrow white-brd"></i>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={12} md={12} sm={12} xm={12}>
            <div className="work-main-box work-main-box5">
              <div className="workplace-box">
                <h4 className="workplace-h4">05</h4>
                <h2 className="workplace-h2 set-h2-box5">Employee Relations</h2>
                <div className="btn-2-2 workplac-btn">
                  VIEW DETAILS
                  <a type="button" href="#" class="read-more">
                    <div class="box-read-more">
                      <div class="arrow-cross-read-more">
                        <i class="fa-solid fa-arrow-up read-arrow white-brd"></i>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{ backgroundColor: "#010E37" }}>
        <Container
          style={{
            margin: "0px auto",
            padding: "80px 20px",
            overflow: "hidden",
          }}
        >
          <Row>
            <Col lg={6} md={12} sm={12} xm={12} className="set-content">
              <div className="center-responsive">
                <div className="emp-expr-3 flex">
                  Our Experties{" "}
                  <i
                    class="fa-solid fa-arrow-right"
                    style={{ marginLeft: "8px" }}
                  ></i>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <div className="All-in-one">
                  <h1 className="col-2-h1">
                    All-in-One HR Services: A Detailed Guide
                  </h1>
                </div>
              </div>

              <div className="paragraph-forth">
                <p className="forthpage-Para">
                  Dui parturient pharetra massa potenti nec consectetur sit elit
                  augue. Blandit nibh efficitur per sagittis id vel rhoncus.
                </p>
              </div>
              <Row className="check-data">
                <Col lg={6} md={6} sm={12} xm={12} className="check-data">
                  <div>
                    <div>
                      <i class="fa-regular fa-circle-check icon-check"></i>
                      <span style={{ color: "white" }}>
                        Comprehensive Resources
                      </span>
                    </div>
                    <div style={{ margin: "10px 0px" }}>
                      <i class="fa-regular fa-circle-check icon-check"></i>
                      <span style={{ color: "white" }}>Employee Support</span>
                    </div>
                    <div style={{ margin: "0px 0px 10px" }}>
                      <i class="fa-regular fa-circle-check icon-check"></i>
                      <span style={{ color: "white" }}>Easy Communication</span>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12} xm={12} className="check-data">
                  <div>
                    <div>
                      <i class="fa-regular fa-circle-check icon-check"></i>
                      <span style={{ color: "white" }}>
                        Updates and Announcements
                      </span>
                    </div>
                    <div style={{ margin: "10px 0px" }}>
                      <i class="fa-regular fa-circle-check icon-check"></i>
                      <span style={{ color: "white" }}>
                        Career Opportunities
                      </span>
                    </div>
                    <div style={{ margin: "0px 0px 10px" }}>
                      <i class="fa-regular fa-circle-check icon-check"></i>
                      <span style={{ color: "white" }}>
                        Feedback and Engagement
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="know-more-center">
                <div style={{ marginTop: "20px" }}>
                  <a type="button" href="#" className="btn1-know-2">
                    <span>Know More</span>
                    <div className="box-know-more">
                      <div className="arrow-cross-know-more">
                        <i className="fa-solid fa-arrow-up"></i>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} xm={12}>
              <Row>
                <Col
                  lg={6}
                  md={6}
                  sm={12}
                  xm={12}
                  style={{ padding: "0px" }}
                  className="marginset"
                >
                  <div className="border-1st-box">
                    <div className="icon-analystics">
                      <i class="fa-solid fa-chart-line"></i>
                    </div>
                    <div className="Heading-anal">
                      <p>Planning And Analytics</p>
                    </div>
                    <div className="para-anal">
                      <p>
                        Venenatis phasellus in dapibus nostra eros sociosqu ut.
                        Sit ex enim quam.
                      </p>
                    </div>
                  </div>
                  <div className="border-2nd-box">
                    <div className="icon-analystics">
                      <i class="fa-regular fa-id-badge"></i>
                    </div>
                    <div className="Heading-anal">
                      <p>Employee Engagement</p>
                    </div>
                    <div className="para-anal">
                      <p>
                        Quam habitasse vivamus congue; leo arcu vestibulum est
                        fames at nisi fusce.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12} xm={12} style={{ padding: "0px" }}>
                  <div className="border-3rd-box">
                    <div className="icon-analystics">
                      <i class="fa-solid fa-bullseye"></i>
                    </div>
                    <div className="Heading-anal">
                      <p>Recruitment & Staffing</p>
                    </div>
                    <div className="para-anal">
                      <p>
                        Risus auctor platea vulputate volutpat ultricies, nostra
                        primis himenaeos.
                      </p>
                    </div>
                  </div>
                  <div className="border-4th-box">
                    <div className="icon-analystics">
                      <i class="fa-solid fa-pen-ruler"></i>
                    </div>
                    <div className="Heading-anal">
                      <p>Policy Management</p>
                    </div>
                    <div className="para-anal">
                      <p>
                        Ornare tortor vitae litora velit ipsum eleifend nostra
                        dis eget placerat nullam.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
      <div style={{backgroundColor:"#D9F1FF"}}>
        <Container
          style={{
            margin: "0px auto",
            padding: "80px 20px",
            overflow: "hidden",
          }}
        >
            <div className="logo-main-row">
                <div className="logoBox"><div className="logo1"></div></div>
            </div>
        </Container>
      </div>
    </div>
  );
}

export default About;
