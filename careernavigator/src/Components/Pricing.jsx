import React, { useRef, useState } from "react";
import "./css/Home.css";
import "../Components/css/contactus.css";
import { Col, Container, Row } from "react-bootstrap";
import "../Components/css/services.css";

function Pricing() {
  const posterRef = useRef(null);
  const videoContentRef = useRef(null);

  const playVideo = () => {
    if (posterRef.current && videoContentRef.current) {
      // Hide the poster and show the video content
      posterRef.current.style.display = "none";
      videoContentRef.current.style.display = "block";

      // Change the iframe src to include the autoplay parameter to start playing the video
      const iframe = videoContentRef.current.querySelector("iframe");
      iframe.src =
        "https://www.youtube.com/embed/HAcLoqZO-Z0?autoplay=1&si=6rnlKCssRq1-GEPB";
    } else {
      console.error("One or both refs are null:", {
        posterRef: posterRef.current,
        videoContentRef: videoContentRef.current,
      });
    }
  };
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
  };
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
                Pricing Plans
              </h3>
              <div className="make-btn">
                <span style={{ marginRight: "5px", cursor: "pointer" }}>
                  Home
                </span>
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ marginLeft: "8px" }}
                ></i>
                <span style={{ marginLeft: "8px" }}>Pricing Plans</span>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div style={{ backgroundColor: "var(--body-bg)" }}>
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
                  Building Better Teams, One Hire
                  <br /> At A Time
                </h1>
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
              <div className="video-box">
                <div ref={posterRef} className="poster">
                  <div className="play-button-container" onClick={playVideo}>
                    <div className="play-button">
                      <i className="fa fa-play"></i>
                    </div>
                  </div>
                </div>
                <div
                  ref={videoContentRef}
                  className="videoContent"
                  style={{ display: "none" }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/HAcLoqZO-Z0?si=6rnlKCssRq1-GEPB"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </Col>
            <Col md={6} lg={6} sm={12} xm={12} className="video-des-col p-0">
              <div className="data-box4-2">
                <div className="video-des">
                  <h1 className="data-box2-con-2">
                    Curabitur ornare ac viverra cubilia amet at nibh nullam.{" "}
                    <br />
                    Magna eleifend sagittis sit arcu vitae ad commodo.
                  </h1>
                  <div className="btn-2-2">
                    TALK WITH EXPERTS
                    <a type="button" href="#" className="read-more">
                      <div class="box-read-more">
                        <div class="arrow-cross-read-more">
                          <i
                            class="fa-solid fa-arrow-up read-arrow"
                            style={{ marginLeft: "6px", color: "black" }}
                          ></i>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={6} sm={12} xm={12} className="happy-hiring">
              {/* <div className=""> */}
              <div className="hub_img"></div>
              <div
                style={{
                  fontSize: "17px",
                  fontWeight: "600",
                  letterSpacing: "2px",
                }}
              >
                <span style={{ fontWeight: "bold", fontSize: "35px" }}>
                  24,000+
                </span>
                <br />
                Happy Hiring
              </div>
              {/* </div> */}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="card-background" style={{ padding: "70px 0px" }}>
        <Container
          style={{
            margin: "0px auto",
            padding: "80px 0px 80px 0px",
            overflow: "hidden",
          }}
          className="flex"
        >
          <Row>
            <Col
              className="flex content-wrapper"
              md={12}
              lg={12}
              sm={12}
              xm={12}
              style={{ marginBottom: "20px" }}
            >
              <div
                className="emp-expr-2 flex choice-back"
                style={{ width: "200px" }}
              >
                <i
                  class="fa-solid fa-arrow-left"
                  style={{ marginRight: "8px" }}
                ></i>
                <p
                  className="tranforming-p"
                  style={{ color: "white", fontSize: "17px" }}
                >
                  Flexible Packages
                </p>{" "}
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
              className="flex content-wrapper"
            >
              <h1 className="video-h1 price-h1">Dynamic Subscription Plans</h1>
            </Col>
            <div className="pricing-table">
              <div className="app-container">
                <p style={{ marginBottom: "0px", marginRight: "10px" }}>
                  Billed Monthly
                </p>
                <div
                  className={`toggle-container ${isOn ? "on" : "off"}`}
                  onClick={toggleSwitch}
                >
                  <div className="switch"></div>
                </div>
                <p style={{ marginBottom: "0px", marginLeft: "10px" }}>
                  Billed Annually
                </p>
              </div>
              <div className="card-main-class">
                <div
                  className={`card-main-class pricing-plans basic-plan ${
                    isOn ? "animateX" : "animateY"
                  }`}
                >
                  {/* Basic Plan */}
                  <div className="pricing-card basic">
                    <div className="card-header">
                      <h6 className="plan-name">Basic</h6>
                      <h3 className="basic-plan-h3">Basic HR Plan</h3>
                      <p>
                        Parturient elementum in, rutrum tristique inceptos sit
                        suspendisse faucibus velit.
                      </p>
                    </div>
                    <div className="card-price flex">
                      <h2>
                        <span>
                          <sup className="doller-Sym">$</sup>
                        </span>
                        {isOn ? "369.99" : "69.99"}
                      </h2>
                      <span className="price-duration">
                        <sub style={{ marginBottom: "0px" }}>/mo</sub>
                      </span>
                    </div>
                    <div
                      className="know-more-center"
                      style={{ marginBottom: "15px" }}
                    >
                      <div className="btn-100-set">
                        <a
                          type="button"
                          href="#"
                          className="btn1-know-2 btn-size-100"
                        >
                          <p className="btn-content">
                            Boost Your Profit <br />
                            <span className="btn-child-content">
                              Vestibulum dignissim.
                            </span>
                          </p>
                          <div className="box-know-more btn-price-position">
                            <div className="arrow-cross-know-more arrow-size">
                              <i className="fa-solid fa-arrow-up"></i>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <ul className="features">
                      <li>
                        <i className="fa-regular fa-circle-check"></i>
                        <span className="list-card">24/7 Customer support</span>
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-check"></i>
                        <span className="list-card">
                          On-site training and workshops
                        </span>
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-check"></i>
                        <span className="list-card">
                          Complete recruiting and talent acquisition
                        </span>
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-check"></i>
                        <span className="list-card">
                          Customized benefits Programs
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`card-main-class pricing-plans pro-plan ${
                    isOn ? "animateX-popular" : "animateY-popular"
                  }`}
                >
                  {/* Pro Plan */}
                  <div className="pricing-card pro">
                    <div className="popular-bedge">Popular</div>
                    <div className="card-header">
                      <h6 className="plan-name pro-h6">Pro</h6>
                      <h3 className="basic-plan-h3">Pro HR Plan</h3>
                      <p>
                        Parturient elementum in, rutrum tristique inceptos sit
                        suspendisse faucibus velit.
                      </p>
                    </div>
                    <div className="card-price flex">
                      <h2>
                        <span>
                          <sup className="doller-Sym">$</sup>
                        </span>
                        {isOn ? "889.99" : "89.99"}
                      </h2>
                      <span className="price-duration">
                        <sub style={{ marginBottom: "0px" }}>/mo</sub>
                      </span>
                    </div>
                    <div
                      className="know-more-center"
                      style={{ marginBottom: "15px" }}
                    >
                      <div className="btn-100-set">
                        <a
                          type="button"
                          href="#"
                          className="btn1-know-2 btn-size-100 pro-btn-back"
                        >
                          <p className="btn-content">
                            Elevate Your Growth
                            <br />{" "}
                            <span className="btn-child-content">
                              Vestibulum nisi em dignissi ultrices.
                            </span>{" "}
                          </p>

                          <div className="box-know-more btn-price-position pro-price-position">
                            <div className="arrow-cross-know-more arrow-size">
                              <i className="fa-solid fa-arrow-up"></i>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <ul className="features">
                      <li>
                        <i class="fa-regular fa-circle-check"></i>
                        <span className="list-card">24/7 Customer support</span>
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-check"></i>
                        <span className="list-card">
                          On-site training and workshops
                        </span>
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-check"></i>
                        <span className="list-card">
                          Complete recruiting and talent acquisition
                        </span>
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-check"></i>
                        <span className="list-card">
                          Customized benefits Programs
                        </span>
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-check"></i>
                        <span className="list-card">
                          Access to advanced HRIS
                        </span>
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-check"></i>
                        <span className="list-card">
                          Legal support for conflicts
                        </span>
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-check"></i>
                        <span className="list-card">
                          Leadership training programs
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className={`card-main-class pricing-plans recomand-plan ${
                    isOn ? "animateX-recommended" : "animateY-recommended"
                  }`}
                >
                  {/* Enterprise Plan */}
                  <div className="pricing-card basic enterprise">
                    <div className="card-header">
                      <h6 className="plan-name recommended">Recommended</h6>
                      <h3 className="basic-plan-h3">Enterprise HR Plan</h3>
                      <p>
                        Parturient elementum in, rutrum tristique inceptos sit
                        suspendisse faucibus velit.
                      </p>
                    </div>
                    <div className="card-price flex">
                      <h2>
                        <span>
                          <sup className="doller-Sym">$</sup>
                        </span>
                        {isOn ? "1120.99" : "129.99"}
                      </h2>
                      <span className="price-duration">
                        <sub style={{ marginBottom: "0px" }}>/mo</sub>
                      </span>
                    </div>
                    <div
                      className="know-more-center"
                      style={{ marginBottom: "15px" }}
                    >
                      <div className="btn-100-set">
                        <a
                          type="button"
                          href="#"
                          className="btn1-know-2  btn-size-100"
                        >
                          <p className="btn-content">
                            Boost Your Profit <br />{" "}
                            <span className="btn-child-content">
                              Vestibulum dignissim.
                            </span>{" "}
                          </p>

                          <div className="box-know-more btn-price-position">
                            <div className="arrow-cross-know-more arrow-size">
                              <i className="fa-solid fa-arrow-up"></i>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <ul className="features">
                      <li>
                        <i class="fa-regular fa-circle-check"></i>
                        <span className="list-card">
                          Leadership training programs
                        </span>
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-check"></i>
                        <span className="list-card">
                          Legal support for conflicts
                        </span>
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-check"></i>
                        <span className="list-card">
                          Customized benefits Progarams
                        </span>
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-check"></i>
                        <span className="list-card">
                          Complete recruiting and talent acquisition
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <div style={{ backgroundColor: "var(--body-bg)" }}>
        <Container
          style={{ margin: "0 auto", padding: "80px 20px", overflow: "hidden" }}
        >
          <Row>
            <div className="contact-page-heading">
              <div className="main-blog-transform">
                <div className="header">
                  <div className="emp-expr-2 flex contact-Heading">
                    <p className="tranforming-p">Let Us Assist</p>
                    <i
                      className="fa-solid fa-arrow-right"
                      style={{ marginLeft: "8px" }}
                    ></i>
                  </div>
                  <h1 className="blog-transform-h1 ">
                    We're ready to guide you
                  </h1>
                </div>
              </div>
            </div>
            <div className="contact-form-container">
              <form className="contact-form">
                <Col>
                  <div className="form-group">
                    <input type="text" placeholder="Your Name*" required />
                    <input type="email" placeholder="Email Address*" required />
                  </div>
                </Col>
                <Col>
                  <div className="form-group">
                    <input type="text" placeholder="Mobile Number*" required />
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
                  <div>
                    <textarea placeholder="Additional Message"></textarea>
                  </div>
                </Col>
                <Col style={{ marginTop: "20px" }} className="upload-form">
                  <div>
                    <div className="upload-section">
                      <label htmlFor="file-upload" className="contact-btn">
                        <span>
                          <i class="fa-solid fa-arrow-up-from-bracket"></i>
                          <span style={{ marginLeft: "10px" }}>upload</span>
                        </span>
                        <input
                          id="file-upload"
                          type="file"
                          accept=".pdf,.jpg,.png,.doc"
                          style={{ display: "none" }}
                        />
                      </label>
                      <span className="file-text">No file chosen</span>
                    </div>
                    <p className="file-info">
                      *Upload your resume in pdf, jpg, png, or doc format.
                    </p>
                  </div>
                  <div>
                    <a type="button" href="#" className="btn1 sendMsg-FormBtn ">
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
          </Row>
        </Container>
      </div>
      <div
        style={{
          backgroundColor: "#030333",
          overflow: "hidden",
          margin: "0px auto",
          padding: "60px 30px",
        }}
      >
        <Row>
          <Col lg={6} md={12} sm={12} xs={12} className="flex">
            <div>
              <div className="center-responsive">
                <div className="emp-expr-3 flex" style={{ width: "220px" }}>
                  Newsletter Subscription{" "}
                  <i
                    class="fa-solid fa-arrow-right"
                    style={{ marginLeft: "8px" }}
                  ></i>
                </div>
              </div>
              <div className="All-in-one">
                <h1 className="col-2-h1" style={{ fontSize: "35px" }}>
                  Don't Miss Out On Exclusive <br /> Insights And Special
                  Promotions
                </h1>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12} className="flex">
            <div className="flex">
              <div class="email-container">
                <div class="inputBox">
                  <input
                    type="email"
                    placeholder="Enter Your Mail address Here"
                  />
                  <div>
                    <a
                      type="button"
                      href="#"
                      className="btn1 sendMsg-FormBtn"
                      style={{ background: "#0c4ed0" }}
                    >
                      <span>Send</span>
                      <div className="box" style={{ background: "#010e37" }}>
                        <div className="arrow-cross">
                          <i className="fa-solid fa-arrow-up"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <p>
                  By subscribing you agree to our{" "}
                  <a href="#">Terms & Conditions</a> and <a href="#">Privacy</a>
                  .
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Pricing;
