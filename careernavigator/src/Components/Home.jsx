import React from 'react';
import { Navbar, Nav, Container, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Home.css';
import video from './Video/home1.mp4';
const Home = () => {
    return (
        <>
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
                                        <div className="data-box1">
                                            <h6 className="m-0 btn-1">The New Era Of HR</h6>
                                        </div>
                                        <div className="data-box2">
                                            <h1 className="data-box2-h1">Transforming HR: Inspiring Change, Driving Results</h1>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={8} lg={4} className="border-box2 p-0">
                                    <div className="data-box4">
                                        <h1 className="data-box2-con">
                                            Curabitur ornare ac viverra cubilia amet at nibh nullam. Magna eleifend sagittis sit arcu vitae ad commodo.
                                        </h1>
                                        <div className="btn-2">Read More</div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
