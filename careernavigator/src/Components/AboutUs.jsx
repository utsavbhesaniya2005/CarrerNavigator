import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './css/AboutUs.css'

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
        <Col lg={3} md={6} sm={12} xm={12} style={{ marginTop: "10vh", padding: "5px" }} >
            <div style={{ borderBottom: "1px solid rgba(103, 98, 98, 0.4)", paddingBottom: "15px", marginBottom: "5vh", width: "98%", display: "flex", alignItems: "center", }} >
                <div className="icon-1 flex" style={{ color: "white", fontSize: "20px" }} >
                    <i className={iconClass}></i>
                </div>
                <span style={{ marginLeft: "7px", fontWeight: "500", fontSize: "20px" }} >
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

const AboutUs = () => {

    const posterRef = useRef(null);

    const videoContentRef = useRef(null);
    
    const playVideo = () => {

        if (posterRef.current && videoContentRef.current) {
            
            posterRef.current.style.display = "none";
            videoContentRef.current.style.display = "block";

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
        <>
            {/* about-bg */}
            <section className="about-bg">
                <div className="mainBg">
                    <div className="colorGradiant">
                        <Container>
                            <div className="Content-txt">
                                <h3
                                    style={{ color: "white", fontSize: "45px", margin: "0px" }}
                                    className="Content-h3"
                                >
                                    About Us
                                </h3>
                                <div className="make-btn">
                                    <span style={{ marginRight: "5px", cursor: "pointer" }}>
                                        <Link to="/" style={{ color: "white" }}>Home</Link>
                                    </span>
                                    <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }} ></i>
                                    <span style={{ marginLeft: "8px" }}>
                                        <Link to="/aboutUs" style={{ color: "white" }}>About Us</Link>
                                    </span>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </section>

            {/* Workplace */}
            <section className="workplace">
                <div style={{ backgroundColor: "var(--body-bg)" }}>
                    <Container style={{ margin: "0px auto", padding: "80px 20px", overflow: "hidden", }} >
                        <Row>
                            <Col className="flex" md={12} lg={12} sm={12} xm={12} style={{ marginBottom: "20px" }} >
                                <div className="emp-expr-2 flex">
                                    <i class="fa-solid fa-arrow-left" style={{ marginRight: "8px" }} ></i>
                                    <p className="tranforming-p">Transforming Workplaces</p>{" "}
                                    <i class="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }} ></i>
                                </div>
                            </Col>
                            <Col md={12} lg={12} sm={12} xm={12} className="flex" style={{ marginBottom: "40px" }} >
                                <div data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" >
                                    <h1 className="video-h1">
                                        Building Better Teams, One Hire
                                        <br /> At A Time
                                    </h1>
                                </div>
                            </Col>
                            <Col md={12} lg={12} sm={12} xm={12} className="flex" style={{ marginBottom: "40px" }} >
                                <div className="video-box">
                                    <div ref={posterRef} className="poster">
                                        <div className="play-button-container" onClick={playVideo}>
                                            <div className="play-button">
                                                <i className="fa fa-play"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div ref={videoContentRef} className="videoContent" style={{ display: "none" }} >
                                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/HAcLoqZO-Z0?si=6rnlKCssRq1-GEPB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
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
                                            <Link type="button" className="read-more">
                                                <div class="box-read-more">
                                                    <div class="arrow-cross-read-more">
                                                        <i class="fa-solid fa-arrow-up read-arrow" style={{ marginLeft: "6px", color: "black" }} ></i>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={6} sm={12} xm={12} className="happy-hiring">
                                <div className="hub_img"></div>
                                <div style={{ fontSize: "17px", fontWeight: "600", letterSpacing: "2px", }} >
                                    <span style={{ fontWeight: "bold", fontSize: "35px" }}>
                                        24,000+
                                    </span>
                                    <br />
                                    Happy Hiring
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            {/* About Counter */}
            <section className="aboutCounter">
                <div className="counter" style={{ backgroundColor: "#D9F1FF" }}>
                    <Container style={{ padding: "80px 10px" }}>
                        <Row>
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                                {data.map((item, index) => (
                                    <PercentageCol key={index} iconClass={item.iconClass} title={item.title} targetPercentage={item.targetPercentage} description={item.description} />
                                ))}
                            </div>
                        </Row>
                    </Container>
                </div>
            </section>

            {/* Smart Solutions */}
            <section className="smartSolutions" style={{ backgroundColor : "white", padding : "100px 0" }}  data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" >
                <Container>
                    <Row>
                        <Col className="col-12">
                            <div className="heading-part d-flex align-items-center flex-column">
                                <div className="heading-subtitle d-flex align-items-center" style={{ padding: "4px 8px", marginBottom: "18px" }}>
                                    <p className="tranforming-p">Smart Solutions for Tomorrow’s Talent</p>{" "}
                                    <i class="fa-solid fa-arrow-right" style={{ marginLeft: "10px" }} ></i>
                                </div>
                                <div className="heading">
                                    <div data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" >
                                        <h1 className="video-h1">
                                            Empowering Organizations To Thrive Through Cutting - Edge HR Technology
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={4} className="mt-5">
                            <div className="solutionFeature">
                                <h2>Our Mission</h2>
                                <p>Tempor dignissim phasellus rutrum mus posuere lacinia neque turpis porttitor sociosqu.</p>
                            </div>
                        </Col>

                        <Col lg={4} md={4} className="mt-5">
                            <div className="solutionFeature">
                                <h2>Our Vision</h2>
                                <p>Rhoncus gravida turpis nunc aliquet tristique sem nascetur dis sagittis facilisis felis.</p>
                            </div>
                        </Col>

                        <Col lg={4} md={4} className="mt-5">
                            <div className="solutionFeature">
                                <h2>Our Core Value</h2>
                                <p>Purus molestie nullam class vivamus erat senectus mus mi. Dis per conubia est eu ligula.</p>
                            </div>
                        </Col>

                        <Col>
                            <div className="call-section d-flex align-items-center mt-5">
                                <div className="get-started-btn">
                                    <Link to="/read-more" className="btn1 readMore">
                                        <span>Read More</span>
                                        <div className="box readMore-box">
                                            <div className="arrow-cross">
                                                <i className="fa-solid fa-arrow-up"></i>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="mno-section ms-5 d-flex align-items-center">
                                    <div className="mno-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{height: '20px', fill : 'white'}}>
                                            <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/>
                                        </svg>
                                    </div>
                                    <div className="mno-content ms-3">
                                        <h3>Call 24hrs / 7 Days</h3>
                                        <h5>000-123-176875</h5>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Parnership */}
            <section className="partnership" style={{ padding: "100px 0",backgroundColor: "#F3FAFF" }}>
                <Container>
                    <Row>
                        <Col className="flex flex-column row-gap-4" md={12} lg={12} sm={12} xm={12} style={{ marginBottom: "20px" }} >
                            <div className="emp-expr-2 flex">
                                <i class="fa-solid fa-arrow-left" style={{ marginRight: "8px" }} ></i>
                                <p className="tranforming-p">Empowering Partnerships</p>{" "}
                                <i class="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }} ></i>
                            </div>
                            <div data-aos="zoom-in-left" data-aos-offset="200" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" >
                                <h1 className="video-h1">
                                    Stronger Together, Thriving Through Collaborative Efforts
                                </h1>
                            </div>
                            <div className="partnership-content">
                                <p>Tempus nisi luctus vitae tristique varius ex curabitur magna quis.</p>
                            </div>
                        </Col>
                    </Row>

                </Container>
                <div className="company-imgs-group" style={{ margin : "0 50p" }}>
                    <Row>
                        <Col>
                            <div className="company-imgs">
                                <span className="company-img-box">
                                    <img src="https://wdthrhub.wpengine.com/wp-content/uploads/2024/10/home3-clientlogo-img-01.png" className="h-100" alt="Company-Image" />
                                </span>
                                <span className="company-img-box">
                                    <img src="https://wdthrhub.wpengine.com/wp-content/uploads/2024/10/home3-clientlogo-img-02.png" className="h-100" alt="Company-Image" />
                                </span>
                                <span className="company-img-box">
                                    <img src="https://wdthrhub.wpengine.com/wp-content/uploads/2024/10/home3-clientlogo-img-08.png" className="h-100" alt="Company-Image" />
                                </span>
                                <span className="company-img-box">
                                    <img src="https://wdthrhub.wpengine.com/wp-content/uploads/2024/10/home3-clientlogo-img-03.png" className="h-100" alt="Company-Image" />
                                </span>
                                <span className="company-img-box">
                                    <img src="https://wdthrhub.wpengine.com/wp-content/uploads/2024/10/home3-clientlogo-img-09.png" className="h-100" alt="Company-Image" />
                                </span>
                                <span className="company-img-box">
                                    <img src="https://wdthrhub.wpengine.com/wp-content/uploads/2024/10/home3-clientlogo-img-10.png" className="h-100" alt="Company-Image" />
                                </span>
                                <span className="company-img-box">
                                    <img src="https://wdthrhub.wpengine.com/wp-content/uploads/2024/10/home3-clientlogo-img-04.png" className="h-100" alt="Company-Image" />
                                </span>
                                <span className="company-img-box">
                                    <img src="https://wdthrhub.wpengine.com/wp-content/uploads/2024/10/home3-clientlogo-img-05.png" className="h-100" alt="Company-Image" />
                                </span>
                                <span className="company-img-box">
                                    <img src="https://wdthrhub.wpengine.com/wp-content/uploads/2024/10/home3-clientlogo-img-07.png" className="h-100" alt="Company-Image" />
                                </span>
                                <span className="company-img-box">
                                    <img src="https://wdthrhub.wpengine.com/wp-content/uploads/2024/10/home3-clientlogo-img-06.png" className="h-100" alt="Company-Image" />
                                </span>
                                <span className="company-img-box">
                                    <img src="https://wdthrhub.wpengine.com/wp-content/uploads/2024/10/home3-clientlogo-img-11.png" className="h-100" alt="Company-Image" />
                                </span>
                                <span className="company-img-box">
                                    <img src="https://wdthrhub.wpengine.com/wp-content/uploads/2024/10/home3-clientlogo-img-13.png" className="h-100" alt="Company-Image" />
                                </span>
                                <span className="company-img-box">
                                    <img src="https://wdthrhub.wpengine.com/wp-content/uploads/2024/10/home3-clientlogo-img-15.png" className="h-100" alt="Company-Image" />
                                </span>
                                <span className="company-img-box">
                                    <img src="https://wdthrhub.wpengine.com/wp-content/uploads/2024/10/home3-clientlogo-img-12.png" className="h-100" alt="Company-Image" />
                                </span>
                                <span className="company-img-box">
                                    <img src="https://wdthrhub.wpengine.com/wp-content/uploads/2024/10/home3-clientlogo-img-14.png" className="h-100" alt="Company-Image" />
                                </span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </> 
    )
}
export default AboutUs;