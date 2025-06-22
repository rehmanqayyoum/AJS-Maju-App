import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import RequestButton from '../RequestButton';

export default function HeroSection() {

    const heroStyle = {
        backgroundImage: "url('/src/assets/images/hero-bg-scale.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative',
        paddingTop: 100,
    };

    return (
        <section id='home' className="hero-section" style={heroStyle}>
            <div className="hero-overlay">
                <Container>
                    <Row className="align-items-center py-5">
                        <Col lg={5} sm={12}>
                            <h1 className="display-4 fw-bold mb-4 text-dark hero-title">
                                Your Commercial
                                <br />
                                <span className='text-primary'>Cleaning Expert</span>
                            </h1>
                            <p className="lead mb-4 text-muted">
                                With more than 10 years of experience, we provide reliable, high-quality cleaning services for offices, factories, hospitals and more. Get well-trained, fully-legal cleaners at cost-effective rates for your business today.
                            </p>
                            <RequestButton />
                        </Col>
                        <Col lg={7}>
                            {/* <div className="position-relative">
                                <img
                                    src="/images/cleaning-hero.jpg"
                                    alt="Cleaning Expert"
                                    className="img-fluid rounded-3 shadow"
                                />
                            </div> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}
