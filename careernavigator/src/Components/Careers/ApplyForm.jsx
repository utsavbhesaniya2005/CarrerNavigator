import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Form, Alert } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Field, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import careersData from './careersData.json'; // Assuming you have your careersData in this file

// Define the validation schema with Yup
const validationSchema = Yup.object({
    firstName: Yup.string()
        .min(3, 'First Name must be at least 3 characters')
        .required('First Name is required'),
    lastName: Yup.string()
        .min(3, 'Last Name must be at least 3 characters')
        .required('Last Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
        .required('Phone number is required'),
    message: Yup.string()
        .min(10, 'Message must be at least 10 characters')
        .required('Message is required'),
});

function ApplyForm() {
    const { courseUrl } = useParams();
    const navigate = useNavigate();
    
    const [courseDetails, setCourseDetails] = useState(null);
    const [fees, setFees] = useState(10000); // Default fee if not found
    
    useEffect(() => {
        const getCourseData = (courseUrl) => {
            const standard = careersData.standards.find(s => s.url === courseUrl);
            if (standard) {
                setCourseDetails({ type: 'standard', data: standard });
                setFees(standard.fees || fees);
            } else {
                for (let stream in careersData.streams) {
                    const allCourses = [...careersData.streams[stream].undergraduate, ...careersData.streams[stream].postgraduate];
                    const course = allCourses.find(c => c.url === courseUrl);
                    if (course) {
                        setCourseDetails({ type: 'course', data: course });
                        setFees(course.fees || fees);
                    }
                }
            }
        };

        getCourseData(courseUrl);
    }, [courseUrl]);

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            console.log("Form Submitted: ", values);
            // Navigate to the homepage after submission
            navigate('/');
            setSubmitting(false);
        }, 1000);
    };

    // If course details are not yet loaded
    if (!courseDetails) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    return (
        <>
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
                                    <i className="fa-solid fa-arrow-right mx-2 text-white"></i>
                                    <span style={{ marginLeft: '8px' }}>Apply</span>
                                    <i className="fa-solid fa-arrow-right mx-2 text-white"></i>
                                {courseDetails.type === 'standard' ? (
                                    <span className="text-white">{courseDetails.data.standard}</span>
                                ) : (
                                    <span className="text-white">{courseDetails.data.course}</span>
                                )}
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
        
        <Container className="py-5">
            <Card className="p-4 shadow-lg">
                <Card.Body>
                    <Card.Title className="text-primary">Application Form</Card.Title>

                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            phone: '',
                            message: '',
                            course: courseDetails.data.course || courseDetails.data.standard, // Auto-set course/standard
                            fees: fees, // Auto-set fees
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched, isSubmitting }) => (
                            <FormikForm>
                                <Form.Group controlId="firstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Field
                                        name="firstName"
                                        type="text"
                                        className={`form-control ${touched.firstName && errors.firstName ? 'is-invalid' : ''}`}
                                        placeholder="Enter your first name"
                                    />
                                    {touched.firstName && errors.firstName && (
                                        <div className="invalid-feedback">{errors.firstName}</div>
                                    )}
                                </Form.Group>

                                <Form.Group controlId="lastName" className="mt-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Field
                                        name="lastName"
                                        type="text"
                                        className={`form-control ${touched.lastName && errors.lastName ? 'is-invalid' : ''}`}
                                        placeholder="Enter your last name"
                                    />
                                    {touched.lastName && errors.lastName && (
                                        <div className="invalid-feedback">{errors.lastName}</div>
                                    )}
                                </Form.Group>

                                <Form.Group controlId="email" className="mt-3">
                                    <Form.Label>Email</Form.Label>
                                    <Field
                                        name="email"
                                        type="email"
                                        className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                                        placeholder="Enter your email"
                                    />
                                    {touched.email && errors.email && (
                                        <div className="invalid-feedback">{errors.email}</div>
                                    )}
                                </Form.Group>

                                <Form.Group controlId="phone" className="mt-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Field
                                        name="phone"
                                        type="text"
                                        className={`form-control ${touched.phone && errors.phone ? 'is-invalid' : ''}`}
                                        placeholder="Enter your phone number"
                                    />
                                    {touched.phone && errors.phone && (
                                        <div className="invalid-feedback">{errors.phone}</div>
                                    )}
                                </Form.Group>

                                <Form.Group controlId="course" className="mt-3">
                                    <Form.Label>Course / Standard</Form.Label>
                                    <Field
                                        name="course"
                                        as="input"
                                        className="form-control"
                                        value={courseDetails.data.course || courseDetails.data.standard}
                                        readOnly
                                    />
                                </Form.Group>

                                <Form.Group controlId="fees" className="mt-3">
                                    <Form.Label>Fees</Form.Label>
                                    <Field
                                        name="fees"
                                        as="input"
                                        className="form-control"
                                        value={fees}
                                        readOnly
                                    />
                                </Form.Group>

                                <Form.Group controlId="message" className="mt-3">
                                    <Form.Label>Message</Form.Label>
                                    <Field
                                        name="message"
                                        as="textarea"
                                        className={`form-control ${touched.message && errors.message ? 'is-invalid' : ''}`}
                                        placeholder="Write a message or cover letter"
                                        rows="4"
                                    />
                                    {touched.message && errors.message && (
                                        <div className="invalid-feedback">{errors.message}</div>
                                    )}
                                </Form.Group>

                                {/* Show a loader when the form is submitting */}
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="mt-4"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                </Button>
                            </FormikForm>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
        </Container>
        </>
    );
}

export default ApplyForm;
