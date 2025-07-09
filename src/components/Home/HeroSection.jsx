import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import RequestButton from '../RequestButton';
import HeroBgWeb from '../../assets/images/hero-bg-scale.png';
import HeroBgMobile from '../../assets/images/layers/hero-bg-mobile.png';

export default function HeroSection() {

    const heroStyle = {
        backgroundImage: `url(${HeroBgWeb})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative',
        paddingTop: 100,
        backgroundColor: '#E0EFF6'
    };

    return (
        <section id='home' className="hero-section" style={heroStyle}>
            <div className="hero-overlay">
                <div className='content'>
                    <Container>
                        <Row className="align-items-center py-xl-5 pt-5 pb-0">
                            <Col xl={5} lg={9} sm={12}>
                                <h1 className="mb-4 text-dark hero-title">
                                    Your Commercial
                                    <br />
                                    <span className='text-primary'>Cleaning Expert</span>
                                </h1>
                                <p className="lead mb-4">
                                    With more than 10 years of experience, we provide reliable, high-quality cleaning services for offices, factories, hospitals and more. Get well-trained, fully-legal cleaners at cost-effective rates for your business today.
                                </p>
                                <RequestButton />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="position-relative d-xl-none">
                    <img src={HeroBgMobile} alt="Cleaning Expert" className="img-fluid" />
                </div>
            </div>
        </section>
    );
}
