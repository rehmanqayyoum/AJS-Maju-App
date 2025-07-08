import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import TrustImage from "../../assets/images/img_5.png";
import RequestButton from '../RequestButton';

export default function TrustSection() {

    return (
        <section className="section-padding trust-section bg-light">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <img src={TrustImage} alt="Our Team" className="img-fluid team-image" />
                    </Col>
                    <Col lg={6}>
                        <h2 className="mb-4">
                            Your Trusted Cleaning Partner Ready For Hire
                        </h2>
                        <p className="mb-4 lead">
                            Managing a clean workplace doesn’t have to take up your time or energy. Whether you’re running a corporate office, educational institution, or commercial space, we’re ready to support you with reliable, cost-effective cleaning. Join the many businesses that already trust AJS Maju to keep their spaces clean, compliant, and client-ready.
                        </p>
                        <RequestButton />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
