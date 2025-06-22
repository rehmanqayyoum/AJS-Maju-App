import React from 'react';
import { Container, Row, Col, Accordion } from "react-bootstrap";

export default function FAQSection() {
    const faqs = [
        {
            question: "What types of businesses do you serve?",
            answer:
                "We provide cleaning and maintenance services for all types of businesses, including corporate offices, factories, retail spaces, and more. Our services are tailored to meet the specific needs of your facility.",
        },
        {
            question: "How often do you provide cleaning services?",
            answer:
                "We provide flexible scheduling options including daily, weekly, bi-weekly, and monthly cleaning services based on your needs.",
        },
        {
            question: "Are your cleaning products safe and eco-friendly?",
            answer:
                "Yes, we use environmentally friendly and non-toxic cleaning products that are safe for your employees and the environment.",
        },
        {
            question: "Do you provide cleaning supplies and equipment?",
            answer:
                "Yes, we bring all necessary cleaning supplies and professional-grade equipment to ensure the best results.",
        },
        {
            question: "How do you ensure quality control?",
            answer:
                "We have a comprehensive quality control system with regular inspections and customer feedback to maintain high standards.",
        },
    ];

    return (
        <section className="section-padding faq-section">
            <Container>
                <Row>
                    <Col lg={12} className="text-center mb-5">
                        <h2 className="display-5 fw-bold text-primary">Frequently Asked Questions</h2>
                        <p className="text-muted">We're here to help you with the information you need about our services.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8} className="mx-auto">
                        <Accordion defaultActiveKey="0" className="faq-accordion">
                            {faqs.map((faq, index) => (
                                <Accordion.Item
                                    eventKey={index.toString()}
                                    key={index}
                                    className="mb-3 shadow-sm border-0"
                                >
                                    <Accordion.Header className="fw-bold text-dark">{faq.question}</Accordion.Header>
                                    <Accordion.Body className="text-muted">{faq.answer}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
