import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import TeamImage from "../../assets/images/img_7_new.png";
import RequestButton from '../RequestButton';
import c01 from '../../assets/images/clients/c01.png';
import c02 from '../../assets/images/clients/c02.png';
import c03 from '../../assets/images/clients/c03.png';
import c04 from '../../assets/images/clients/c04.png';
import c05 from '../../assets/images/clients/c05.png';
import c06 from '../../assets/images/clients/c06.png';
import c07 from '../../assets/images/clients/c07.png';
import c08 from '../../assets/images/clients/c08.png';
import c09 from '../../assets/images/clients/c09.png';
import c10 from '../../assets/images/clients/c10.png';
import c11 from '../../assets/images/clients/c11.png';


export default function ClientSection() {
    const clients = [
        { name: "Client 1", logo: c01 },
        { name: "Client 2", logo: c02 },
        { name: "Client 3", logo: c03 },
        { name: "Client 4", logo: c04 },
        { name: "Client 5", logo: c05 },
        { name: "Client 6", logo: c06 },
        { name: "Client 7", logo: c07 },
        { name: "Client 8", logo: c08 },
        { name: "Client 9", logo: c09 },
        { name: "Client 10", logo: c10 },
        { name: "Client 11", logo: c11 },
    ];

    const scrollingClients = [...clients, ...clients];

    return (
        <section className="section-padding clients-section">
            <Container fluid>
                <Row>
                    <Col lg={12} className="text-center mb-5">
                        <h2 className="fw-bold">Proud Clients</h2>
                        <p className="lead m-0">
                            From top leading companies to growing SMEs, we’ve served diverse clientele across the country.
                        </p>
                    </Col>
                </Row>

                <div className="logo-slider-wrapper mb-5">
                    <div className="logo-slider-track">
                        {scrollingClients.map((client, index) => (
                            <div className="logo-slide" key={index}>
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="client-logo"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            <div className='mb-5'>
                <Container>
                    <Row>
                        <Col lg={12} className="mx-auto text-center">
                            <div className='bg-primary rounded-3 text-white shadow px-3 py-5'>
                                <h2 className="mb-4">Keeping Your Premises Clean Shouldn't Be A Hassle</h2>
                                <p className="lead">
                                    Managing multiple cleaning needs in-house or through the wrong provider can quickly turn into a daily hassle. Every space has different cleaning demands. Office floors, washrooms, lobbies, even backrooms, and meeting all of them perfectly, day after day, is no small task.
                                </p>
                                <p className="lead">
                                    Without the right provider, you’re left juggling cleaner schedules, sourcing supplies, or fixing what wasn’t done right. You need a cleaning team that understands your needs, adapts to your schedule, and leaves your workplace spotless every time… no reminders, no compromises.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="mb-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <img src={TeamImage} alt="Our Team" className="img-fluid team-image" />
                        </Col>
                        <Col lg={6}>
                            <h2 className="fw-bold mb-4">
                                We Keep Your Workplace Clean, Safe & Client-Ready Every Day
                            </h2>
                            <p className="lead mb-4">
                                Our professional team of trained cleaning experts ensures your workplace maintains the highest standards
                                of cleanliness and hygiene. We work around your schedule to provide consistent, reliable service that
                                keeps your business running smoothly.
                            </p>
                            <RequestButton />
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}
