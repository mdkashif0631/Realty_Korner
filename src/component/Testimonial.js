import React from 'react'
import { Carousel, Card, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import TrumpLogo from '../img/TrumpLogo.jpg';
// import Elan from '../img/elaan.png';
// import Elan01 from '../img/elaan01.png';
// import Elanlogo from '../img/elaanlogo.png';
import './testimonial.css'


const clientes = [
    {
        image: '../img/TrumpLogo.jpg',
        name: "Kashif",
        sign:"md kashif",
        feedBack: "We use innovative and strategic methods to ensure that our clients get higher returns for their real estate investments. We studyWe use innovative and strategic methods to ensure that our clients get higher returns for their real estate investments. We study We use innovative and strategic methods to ensure that our clients get higher returns for their real estate investments. We study We use innovative and strategic methods to ensure that our clients get higher returns for their real estate investments. We study  the evolving market trends and suggest customized solutions pertaining to the chosen location for investment.",
    },
    {
        image: '../img/elaan.png',
        name: "Kashif",
        sign:"md kashif",
        feedBack: "We use innovative and strategic methods to ensure that our clients get higher returns for their real estate investments. We studyWe use innovative and strategic methods to ensure that our clients get higher returns for their real estate investments. We study We use innovative and strategic methods to ensure that our clients get higher returns for their real estate investments. We study We use innovative and strategic methods to ensure that our clients get higher returns for their real estate investments. We study  the evolving market trends and suggest customized solutions pertaining to the chosen location for investment",
    },
    {
        image: "../img/elaan01.png",
        name: "Kashif",
        sign:"md kashif",
        feedBack: "We use innovative and strategic methods to ensure that our clients get higher returns for their real estate investments. We studyWe use innovative and strategic methods to ensure that our clients get higher returns for their real estate investments. We study We use innovative and strategic methods to ensure that our clients get higher returns for their real estate investments. We study We use innovative and strategic methods to ensure that our clients get higher returns for their real estate investments. We study  the evolving market trends and suggest customized solutions pertaining to the chosen location for investment",
    },
    {
        image: "../img/TrumpLogo.jpg",
        name: "Kashif",
        sign:"md kashif",
        feedBack: "We use innovative and strategic methods to ensure that our clients get higher returns for their real estate investments. We studyWe use innovative and strategic methods to ensure that our clients get higher returns for their real estate investments. We study We use innovative and strategic methods to ensure that our clients get higher returns for their real estate investments. We study We use innovative and strategic methods to ensure that our clients get higher returns for their real estate investments. We study  the evolving market trends and suggest customized solutions pertaining to the chosen location for investment",
    },
    {
        image: "../img/elaanlogo.png",
        name: "Kashif",
        sign:"md kashif",
        feedBack: "We use innovative and strategic methods to ensure that our clients get higher returns for their real estate investments. We studyWe use innovative and strategic methods to ensure that our clients get higher returns for their real estate investments. We study We use innovative and strategic methods to ensure that our clients get higher returns for their real estate investments. We study We use innovative and strategic methods to ensure that our clients get higher returns for their real estate investments. We study  the evolving market trends and suggest customized solutions pertaining to the chosen location for investment",
    },
]


const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const TestimonialCard = ({ client }) => (
    <Card className="testimonial_card">
        <Card.Body>
            <p className="mb-1 text-muted" style={{ fontSize: "12px", fontWeight: "600" }}>
               {client.feedBack}
            </p>
        </Card.Body>
        <div className='client_img_name  w-100'>
            <Card.Img className='card_img' variant="top" src={client.image} />
            <div className='name_sign'>
                <Card.Title style={{ color: "#2763ff", fontSize: "20px" }}>{client.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "12px" }}>{client.sign}</Card.Subtitle>
            </div>
        </div>
    </Card>
);

const Testimonial = () => {
    const grouped = chunkArray(clientes, 1);
    return (
        <div className='w-100 d-flex justify-content-center'>
        <div className='testimonial_card_container'>
            <h5>Testimonials</h5>
            <h1>We're Proud of Our Work</h1>
            <div style={{ width: "90%", margin: "0 auto" }}>
                <Carousel controls={grouped.length > 1} indicators={false} interval={3000}>
                    {grouped.map((group, idx) => (
                        <Carousel.Item key={idx}>
                            <Container className="my-1 p-4">
                                <Row className='d-flex justify-content-center' style={{width: "100%"}}>
                                    {group.map((client, i) => (
                                        <Col key={i} sm={8}>
                                            <TestimonialCard client={client} />
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
        </div>

    );
};

export default Testimonial
