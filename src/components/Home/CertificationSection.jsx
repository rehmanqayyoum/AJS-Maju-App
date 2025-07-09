import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import certificate_1 from '../../assets/images/certificates/certificate1.png';
import certificate_2 from '../../assets/images/certificates/certificate2.png';
import certificate_3 from '../../assets/images/certificates/certificate3.png';


export default function CertificationSection() {

    const certificates = [
        {
            image: certificate_1,
            name: "Certificate 1",
        },
        {
            image: certificate_2,
            name: "Certificate 2",
        },
        {
            image: certificate_3,
            name: "Certificate 3",
        }
    ];

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
