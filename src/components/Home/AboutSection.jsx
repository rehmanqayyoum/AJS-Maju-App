import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import TeamImage from "../../assets/images/img_4.png";
import TeamImageMob from "../../assets/images/team_img_mob.png";

const AboutSection = () => {
    const features = [
        {
            class: "cloud-1",
            bgImage: "/src/assets/images/layers/why-choose-1.png",
            title: "Tailored, Cost-Effective Solutions",
            subtitle: "Our services are designed to meet your unique needs while ensuring cost-effective solutions for your business.",
            icon: "/src/assets/images/icons/tailored-solutions.png"
        },
        {
            class: "cloud-2",
            bgImage: "/src/assets/images/layers/why-choose-2.png",
            title: "Fast & Reliable Service",
            subtitle: "Need cleaning on short notice? We’re always ready to provide timely service, no matter the size or urgency of your facility.",
            icon: "/src/assets/images/icons/fast-service.png"
        },
        {
            class: "cloud-3",
            bgImage: "/src/assets/images/layers/why-choose-3.png",
            title: "Fully Legal & 100% Compliant",
            subtitle: "We provide legal, fully-vetted workforce to give you peace of mind, ensuring compliance and professionalism at every step.",
            icon: "/src/assets/images/icons/legal-compliant.png"
        },
        {
            class: "cloud-4",
            bgImage: "/src/assets/images/layers/why-choose-4.png",
            title: "Cutting-Edge Technology",
            subtitle: "We offer real-time updates, cleaning reports, and use of high-tech machines like auto-cleaning robots and ride-on scrubbers.",
            icon: "/src/assets/images/icons/edge-technology.png"
        }
    ];

    return (
        <section id='about' className="section-padding bg-white text-center why-choose-section pb-md-0">
            <Container>
                <h2 className="mb-5">Why Choose Us</h2>
                <Row className="align-items-end position-relative justify-content-center">
                    <Col md={12} lg={4} className="">
                        <div className="d-flex flex-column align-items-end gap-4 cloud mb-5">
                            {features.slice(0, 2).map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`why-feature-box ${item.class}`}
                                    style={{ backgroundImage: `url(${item.bgImage})` }}
                                >
                                    <div className="icon-box mb-2">
                                        <img src={item.icon} alt={item.title} className="icon" />
                                    </div>
                                    <h6 className="fw-bold">{item.title}</h6>
                                    <p className="text-muted small">{item.subtitle}</p>
                                </div>
                            ))}
                        </div>
                    </Col>

                    {/* Center Image On Web View */}
                    <Col md={12} lg={4} className="center-col d-none d-lg-block">
                        <img
                            src={TeamImage}
                            alt="Team"
                            className="img-fluid"
                            style={{ maxWidth: "320px" }}
                        />
                    </Col>
                    {/* Center Image On Mob View */}
                    <Col md={12} lg={4} className="center-col d-block d-lg-none text-center">
                        <img
                            src={TeamImageMob}
                            alt="Team"
                            className="img-fluid"
                            style={{ maxWidth: "320px" }}
                        />
                    </Col>

                    <Col md={12} lg={4} className="">
                        <div className="d-flex flex-column align-items-start gap-4 cloud mb-5">
                            {features.slice(2).map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`why-feature-box ${item.class}`}
                                    style={{ backgroundImage: `url(${item.bgImage})` }}
                                >
                                    <div className="icon-box mb-2">
                                        <img src={item.icon} alt={item.title} className="icon" />
                                    </div>
                                    <h6 className="fw-bold">{item.title}</h6>
                                    <p className="text-muted small">{item.subtitle}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutSection;