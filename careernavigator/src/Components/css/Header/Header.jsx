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
                            {/* <nav className="navbar navbar-expand-lg">
                                    <div className="container-fluid">
                                        <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon text-white"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li className="nav-item">
                                                    <a className="nav-link active" aria-current="page"
                                                        href="javascript:void(0)">Home</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="javascript:void(0)">About</a>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link" href="javascript:void(0)">
                                                        <span className="me-2">Blog</span>
                                                        <i className="fa-solid fa-plus"></i>
                                                    </a>
                                                    <ul className="menu-dropdown">
                                                        <li>
                                                            <a href="#">Blog Listing</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">No Thumbnail</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Simple Style</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Blog Details</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="javascript:void(0)">Services</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="javascript:void(0)">Pages</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="javascript:void(0)">Contact Us</a>
                                                </li>
                                                <div className="slide"></div>
                                            </ul>
                                        </div>
                                    </div>
                                </nav> */}
                            <Navbar expand="lg">
                                <Container fluid>
                                    <Navbar.Toggle aria-controls="navbarScroll" />
                                    <Navbar.Collapse id="navbarScroll">
                                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                                            <Link to="/" className='nav-link'>Home</Link>
                                            <Nav.Link className='nav-link'>About</Nav.Link>
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
                                                        <a href="#">Blog Listing</a>
                                                    </li><hr />
                                                    <li>
                                                        <a href="#">No Thumbnail</a>
                                                    </li><hr />
                                                    <li>
                                                        <a href="#">Simple Style</a>
                                                    </li><hr />
                                                    <li>
                                                        <a href="#">Blog Details</a>
                                                    </li>
                                                </ul>
                                            </Nav.Link>
                                            <Link to="/services" className='nav-link'>Services</Link>
                                            <Nav.Link className='nav-link pagesDropdown'>
                                                <span className='me-2'>Pages</span>
                                                <i className="fa-solid fa-plus"></i>
                                                <ul className="pagesMenu-dropdown">
                                                    <li>
                                                        <a href="#">Careers</a>
                                                    </li><hr />
                                                    <li>
                                                        <a href="#">Case Studies</a>
                                                    </li><hr />
                                                    <li>
                                                        <a href="#">Events</a>
                                                    </li><hr />
                                                    <li>
                                                        <a href="#">Frequent QA's</a>
                                                    </li><hr />
                                                    <li>
                                                        <a href="#">Our Team</a>
                                                    </li><hr />
                                                    <li>
                                                        <Link to="/pricing">Pricing Plans</Link>
                                                    </li><hr />
                                                    <li>
                                                        <a href="#">404 Error Page</a>
                                                    </li>
                                                </ul>
                                            </Nav.Link>
                                            <Link to="contactUs" className='nav-link'>Contact Us</Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>

                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                            <div className="get-started-btn">
                                <a type="button" href="#" className="btn1">
                                    <span>Get Started</span>
                                    <div className="box">
                                        <div className="arrow-cross">
                                            <i className="fa-solid fa-arrow-up"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;