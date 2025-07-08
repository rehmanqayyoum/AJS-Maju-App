import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaMapMarkerAlt
} from 'react-icons/fa';
import Logo from "../assets/images/logos/logo.svg";
import { TbPhoneCall } from 'react-icons/tb';
import { LuMail } from 'react-icons/lu';

export default function Footer() {
    const footerSecStyle = {
        backgroundImage: "url('/src/assets/images/layers/footer-layer.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: 330,
    };

    return (
        <footer className="footer bg-light" id='footer' style={footerSecStyle}>
            <Container>
                <Row className="text-start text-md-left footer-links">
                    <Col md={3} className="mb-4">
                        <a href="#"><img src={Logo} alt="AJS Maju Logo" width={140} className="mb-3" /></a>
                        <p className="text-muted">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam.
                        </p>
                        <div className="d-flex gap-3">
                            <a href="" className="text-white bg-primary rounded-pill social-icon"><FaFacebookF /></a>
                            <a href="https://www.linkedin.com/company/ajsmaju/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-white bg-primary rounded-pill social-icon"><FaLinkedinIn /></a>
                            <a href="https://www.instagram.com/ajsmaju/" target="_blank" rel="noopener noreferrer" className="text-white bg-primary rounded-pill social-icon"><FaInstagram /></a>
                        </div>
                    </Col>

                    <Col md={2} className="mb-4">
                        <h6 className="fw-bold text-primary">QUICK LINKS</h6>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="text-muted text-decoration-none anchor-hover fw-semibold">Home</a></li>
                            <li><a href="#services" className="text-muted text-decoration-none anchor-hover fw-semibold">Services</a></li>
                            <li><a href="#certifications" className="text-muted text-decoration-none anchor-hover fw-semibold">Certifications</a></li>
                            <li><a href="#about" className="text-muted text-decoration-none anchor-hover fw-semibold">About Us</a></li>
                        </ul>
                    </Col>

                    <Col md={3} className="mb-4">
                        <h6 className="fw-bold text-primary">CONTACT</h6>
                        <div className="d-flex align-items-center mb-2">
                            <TbPhoneCall className="me-2" />
                            <a href="tel:0383224411" className="text-muted text-decoration-none"> 03-8322 4411 </a>
                        </div>
                        <div className="d-flex align-items-center">
                            <LuMail className="me-2" />
                            <a href="mailto:info@ajsmaju.com" className="text-muted text-decoration-none">
                                info@ajsmaju.com
                            </a>
                        </div>
                    </Col>

                    <Col md={4} className="mb-4">
                        <h6 className="fw-bold text-primary">LOCATION</h6>
                        <p className="text-muted">
                            <FaMapMarkerAlt className="me-2" />
                            Unit L1-05, Aras 1, CoPlace 5, Blok 3710,<br />
                            Persiaran APEC, Cyber 8, 63000, Cyberjaya, Selangor.
                        </p>
                    </Col>
                </Row>
            </Container>

            <div className="copyrights bg-primary">
                <Container>
                    <Row className="py-4">
                        <Col md={6} className="text-white small">
                            © 2025 by AJS Maju Services Sdn Bhd. All rights reserved.
                        </Col>
                        <Col md={6} className="text-md-end text-white small">
                            <a href="#" className="text-white text-decoration-none me-3">Privacy Policy</a>
                            <a href="#" className="text-white text-decoration-none">Terms & Conditions</a>
                        </Col>
                    </Row>
                </Container>
            </div>

        </footer>
    );
}
