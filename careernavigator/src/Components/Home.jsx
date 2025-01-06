import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container, Button, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

import "./css/Home.css";
import img from "./assets/images/Hrhub-icon-img.png";
import video from "./Video/home1.mp4";

const PercentageCol = ({ iconClass, title, targetPercentage, description }) => {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    let currentPercentage = 0;
    const interval = setInterval(() => {
      currentPercentage += 1;
      if (currentPercentage >= targetPercentage) {
        clearInterval(interval);
        currentPercentage = targetPercentage;
      }
      setPercentage(currentPercentage);
    }, 100);

    return () => clearInterval(interval);
  }, [targetPercentage]);
  return (
    <Col
      lg={3}
      md={6}
      sm={12}
      xm={12}
      style={{ marginTop: "10vh", padding: "5px" }}
    >
      <div
        style={{
          borderBottom: "1px solid rgba(103, 98, 98, 0.4)",
          paddingBottom: "15px",
          marginBottom: "5vh",
          width: "98%",
          display: "flex",
          alignItems: "center",
          //   justifyContent:"space-evenly",
        }}
      >
        <div
          className="icon-1 flex"
          style={{ color: "white", fontSize: "20px" }}
        >
          <i className={iconClass}></i>
        </div>
        <span
          style={{ marginLeft: "7px", fontWeight: "500", fontSize: "20px" }}
        >
          {title}
        </span>
      </div>
      <div>
        <h1 className="percentage-achive">{percentage}%</h1>
        <span style={{ fontSize: "18px", color: "rgb(130, 126, 126)" }}>
          {description}
        </span>
      </div>
    </Col>
  );
};

const Home = () => {
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
  const data = [
    {
      iconClass: "fa-solid fa-briefcase",
      title: "Compensation & Benefits",
      targetPercentage: 65,
      description:
        "Metus torquent platea aenean orci ridiculus potenti feugiat ultricies.",
    },
    {
      iconClass: "fa-solid fa-users",
      title: "Training & Development",
      targetPercentage: 90,
      description:
        "Risus auctor platea vulputate volutpat ultricies, primis fermentum himenaeos.",
    },
    {
      iconClass: "fa-solid fa-medal",
      title: "Recruitment & Staffing",
      targetPercentage: 72,
      description:
        "Tellus lacus conubia donec curabitur class nulla lorem torquent.",
    },
    {
      iconClass: "fa-regular fa-heart",
      title: "Employee Relations",
      targetPercentage: 58,
      description:
        "Ornare tortor vitae litora velit ipsum eleifend dis eget placerat nullam.",
    },
  ];

  return (
    <div>
      {/* Main Content */}
      <main className="main">
        <div className="content-val">
          <div className="video">
            <video
              src={video}
              muted
              autoPlay
              loop
              className="w-100 h-100 object-fit-cover"
            ></video>
            <div className="overlay"></div>
            <Container className="container-box m-0">
              <Row className="text-center">
                <Col md={8} lg={8}>
                  <div className="data-main-box">
                    <div
                      data-aos="zoom-in-right"
                      data-aos-offset="200"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="false"
                    >
                      <div className="data-box1">
                        <h6 className="m-0 btn-1">
                          The New Era Of HR
                          <i
                            class="fa-solid fa-arrow-right"
                            style={{ marginLeft: "8px" }}
                          ></i>
                        </h6>
                      </div>
                      <div className="data-box2">
                        <h1 className="data-box2-h1">
                          Transforming HR: Inspiring Change, Driving Results
                        </h1>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={8} lg={4} className="border-box2 p-0">
                  <div className="data-box4">
                    <h1 className="data-box2-con">
                      Curabitur ornare ac viverra cubilia amet at nibh nullam.
                      Magna eleifend sagittis sit arcu vitae ad commodo.
                    </h1>
                    <div className="btn-2">
                      Read More
                      <a type="button" href="#" class="read-more">
                        <div class="box-read-more">
                          <div class="arrow-cross-read-more">
                            <i
                              class="fa-solid fa-arrow-up read-arrow"
                              style={{ marginLeft: "6px", color: "white" }}
                            ></i>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </main>
      <div style={{ backgroundColor: "#D9F1FF" }}>
        <Container
          style={{
            margin: "  0px auto",
            padding: "80px 10px",
            overflow: "hidden",
          }}
        >
          <div className="emp-expr flex">
            Empolyee Experience{" "}
            <i
              class="fa-solid fa-arrow-right"
              style={{ marginLeft: "8px" }}
            ></i>
          </div>
          <Row className="">
            <Col lg={7} md={7} sm={12} xm={12} className="second-cl">
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <h1
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "700",
                    letterSpacing: "2px",
                  }}
                  className="col-h1"
                >
                  Strategies to Enhance Engagement and Well-Being
                </h1>
              </div>
            </Col>
            <Col lg={5} md={5} sm={12} xm={12} className="second-cl">
              <a type="button" href="#" className="btn1">
                <span>Know More</span>
                <div className="box">
                  <div className="arrow-cross">
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                </div>
              </a>
            </Col>
          </Row>
          <Row>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {data.map((item, index) => (
                <PercentageCol
                  key={index}
                  iconClass={item.iconClass}
                  title={item.title}
                  targetPercentage={item.targetPercentage}
                  description={item.description}
                />
              ))}
            </div>
          </Row>
        </Container>
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
                    <a type="button" href="#" class="read-more">
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
        <marquee
          behavior="scroll"
          direction="right"
          loop="infinite"
          scrollamount="7"
          bgcolor="blue"
          height="55px"
          width="100%"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="flex">
            <p style={{ margin: "0px 20px", color: "white" }}>
              <span className="marquee-p">
                <i className="fa-regular fa-circle-check"></i>
              </span>
              Empowering Talent, Transforming Organizations
            </p>
            <p style={{ margin: "0px 20px", color: "white" }}>
              <span className="marquee-p">
                <i className="fa-regular fa-circle-check"></i>
              </span>
              Navigating Change, Fostering Success
            </p>
            <p style={{ margin: "0px 20px", color: "white" }}>
              <span className="marquee-p">
                <i className="fa-regular fa-circle-check"></i>
              </span>
              Innovative HR Solutions for a Thriving Workforce
            </p>
            <p style={{ margin: "0px 20px", color: "white" }}>
              <span className="marquee-p">
                <i className="fa-regular fa-circle-check"></i>
              </span>
              Unlocking Potential, Driving Growth Together
            </p>
            <p style={{ margin: "0px 20px", color: "white" }}>
              <span className="marquee-p">
                <i className="fa-regular fa-circle-check"></i>
              </span>
              Your Success, Our Commitment to Excellence
            </p>
          </div>
        </marquee>
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
                  What drives us: Passion for <br /> People, Dedication to
                  Results
                </h1>
              </div>
            </Col>
            <Col lg={12} md={12} sm={12} xm={12}>
              <div className="work-main-box">
                <div className="workplace-box">
                  <h4 className="workplace-h4">01</h4>
                  <h2 className="workplace-h2">Recruitment Staffing</h2>
                  <div className="btn-2-2 workplac-btn">
                    VIEW DETAILS
                    <a type="button" href="#" class="read-more">
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
            <Col lg={12} md={12} sm={12} xm={12}></Col>
            <Col lg={12} md={12} sm={12} xm={12}></Col>
            <Col lg={12} md={12} sm={12} xm={12}></Col>
            <Col lg={12} md={12} sm={12} xm={12}></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Home;
