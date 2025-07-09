import React from 'react';
import Slider from "react-slick";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RequestButton from '../RequestButton';
import bgImage from '../../assets/images/service-bg-scale.png';
import img1 from '../../assets/images/img_1.png';
import img2 from '../../assets/images/img_2.png';
import img3 from '../../assets/images/img_3.png';
import icon1 from '../../assets/images/icons/supply-service.svg';
import icon2 from '../../assets/images/icons/office-service.svg';
import icon3 from '../../assets/images/icons/tea-service.svg';

export default function ServiceSection() {
    const serviceSecStyle = {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingBottom: 250
    };

    const services = [
        {
            title: "Supply Contract Cleaner",
            description: "We provide skilled and reliable contract cleaners tailored to your specific needs, ensuring that your business maintains high standards of cleanliness at all times.",
            image: img1,
            icon: icon1,
        },
        {
            title: "Corporate Office Cleaning",
            description: "Our office cleaning services keep your workplace clean, organized, and professional, helping to create a healthy and welcoming environment for employees and clients.",
            image: img2,
            icon: icon2,
        },
        {
            title: "Tea Lady Services",
            description: "We provide friendly and professional tea lady services, offering beverages, maintaining cleanliness in kitchen areas, and assisting with day-to-day office needs.",
            image: img3,
            icon: icon3,
        },
    ];

    const settings = {
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ]
    };

    return (
        <section id='services' className="services-section section-padding" style={serviceSecStyle}>
            <Container>
                <Row className="text-center mb-5">
                    <Col>
                        <h2 className="text-white">Our Comprehensive Cleaning Services</h2>
                        <p className="lead text-white">Tailored cleaning solutions to keep your premises spotless, safe and welcoming.</p>
                    </Col>
                </Row>

                <Row>
                    <Slider {...settings}>
                        {services.map((service, index) => (
                            <div key={index}>
                                <Card className="services-card h-100 border-0 rounded-4">
                                    <Card.Body className='text-center'>
                                        <Card.Img
                                            variant="top"
                                            className="rounded-3 mb-4"
                                            src={service.image}
                                            alt={service.title}
                                        />
                                        <Card.Title className="h5 fw-bold text-primary">{service.title}</Card.Title>
                                        <Card.Text className="text-muted">{service.description}</Card.Text>
                                        <span className='services-icon rounded-pill shadow'>
                                            <img className='icon-img' alt={service.title} src={service.icon} />
                                        </span>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </Slider>
                </Row>

                <Row>
                    <Col className="text-center mt-3">
                        <RequestButton />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
