import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container, Button, Row, Col } from "react-bootstrap";
import "./css/Home.css";
import img from "./assets/images/Hrhub-icon-img.png";
import video from "./Video/home1.mp4";

import { FaAngleRight } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

// Swiper
import { A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css';

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
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div>
      {/* Main Content */}
      <div className="main">
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
      </div>
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
                  <h2 className="workplace-h2 set-h2-box5">
                    Employee Relations
                  </h2>
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
      </div>
      <div style={{ backgroundColor: "#D9F1FF" }}>
        <Container
          style={{
            margin: "0px auto",
            padding: "80px 0px 80px 0px",
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
              <h1
                style={{
                  textTransform: "capitalize",
                  fontWeight: "700",
                  letterSpacing: "-1px",
                }}
                className="col-h1"
              >
                Empowering Growth With Strategic Solutions View Services
              </h1>
            </Col>
            <Col lg={5} md={5} sm={12} xm={12} className="second-cl">
              <a type="button" href="#" className="btn1">
                <span>View Services</span>
                <div className="box">
                  <div className="arrow-cross">
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                </div>
              </a>
            </Col>
            <Col lg={12} md={12} className="main-slider">
              <Swiper
                effect={'coverflow'}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                loop={true}
                modules={[Autoplay, EffectCoverflow, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}>
                <SwiperSlide>
                  <div class="slider slider-1">
                    <div class="slider-main-box">
                      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=900&h=500&s=1" alt="Slider-Image" />
                    </div>
                    <div class="slider-heading">
                      <h3 class="slider-h3">Monthly Innovation Idea Days</h3>
                    </div>
                    <div class="slider-paragraph">
                      <p class="slider-p">
                        Venenatis phasellus in dapibus nostra eros sociosqu cursus
                        ut.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="slider slider-2">
                    <div class="slider-main-box">
                      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=900&h=500&s=1" alt="Slider-Image" />
                    </div>
                    <div class="slider-heading">
                      <h3 class="slider-h3">Tailored Employee Growth Plans</h3>
                    </div>
                    <div class="slider-paragraph">
                      <p class="slider-p">
                        Venenatis phasellus in dapibus nostra eros sociosqu cursus
                        ut.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="slider slider-3">
                    <div class="slider-main-box">
                      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=900&h=500&s=1" alt="Slider-Image" />
                    </div>
                    <div class="slider-heading">
                      <h3 class="slider-h3">Dynamic Flexible Work</h3>
                    </div>
                    <div class="slider-paragraph">
                      <p class="slider-p">
                        Habitant hac habitasse augue dictum dui nec cursus.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="slider slider-4">
                    <div class="slider-main-box">
                      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=900&h=500&s=1" alt="Slider-Image" />
                    </div>
                    <div class="slider-heading">
                      <h3 class="slider-h3">Dynamic Flexible Work</h3>
                    </div>
                    <div class="slider-paragraph">
                      <p class="slider-p">
                        Habitant hac habitasse augue dictum dui nec cursus.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="slider slider-4">
                    <div class="slider-main-box">
                      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=900&h=500&s=1" alt="Slider-Image" />
                    </div>
                    <div class="slider-heading">
                      <h3 class="slider-h3">Dynamic Flexible Work</h3>
                    </div>
                    <div class="slider-paragraph">
                      <p class="slider-p">
                        Habitant hac habitasse augue dictum dui nec cursus.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="slider slider-4">
                    <div class="slider-main-box">
                      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=900&h=500&s=1" alt="Slider-Image" />
                    </div>
                    <div class="slider-heading">
                      <h3 class="slider-h3">Dynamic Flexible Work</h3>
                    </div>
                    <div class="slider-paragraph">
                      <p class="slider-p">
                        Habitant hac habitasse augue dictum dui nec cursus.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
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
              <div className="emp-expr-2 flex choice-back">
                <i
                  class="fa-solid fa-arrow-left"
                  style={{ marginRight: "8px" }}
                ></i>
                <p className="tranforming-p">Optimal Pricing Choice</p>{" "}
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
              <h1 className="video-h1 price-h1">Pick The Best Pricing Plan</h1>
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
      <div style={{ backgroundColor: "#D9F1FF" }}>
        <Container
          style={{ margin: "0 auto", padding: "80px 0", overflow: "hidden" }}
        >
          <Row>
            {/* Blog Section */}
            <Col md={12} lg={6} sm={12} xs={12} style={{ padding: "0 20px" }}>
              <div className="blog">
                <div className="mainLatestNew">
                  <div className="blog-z-index">
                    <div className="emp-expr-2 flex choice-back btn-blog">
                      <p className="tranforming-p">23 October 2024</p>
                      <i
                        className="fa-solid fa-arrow-right"
                        style={{ marginLeft: "8px" }}
                      ></i>
                    </div>
                    <h3 className="h3-blog">
                      Mindfulness techniques for reducing workplace stress and
                      work disputes
                    </h3>
                    <p className="para-blog">
                      Arcu ad interdum taciti lacinia tellus suspendisse proin.
                      Egestas natoque sit vivamus dignissim non;...
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            {/* Explore Ideas Section */}
            <Col
              md={12}
              lg={6}
              sm={12}
              xs={12}
              style={{ padding: "50px 20px 20px" }}
            >
              <div>
                <div className="main-blog-transform">
                  <div className="padding-transform">
                    <div className="emp-expr-2 flex blog-transform">
                      <p className="tranforming-p">
                        Explore Ideas, Share Insights
                      </p>
                      <i
                        className="fa-solid fa-arrow-right"
                        style={{ marginLeft: "8px" }}
                      ></i>
                    </div>
                    <h1 className="blog-transform-h1 ">Latest news & Blog</h1>
                  </div>
                </div>
                <div className="flex box-1-transform">
                  <div className="">
                    <div className="emp-expr-2 flex choice-back btn-blog">
                      <p className="tranforming-p">23 October 2024</p>
                      <i
                        className="fa-solid fa-arrow-right"
                        style={{ marginLeft: "8px" }}
                      ></i>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <a href="#" className="box-1-a-transform">
                        Developing a stronger company work culture: 10 Powerful
                        key success strategies
                      </a>
                    </div>
                    <p className="box-1-p-transform">
                      Fusce amet platea metus libero dictumst. Tincidunt sapien
                      quam efficitur mus interdum sit.Nec sodales...
                    </p>
                  </div>
                </div>
                <div className="box-1-transform flex">
                  <div>
                    <div className="emp-expr-2 flex choice-back btn-blog">
                      <p className="tranforming-p">23 October 2024</p>
                      <i
                        className="fa-solid fa-arrow-right"
                        style={{ marginLeft: "8px" }}
                      ></i>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <a href="#" className="box-1-a-transform">
                        The importance of continuous learning in the workplace
                        for personal society growth
                      </a>
                    </div>
                    <p className="box-1-p-transform">
                      Ultricies ipsum quam luctus lobortis etiam. Fermentum
                      dictumst class; conubia mattis varius.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
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
                    <p className="tranforming-p">Reach Out To Us</p>
                    <i
                      className="fa-solid fa-arrow-right"
                      style={{ marginLeft: "8px" }}
                    ></i>
                  </div>
                  <h1 className="blog-transform-h1 ">
                    Don't Hesitate To Reach Us
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
      <div className="card-background" style={{ padding: "70px 0px 0px" }}>
        <Container
          style={{
            margin: "0px auto",
            overflow: "hidden",
          }}
          className="flex"
        >
          <div style={{ color: "white" }} className="footer-Main-Class">
            <div className="">
              <div className="footerData">
                <Row>
                  <Col md="6" sm="12" lg="3" className="second-col-footer">
                    <div>
                      <div className="borderleft">
                        <h3 className="footerLogo flex">BizaPage</h3>
                      </div>
                      <p className="summary-footer">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eos blanditiis, veniam inventore reprehenderit excepturi
                        libero eius ipsa accusamus temporibus! Harum hic illum
                        magnam rem odit inventore nisi dolore ea aliquid!
                      </p>
                    </div>
                  </Col>
                  <Col md="6" sm="12" lg="3" className="second-col-footer">
                    <div>
                      <h4 className="heading-h4-footer">USEFUL LINKS</h4>
                      <div className="lineFlex">
                        <div className="line4"></div>
                        <div className="line5"></div>
                        <div className="line5"></div>
                        <div className="line5"></div>
                        <div className="line5"></div>
                        <div className="line5"></div>
                      </div>
                      <div
                        style={{
                          borderBottom: "1px solid rgba(158, 157, 157, 0.65)",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            paddingBottom: "10px",
                            display: "flex",
                            alignItems: "center",
                          }}
                          className="footer-hover"
                        >
                          <FaAngleRight className="rightArrow-footer" />
                          <h5
                            style={{
                              marginBottom: "0px",
                              fontSize: "14px",
                              marginLeft: "10px",
                            }}
                          >
                            Home
                          </h5>
                        </div>
                      </div>
                      <div
                        style={{
                          borderBottom: "1px solid rgba(158, 157, 157, 0.65)",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            paddingBottom: "10px",
                            display: "flex",
                            alignItems: "center",
                          }}
                          className="footer-hover"
                        >
                          <FaAngleRight className="rightArrow-footer" />
                          <h5
                            style={{
                              marginBottom: "0px",
                              fontSize: "14px",
                              marginLeft: "10px",
                            }}
                          >
                            Abot uS
                          </h5>
                        </div>
                      </div>
                      <div
                        style={{
                          borderBottom: "1px solid rgba(158, 157, 157, 0.65)",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            paddingBottom: "10px",
                            display: "flex",
                            alignItems: "center",
                          }}
                          className="footer-hover"
                        >
                          <FaAngleRight className="rightArrow-footer" />
                          <h5
                            style={{
                              marginBottom: "0px",
                              fontSize: "14px",
                              marginLeft: "10px",
                            }}
                          >
                            Services
                          </h5>
                        </div>
                      </div>
                      <div
                        style={{
                          borderBottom: "1px solid rgba(158, 157, 157, 0.65)",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            paddingBottom: "10px",
                            display: "flex",
                            alignItems: "center",
                          }}
                          className="footer-hover"
                        >
                          <FaAngleRight className="rightArrow-footer" />
                          <h5
                            style={{
                              marginBottom: "0px",
                              fontSize: "14px",
                              marginLeft: "10px",
                            }}
                          >
                            Term of service
                          </h5>
                        </div>
                      </div>
                      <div
                        style={{
                          borderBottom: "1px solid rgba(158, 157, 157, 0.65)",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            paddingBottom: "10px",
                            display: "flex",
                            alignItems: "center",
                          }}
                          className="footer-hover"
                        >
                          <FaAngleRight className="rightArrow-footer" />
                          <h5
                            style={{
                              marginBottom: "0px",
                              fontSize: "14px",
                              marginLeft: "10px",
                            }}
                          >
                            Privacy policy
                          </h5>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md="6" sm="12" lg="3" className="second-col-footer">
                    <h4 className="heading-h4-footer">CONTACT US</h4>
                    <div className="lineFlex">
                      <div className="line4"></div>
                      <div className="line5"></div>
                      <div className="line5"></div>
                      <div className="line5"></div>
                      <div className="line5"></div>
                      <div className="line5"></div>
                    </div>
                    <div>
                      <div className="space-around">
                        <div style={{ marginRight: "5px", fontSize: "20px" }}>
                          <IoLocationSharp />
                        </div>
                        A108 Adam Street New York, NY 535022
                      </div>
                      <div
                        style={{ marginBottom: "10px", cursor: "pointer" }}
                        className="space-around"
                      >
                        <div style={{ marginRight: "5px", fontSize: "20px" }}>
                          <MdAddIcCall />
                        </div>
                        <div className="flex">+1 5589 55488 55</div>
                      </div>
                      <div
                        style={{ marginBottom: "10px", cursor: "pointer" }}
                        className="space-around"
                      >
                        <div style={{ marginRight: "5px", fontSize: "20px" }}>
                          <MdEmail />
                        </div>
                        <div className="flex">info@example.com</div>
                      </div>
                    </div>
                    <div className="icon-footer-flex">
                      <div
                        style={{ fontSize: "35px", marginRight: "5px" }}
                        className="icon-Hover"
                      >
                        <FaTwitterSquare />
                      </div>
                      <div
                        style={{ fontSize: "35px", marginRight: "5px" }}
                        className="icon-Hover"
                      >
                        <FaFacebookSquare />
                      </div>
                      <div
                        style={{ fontSize: "35px", marginRight: "5px" }}
                        className="icon-Hover"
                      >
                        <FaInstagramSquare />
                      </div>
                      <div
                        style={{ fontSize: "35px", marginRight: "5px" }}
                        className="icon-Hover"
                      >
                        <FaLinkedin />
                      </div>
                    </div>
                  </Col>
                  <Col md="6" sm="12" lg="3" className="second-col-footer">
                    <h4 className="heading-h4-footer">OUR NEWSLETTER</h4>
                    <div className="lineFlex">
                      <div className="line4"></div>
                      <div className="line5"></div>
                      <div className="line5"></div>
                      <div className="line5"></div>
                      <div className="line5"></div>
                      <div className="line5"></div>
                    </div>
                    <p className="summary-footer">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos blanditiis, veniam inventore reprehenderit excepturi
                      libero eius ipsa accusamus temporibus!
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
            <hr className="footer-horizontal" />
            <div
              style={{
                color: "white",
                padding: "20px",
                textAlign: "center",
              }}
            >
                <FaRegCopyright style={{ marginRight: "7px" }} /> Copyright{" "}
                BizPage.All Rights Reserved
              <div>
                Designed by{" "}
                <strong style={{ color: "#3e5dc2", marginLeft: "5px" }}>
                  Career Guidance Team
                </strong>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Home;
