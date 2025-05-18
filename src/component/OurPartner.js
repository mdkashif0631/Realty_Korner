import React from 'react'
import { Carousel, Card, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ourpartner.css';
import TrumpLogo from '../img/TrumpLogo.jpg';
import Elan from '../img/elaan.png';
import Elan01 from '../img/elaan01.png';
import Elanlogo from '../img/elaanlogo.png';


const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};

const partners = [
    {
        image: TrumpLogo,
    },
    {
        image: Elan,
    },
    {
        image: Elan01,
    },
    {
        image: TrumpLogo,
    },
    {
        image: Elanlogo,
    },
    {
        image: Elan01,
    },
    {
        image: TrumpLogo,
    },
    {
        image: Elanlogo,
    },
    {
        image: Elan,
    },
    {
        image: Elan01,
    },
    {
        image: TrumpLogo,
    },
    {
        image: Elanlogo,
    },
    {
        image: Elan01,
    },
    {
        image: TrumpLogo,
    },
    {
        image: Elanlogo,
    },
    {
        image: Elan,
    },
    {
        image: Elan01,
    },
    {
        image: TrumpLogo,
    },
    {
        image: Elanlogo,
    },
    {
        image: Elan01,
    },
    {
        image: TrumpLogo,
    },
    {
        image: Elanlogo,
    },
    {
        image: Elan,
    },
    {
        image: Elan01,
    },
    {
        image: TrumpLogo,
    },
    {
        image: Elanlogo,
    },
    {
        image: Elan01,
    },
    {
        image: TrumpLogo,
    },
    {
        image: Elanlogo,
    }
]

const OurPartnerCard = ({ partner }) => (
    <Card className="partner_card mb-4">
        <img className='partnerCard_img' variant="top" src={partner.image} alt='loho' />
    </Card>
);

const OurPartner = () => {
    const grouped = chunkArray(partners, 5);
    return (
        <div className='w-100 d-flex flex-column my-3 mx-auto'>
            <h1 className='text-center pb-2'>We're Proud of Our Work</h1>
            <div className='ourPartner_card_container w-80'>
                <div style={{ width: "100%", margin: "0 auto" }}>
                    <Carousel controls={grouped.length > 1} indicators={false} interval={null}>
                        {grouped.map((group, idx) => (
                            <Carousel.Item key={idx}>
                                <Container className="my-1">
                                    <Row className='d-flex justify-content-center w-100' style={{ width: "100%" }}>
                                        {group.map((partner, i) => (
                                            <div className='partner_logo' key={i} md={3}>
                                                <OurPartnerCard partner={partner} />
                                            </div>
                                        ))}
                                    </Row>
                                </Container>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default OurPartner
