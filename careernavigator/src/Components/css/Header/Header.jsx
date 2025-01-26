import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xl-2">
                            <div className="logo">
                                <h1>Carrer</h1>
                            </div>
                            {/* <img src="./assets/images/home/logo/logo.jpg" alt="Logo" /> */}
                        </div>

                        <div className="col-7">
                            <Navbar expand="lg">
                                <Container fluid>
                                    <Navbar.Toggle aria-controls="navbarScroll" />
                                    <Navbar.Collapse id="navbarScroll">
                                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                                            <Link to="/" className='nav-link'>Home</Link>
                                            <Link to="/about" className='nav-link'>About</Link>
                                            {/* <NavDropdown title="Blog" id="navbarScrollingDropdown">
                                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action4">
                                                    Another action
                                                </NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href="#action5">
                                                    Something else here
                                                </NavDropdown.Item>
                                            </NavDropdown> */}
                                            <Nav.Link className='nav-link dropdown'>
                                                <span className='me-2'>Blog</span>
                                                <i className="fa-solid fa-plus"></i>
                                                <ul className="menu-dropdown">
                                                    <li>
                                                        <Link to="/blog-listing">Blog Listing</Link>
                                                    </li><hr />
                                                    <li>
                                                        <Link to="/no-thumbnail">No Thumbnail</Link>
                                                    </li><hr />
                                                    <li>
                                                        <Link to="/simple-style">Simple Style</Link>
                                                    </li><hr />
                                                    <li>
                                                        <Link to="/blog-details">Blog Details</Link>
                                                    </li>
                                                </ul>
                                            </Nav.Link>
                                            <Link to="/services" className='nav-link'>Services</Link>
                                            <Nav.Link className='nav-link pagesDropdown'>
                                                <span className='me-2'>Pages</span>
                                                <i className="fa-solid fa-plus"></i>
                                                <ul className="pagesMenu-dropdown">
                                                    <li>
                                                        <Link to="/careers">Careers</Link>
                                                    </li><hr />
                                                    <li>
                                                        <Link to="/case-studies">Case Studies</Link>
                                                    </li><hr />
                                                    <li>
                                                        <Link to="/events">Events</Link>
                                                    </li><hr />
                                                    <li>
                                                        <Link to="/faq">Frequent QA's</Link>
                                                    </li><hr />
                                                    <li>
                                                        <Link to="/our-team">Our Team</Link>
                                                    </li><hr />
                                                    <li>
                                                        <Link to="/pricing">Pricing Plans</Link>
                                                    </li><hr />
                                                    <li>
                                                        <Link to="/404">404 Error Page</Link>
                                                    </li>
                                                </ul>
                                            </Nav.Link>
                                            <Link to="/contact-us" className='nav-link'>Contact Us</Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>

                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                            <div className="get-started-btn">
                                <Link to="/get-started" className="btn1">
                                    <span>Get Started</span>
                                    <div className="box">
                                        <div className="arrow-cross">
                                            <i className="fa-solid fa-arrow-up"></i>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
