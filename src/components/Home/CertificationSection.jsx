import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";

export default function CertificationSection() {

    const certificates = [
        {
            image: "/src/assets/images/certificates/certificate1.png",
            name: "Certificate 1",
        },
        {
            image: "/src/assets/images/certificates/certificate2.png",
            name: "Certificate 2",
        },
        {
            image: "/src/assets/images/certificates/certificate3.png",
            name: "Certificate 3",
        }
    ]

    return (
        <section id='certifications' className="section-padding certifications-sec">
            <Container>
                <Row>
                    <Col lg={12} className="text-center mb-5">
                        <h2 className="">
                            Fully Certified & 100% Compliant. We're Committed to <br />
                            <span className="text-primary-custom">Getting It Right</span>
                        </h2>
                        <p className="lead">
                            Our certifications and compliance ensure you receive the highest quality service
                        </p>
                        <h5 className="fw-bold mb-3">Our Certifications</h5>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    {certificates.map((certificate, index) => (
                        <Col key={index} lg={4} md={6} className="text-center mb-4">
                            <Card className="certificate-card h-100 border-0 rounded-4">
                                <Card.Img className="rounded-3 mb-4 certificate-img" src={certificate.image} alt={certificate.name} />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}
