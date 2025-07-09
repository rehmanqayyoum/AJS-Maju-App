import React, { useState, useRef } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { toast } from "react-toastify";

export default function RequestButton() {
  const [show, setShow] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    building_type: "",
    services_type: "",
    cleaner_no: "",
    name: "",
    email: "",
    phone: "",
    company_name: "",
    location: "",
    message: "",
  });

  const servicesWithoutCleaners = [
    "Initial/After Construction Cleaning",
    "Carpet & Upholstery Cleaning",
    "Floor Scrubbing & Polishing",
    "External Facade Cleaning",
    "Waste Disposal",
  ];

  const isCleanerRequired = !servicesWithoutCleaners.includes(
    formData.services_type
  );

  const handleClose = () => {
    setShow(false);
    setFormData({
      building_type: "",
      services_type: "",
      cleaner_no: "",
      name: "",
      email: "",
      phone: "",
      company_name: "",
      location: "",
      message: "",
    });
    setCaptchaToken(null);
    if (recaptchaRef.current) recaptchaRef.current.reset();
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    // auto-clear cleaner_no if not required
    if (id === "services_type") {
      const needsCleaners = !servicesWithoutCleaners.includes(value);
      setFormData((prev) => ({
        ...prev,
        [id]: value,
        cleaner_no: needsCleaners ? prev.cleaner_no : "", // clear if not required
      }));
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const { building_type, services_type, name, email, phone } = formData;

    if (!building_type || !services_type || !name || !email || !phone) {
      toast.error("Please fill all required fields!");
      return;
    }

    if (isCleanerRequired && !formData.cleaner_no) {
      toast.error("Please enter number of cleaners.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^\+?\d{10,15}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid phone number (10-15 digits).");
      return;
    }

    if (!captchaToken) {
      toast.error("Please verify you're not a robot.");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:5000/api/submit-quotation", {
        ...formData,
        captcha: captchaToken,
      });
      toast.success("Quotation submitted!");
      handleClose();
    } catch (err) {
      console.error(err);
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Button variant="primary" className="rounded-pill px-4 quote-btn" onClick={() => setShow(true)} > Request a Quote </Button>

      <Modal show={show} onHide={handleClose} size="xl" centered className="request-modal" >
        <Modal.Header closeButton>
          <Modal.Title className="text-primary fw-bold w-100 text-center">
            Request for Quote
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="bg-light p-4">
          <Form onSubmit={handleSubmit}>
            <Row className="g-4">
              <Col md={4}>
                <Form.Group controlId="building_type">
                  <Form.Label>Building Type</Form.Label>
                  <Form.Select required onChange={handleChange}>
                    <option value="">Select...</option>
                    <option>Office</option>
                    <option>Warehouse</option>
                    <option>Business Centre</option>
                    <option>Complex/Mall</option>
                    <option>Factory</option>
                    <option>Hotel</option>
                    <option>Condominium</option>
                    <option>University</option>
                    <option>School</option>
                    <option>Hospital</option>
                    <option>Tower</option>
                    <option>Shop Lots</option>
                    <option>Theme Park</option>
                    <option>Car Park</option>
                    <option>Hostel</option>
                    <option>Others</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group controlId="services_type">
                  <Form.Label>Type of Services</Form.Label>
                  <Form.Select required onChange={handleChange}>
                    <option value="">Select...</option>
                    <option value="Supply Contract Cleaner">
                      Supply Contract Cleaner
                    </option>
                    <option value="Office Cleaning & Tea Lady Services">
                      Office Cleaning & Tea Lady Services
                    </option>
                    <option value="Initial/After Construction Cleaning">
                      Initial/After Construction Cleaning
                    </option>
                    <option value="Carpet & Upholstery Cleaning">
                      Carpet & Upholstery Cleaning
                    </option>
                    <option value="Floor Scrubbing & Polishing">
                      Floor Scrubbing & Polishing
                    </option>
                    <option value="External Facade Cleaning">
                      External Facade Cleaning
                    </option>
                    <option value="Landscaping Service">
                      Landscaping Service
                    </option>
                    <option value="Maintenance Cleaning">
                      Maintenance Cleaning
                    </option>
                    <option value="Waste Disposal">Waste Disposal</option>
                    <option value="Corporate Office Cleaning">
                      Corporate Office Cleaning
                    </option>
                    <option value="Cleaning Service">Cleaning Service</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              {isCleanerRequired && (
                <Col md={4}>
                  <Form.Group controlId="cleaner_no">
                    <Form.Label>No of Cleaners</Form.Label>
                    <Form.Control
                      type="number"
                      min="1"
                      placeholder="e.g. 3"
                      required={isCleanerRequired}
                      value={formData.cleaner_no}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              )}

              <Col md={4}>
                <Form.Group controlId="name">
                  <Form.Label>Name*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your name"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group controlId="email">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="your@email.com"
                    required
                    onChange={handleChange}
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
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="company_name">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Optional"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="location">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City or address"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Any additional details..."
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={12} className="d-flex justify-content-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Lcoan0rAAAAADbHKNmQyP9WXsXfI7jP2AbfE8Cw"
                  onChange={handleCaptchaChange}
                />
              </Col>

              <Col md={12} className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  className="px-5 mt-2 rounded-pill fw-bold"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
