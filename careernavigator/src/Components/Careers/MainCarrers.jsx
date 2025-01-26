import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import careersData from './careersData.json';
import './careers.css'; 

function MainCarrers() {
    return (
        <>
            <div>
                <div className="mainBg">
                    <div className="colorGradiant">
                        <Container>
                            <div className="Content-txt">
                                <h3 style={{ color: 'white', fontSize: '45px', margin: '0px' }} className="Content-h3">
                                    Careers
                                </h3>
                                <div className="make-btn">
                                    <span style={{ marginRight: '5px', cursor: 'pointer' }}>Home</span>
                                    <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                                    <span style={{ marginLeft: '8px' }}>Careers</span>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>

                <div className="container my-5">
                    <h2 className="text-center mb-4">Explore Career Opportunities in the Indian Education System</h2>
                    <hr /><br />
                    {/* Display Class 1 to 12 Data */}
                    <h3 className="mb-4">Educational Stages (Class 1 to 12)</h3>
                    <Row>
                        {careersData.standards.map((standard, index) => (
                            <Col key={index} lg={4} md={6} sm={12} className="mb-4">
                                <div className="career-card">
                                    <div className="career-card-body">
                                        <h4 className="career-card-title">Class {standard.standard}</h4>
                                        <h5 className="career-card-subtitle"><b>Subjects</b>: {standard.subjects.join(', ')}</h5>
                                        <div className="career-card-btn">
                                            <Link to={`/course/${`${standard.url}`}`} className="btn btn-primary">
                                                View More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    {/* Display Commerce Stream Data */}
                    <h3 className="my-5">Commerce Stream Courses</h3>
                    <Row>
                        {careersData.streams.commerce.undergraduate.map((course, index) => (
                            <Col key={index} lg={4} md={6} sm={12} className="mb-4">
                                <div className="career-card">
                                    <div className="career-card-body">
                                        <h4 className="career-card-title">{course.course}</h4>
                                        <h5 className="career-card-subtitle">
                                            <b>Subjects</b>: {course.subjects.join(', ')}
                                            <br />
                                            <b>Fees</b>: {course.fees}
                                            <br />
                                            <b>Job Opportunities</b>: {course.jobOpportunities.join(', ')}
                                            <br />
                                            <b>Salary Package</b>: {course.salaryPackage}
                                        </h5>
                                        <div className="career-card-btn">
                                            <Link to={`/course/${course.url}`} className="btn btn-primary">
                                                View More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    {/* Display Science Stream Data */}
                    <h3 className="my-5">Science Stream Courses</h3>
                    <Row>
                        {careersData.streams.science.undergraduate.map((course, index) => (
                            <Col key={index} lg={4} md={6} sm={12} className="mb-4">
                                <div className="career-card">
                                    <div className="career-card-body">
                                        <h4 className="career-card-title">{course.course}</h4>
                                        <h5 className="career-card-subtitle">
                                            <b>Subjects</b>: {course.subjects.join(', ')}
                                            <br />
                                            <b>Fees</b>: {course.fees}
                                            <br />
                                            <b>Job Opportunities</b>: {course.jobOpportunities.join(', ')}
                                            <br />
                                            <b>Salary Package</b>: {course.salaryPackage}
                                        </h5>
                                        <div className="career-card-btn">
                                            <Link to={`/course/${course.url}`} className="btn btn-primary">
                                                View More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    {/* Display Arts Stream Data */}
                    <h3 className="my-5">Arts Stream Courses</h3>
                    <Row>
                        {careersData.streams.arts.undergraduate.map((course, index) => (
                            <Col key={index} lg={4} md={6} sm={12} className="mb-4">
                                <div className="career-card">
                                    <div className="career-card-body">
                                        <h4 className="career-card-title">{course.course}</h4>
                                        <h5 className="career-card-subtitle">
                                            <b>Subjects: </b> {course.subjects.join(', ')}
                                            <br />
                                            <b>Fees</b>: {course.fees}
                                            <br />
                                            <b>Job Opportunities</b>: {course.jobOpportunities.join(', ')}
                                            <br />
                                            <b>Salary Package</b>: {course.salaryPackage}
                                        </h5>
                                        <div className="career-card-btn">
                                            <Link to={`/course/${course.url}`} className="btn btn-primary">
                                                View More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    {/* Display Postgraduate Courses */}
                    <h3 className="my-5">Postgraduate Courses</h3>
                    <Row>
                        {careersData.streams.commerce.postgraduate.concat(
                            careersData.streams.science.postgraduate,
                            careersData.streams.arts.postgraduate
                        ).map((course, index) => (
                            <Col key={index} lg={4} md={6} sm={12} className="mb-4">
                                <div className="career-card">
                                    <div className="career-card-body">
                                        <h4 className="career-card-title">{course.course}</h4>
                                        <h5 className="career-card-subtitle">
                                            <b>Subjects</b>: {course.subjects.join(', ')}
                                            <br />
                                            <b>Fees</b>: {course.fees}
                                            <br />
                                            <b>Job Opportunities</b>: {course.jobOpportunities.join(', ')}
                                            <br />
                                            <b>Salary Package</b>: {course.salaryPackage}
                                        </h5>
                                        <div className="career-card-btn">
                                            <Link to={`/course/${course.url}`} className="btn btn-primary">
                                                View More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </>
    );
}

export default MainCarrers;
