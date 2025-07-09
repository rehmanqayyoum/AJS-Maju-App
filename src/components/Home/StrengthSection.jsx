import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import strengthBg from "../../assets/images/strength-bg-scale.png";

export default function StrengthSection() {
    const strengthStyle = {
        backgroundImage: `url(${strengthBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingBottom: 250
    }

    return (
        <section className="section-padding bg-primary text-white position-relative strength-sec" style={strengthStyle}>
            <Container>
                <Row>
                    <Col lg={12} className="text-center mb-5">
                        <h2 className="">Company Strength</h2>
                        <p className="lead">Backed by robust resources, a skilled workforce, and state-of-the-art machinery, AJS Maju is equipped to deliver top-tier cleaning and maintenance services.</p>
                    </Col>
                </Row>
                <Row className="justify-content-center pb-5">
                    <Col xxl={3} lg={4} md={6} className="text-center">
                        <div className="stats-card scale-effect mb-4 bg-white rounded-4 p-3">
                            <h2 className="display-5 fw-bold text-black">1,000,000</h2>
                            <p className="text-secondary stats-type fw-semibold m-0">Paid-Up Capital</p>
                        </div>
                    </Col>
                    <Col xxl={3} lg={4} md={6} className="text-center">
                        <div className="stats-card scale-effect mb-4 bg-secondary rounded-4 p-3">
                            <h2 className="display-5 fw-bold text-white">750</h2>
                            <p className="text-white stats-type fw-semibold m-0">Man Power</p>
                        </div>
                    </Col>
                    <Col xxl={3} lg={4} md={6} className="text-center">
                        <div className="stats-card scale-effect mb-4 bg-secondary-dark rounded-4 p-3">
                            <h2 className="display-5 fw-bold text-secondary">1,220 units</h2>
                            <p className="text-white stats-type fw-semibold m-0">Total Machinery</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
