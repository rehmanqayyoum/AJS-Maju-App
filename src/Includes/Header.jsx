import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button, Row, Col, Offcanvas } from 'react-bootstrap';
import logo from '../assets/images/logo.svg';
import Scrollspy from 'react-scrollspy';
import RequestButton from '../components/RequestButton';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { TbPhoneCall } from 'react-icons/tb';
import { LuMail } from 'react-icons/lu';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setShowMenu(false);


    return (
        <header className={`${scrolled ? 'bg-white header-main scrolled position-fixed' : 'bg-primary header-main'}`}>
            <Container>
                <div className={`bg-primary text-white pt-3 pb-2 announcement-bar ${scrolled ? 'd-none' : ''}`}>
                    <div className="d-flex align-items-center justify-content-lg-end flex-wrap gap-2">
                        <div className="d-flex align-items-center me-3">
                            <TbPhoneCall className="me-2" />
                            <a href="tel:0383224411" className="text-white text-decoration-none">
                                Call for help : 03-8322 4411
                            </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-center me-3">
                            <LuMail className="me-2" />
                            <a href="mailto:info@ajsmaju.com" className="text-white text-decoration-none">
                                info@ajsmaju.com
                            </a>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <a href="" className="text-primary bg-white rounded-pill social-icon">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.linkedin.com/company/ajsmaju/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-primary bg-white rounded-pill social-icon" >
                                <FaLinkedinIn />
                            </a>

                            <a href="https://www.instagram.com/ajsmaju/" target="_blank" rel="noopener noreferrer" className="text-primary bg-white rounded-pill social-icon" >
                                <FaInstagram />
                            </a>

                        </div>
                    </div>
                </div>

                <Navbar bg="white" expand="lg" className={`shadow-sm navbar-row pe-3 py-0 z-1 ${scrolled ? 'navigation-bar' : ''}`}>
                    <Navbar.Brand href="#" className="logo-img">
                        <img src={logo} alt="AJS Logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle onClick={() => setShowMenu(true)} />

                    <Navbar id="main-navbar" className='ms-auto d-none d-lg-flex'>
                        <Scrollspy
                            items={['home', 'services', 'certifications', 'about', 'contact']}
                            currentClassName="active"
                            className="navbar-nav ms-auto me-3"
                            offset={-100} >
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#certifications">Certifications</Nav.Link>
                            <Nav.Link href="#about">About Us</Nav.Link>
                            <Nav.Link href="#footer">Contact Us</Nav.Link>
                        </Scrollspy>

                        <RequestButton />
                    </Navbar>
                </Navbar>

                <Offcanvas show={showMenu} onHide={closeMenu} placement="start" className="custom-offcanvas">
                    <Offcanvas.Body>
                        {/* Logo at top */}
                        <div className="drawer-header mb-4">
                            <img src={logo} alt="AJS Logo" className="drawer-logo" />
                        </div>

                        {/* Navigation Links */}
                        <Nav className="flex-column text-start px-3">
                            <Nav.Link onClick={closeMenu} href="#home" className='anchor-hover fw-semibold'>Home</Nav.Link>
                            <Nav.Link onClick={closeMenu} href="#services" className='anchor-hover fw-semibold'>Services</Nav.Link>
                            <Nav.Link onClick={closeMenu} href="#certifications" className='anchor-hover fw-semibold'>Certifications</Nav.Link>
                            <Nav.Link onClick={closeMenu} href="#about" className='anchor-hover fw-semibold'>About Us</Nav.Link>
                            <Nav.Link onClick={closeMenu} href="#contact" className='anchor-hover fw-semibold'>Contact Us</Nav.Link>
                            {/* CTA Button */}
                            <div className="mt-2">
                                <RequestButton />
                            </div>
                        </Nav>


                        {/* Divider */}
                        <hr className="mt-4 mb-2 mx-3" />

                        {/* Footer Section */}
                        <div className="drawer-footer p-3 text-muted">
                            <div className="gap-2 mb-3">
                                <div className="d-flex align-items-center me-3 text-primary mb-2">
                                    <TbPhoneCall className="me-2" />
                                    <a href="tel:0383224411" className="text-primary text-decoration-none">
                                        03-8322 4411
                                    </a>
                                </div>
                                <div className="d-flex align-items-center me-3 text-primary mb-2">
                                    <LuMail className="me-2" />
                                    <a href="mailto:info@ajsmaju.com" className="text-primary text-decoration-none">
                                        info@ajsmaju.com
                                    </a>
                                </div>
                                <div className="d-flex align-items-center gap-2 mt-3">
                                    <a href="" className="text-white bg-primary rounded-pill social-icon">
                                        <FaFacebookF />
                                    </a>
                                    <a href="https://www.linkedin.com/company/ajsmaju/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-white bg-primary rounded-pill social-icon" >
                                        <FaLinkedinIn />
                                    </a>

                                    <a href="https://www.instagram.com/ajsmaju/" target="_blank" rel="noopener noreferrer" className="text-white bg-primary rounded-pill social-icon" >
                                        <FaInstagram />
                                    </a>

                                </div>
                            </div>
                            <div className='text-start'>&copy; {new Date().getFullYear()} by AJS Maju Services Sdn Bhd.</div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </header>
    )
}

