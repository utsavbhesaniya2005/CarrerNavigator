import React from 'react';
import { Navbar, Nav, Container, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Home.css';
import video from './Video/home1.mp4';
const Home = () => {
    return (
        <div style={{ backgroundColor: "#D9F1FF" }}>
            {/* Main Content */}
            <main className="main">
                <div className="content-val">
                    <div className="video">
                        <video src={video} muted autoPlay loop className="w-100 h-100 object-fit-cover"></video>
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
                                                <h6 className="m-0 btn-1">The New Era Of HR</h6>
                                            </div>
                                            <div className="data-box2">
                                                <h1 className="data-box2-h1">Transforming HR: Inspiring Change, Driving Results</h1>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={8} lg={4} className="border-box2 p-0">
                                    <div className="data-box4">
                                        <h1 className="data-box2-con">
                                            Curabitur ornare ac viverra cubilia amet at nibh nullam. Magna eleifend sagittis sit arcu vitae ad commodo.
                                        </h1>
                                        <div className="btn-2">Read More 
                                            <a type="button" href="#" class="read-more">
                                                <div class="box-read-more">
                                                    <div class="arrow-cross-read-more">
                                                        <i class="fa-solid fa-arrow-up read-arrow" style={{marginLeft:"6px",color:"white"}}></i>
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
            </main >
            <Container style={{ padding: "0px", margin: "20px auto" }}>
                <div className="emp-expr flex">Empolyee Experience <i class="fa-solid fa-arrow-right" style={{marginLeft:"8px"}}></i></div>
                <Row>
                    <Col>
                        <h1 style={{textTransform:"capitalize"}}>Strategies to Enhance Engagement and Well-Being</h1>
                    </Col>
                    <Col>
                    <div class="col-2">
                    <div class="get-started-btn">
                        <a type="button" href="#" class="btn1">
                            <span>Get Started</span>
                            <div class="box">
                                <div class="arrow-cross">
                                    <i class="fa-solid fa-arrow-up"></i>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
