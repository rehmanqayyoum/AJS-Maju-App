import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha';

export default function RequestButton() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement form submission logic (e.g., API call)
        handleClose();
    };

    return (
        <>
            <Button
                variant="primary"
                className="rounded-pill px-4 quote-btn"
                onClick={handleShow} >
                Request a Quote
            </Button>

            <Modal show={show} onHide={handleClose} size="xl" centered className='request-modal z-9'>
                <Modal.Header closeButton>
                    <Modal.Title className="text-primary fw-bold w-100 text-center">
                        Request for Quote
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className="bg-light p-4">
                    <Form onSubmit={handleSubmit}>
                        <Row className="g-4">
                            <Col md={4}>
                                <Form.Group controlId="buildingType">
                                    <Form.Label>Building Type</Form.Label>
                                    <Form.Select required>
                                        <option value="">Select...</option>
                                        <option>Office</option>
                                        <option>Warehouse</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col md={4}>
                                <Form.Group controlId="serviceType">
                                    <Form.Label>Type of Services</Form.Label>
                                    <Form.Select required>
                                        <option value="">Select...</option>
                                        <option>General Cleaning</option>
                                        <option>Deep Cleaning</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col md={4}>
                                <Form.Group controlId="cleanerCount">
                                    <Form.Label>No of Cleaners</Form.Label>
                                    <Form.Control
                                        type="number"
                                        min="1"
                                        placeholder="e.g. 3"
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={4}>
                                <Form.Group controlId="fullName">
                                    <Form.Label>Name*</Form.Label>
                                    <Form.Control type="text" placeholder="Your name" required />
                                </Form.Group>
                            </Col>

                            <Col md={4}>
                                <Form.Group controlId="email">
                                    <Form.Label>Email*</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={4}>
                                <Form.Group controlId="phone">
                                    <Form.Label>Phone*</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        placeholder="Phone number"
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group controlId="company">
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control type="text" placeholder="Optional" />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group controlId="location">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control type="text" placeholder="City or address" />
                                </Form.Group>
                            </Col>

                            <Col md={12}>
                                <Form.Group controlId="message">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Any additional details..."
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={12} className="d-flex justify-content-center">
                                <ReCAPTCHA sitekey="your-recaptcha-site-key" />
                            </Col>

                            <Col md={12} className="text-center">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="px-5 mt-2 rounded-pill fw-bold"
                                >
                                    Send
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}
