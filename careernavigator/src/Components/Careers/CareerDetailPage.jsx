import React from 'react';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import careersData from './careersData.json';
import './CareerDetailPage.css';

function CareerDetailPage() {
    const { courseUrl } = useParams();

    const getCourseData = (courseUrl) => {
        const standard = careersData.standards.find(s => s.url === courseUrl);
        if (standard) {
            return { type: 'standard', data: standard };
        }

        for (let stream in careersData.streams) {
            const allCourses = [...careersData.streams[stream].undergraduate, ...careersData.streams[stream].postgraduate];
            const course = allCourses.find(c => c.url === courseUrl);
            if (course) {
                return { type: 'course', data: course };
            }
        }

        return null;
    };

    const courseData = getCourseData(courseUrl);

    if (!courseData) {
        return <div className="text-center mt-5">Course or Standard not found</div>;
    }

    return (
        <>
            <div className="mainBg">
                <div className="colorGradiant">
                    <Container>
                        <div className="Content-txt">
                            <h3 className="Content-h3 text-white">Careers</h3>
                            <div className="make-btn ">
                                <span className="text-white">Home</span>
                                <i className="fa-solid fa-arrow-right mx-2 text-white"></i>
                                <span className="text-white">Careers</span>
                                <i className="fa-solid fa-arrow-right mx-2 text-white"></i>
                                {courseData.type === 'standard' ? (
                                    <span className="text-white">{courseData.data.standard}</span>
                                ) : (
                                    <span className="text-white">{courseData.data.course}</span>
                                )}
                            </div>
                        </div>
                    </Container>
                </div>
            </div>

            <Container className="py-5">
                <Row>
                    <Col md={8}>
                        {courseData.type === 'standard' ? (
                            <Card className="shadow-lg mb-4">
                                <Card.Body>
                                    <Card.Title className="display-4 text-primary text-center">{`Class ${courseData.data.standard}`}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-center">
                                        <strong>Subjects:</strong> <br />{courseData.data.subjects.join(', ')}
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        ) : (
                            <Card className="shadow-lg mb-4">
                                <Card.Body>
                                    <Card.Title className="display-4 text-primary">{courseData.data.course}</Card.Title>
                                    <Card.Subtitle className="mb-2">
                                        <strong>Subjects:</strong> <br />{courseData.data.subjects.join(', ')}
                                    </Card.Subtitle>
                                    <Card.Text className="mt-4">
                                        <strong>Fees:</strong> <br />{courseData.data.fees}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Job Opportunities:</strong> <br />{courseData.data.jobOpportunities.join(', ')}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Salary Package:</strong> <br />{courseData.data.salaryPackage}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Duration:</strong> {courseData.data.duration}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>

                    <Col md={4}>
                        <Card className="shadow-lg">
                            <Card.Body>
                                <h4 className="text-center text-primary">Apply Now</h4>
                                <p className="text-center">
                                    Interested in applying for this course? Click below to submit your application.
                                </p>
                                <Link to={`/apply/${courseUrl}`} className="btn btn-success w-100">Apply Now</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CareerDetailPage;
