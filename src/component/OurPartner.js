import React, { useEffect, useState } from 'react';
import { Carousel, Card, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ourpartner.css';

const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};

const BASE_URL = process.env.REACT_APP_API_URL;

const OurPartnerCard = ({ partner }) => (
    <Card className="partner_card">
        <img className='partnerCard_img' src= {partner.Developer_Logo ? `${partner.Developer_Logo}` : '/img/elaanlogo.png'} alt='logo' />
    </Card>
);

const OurPartner = () => {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/properties`) 
            .then(res => res.json())
            .then(data => setPartners(data))
            .catch(err => console.error("Error fetching partners:", err));
    }, []);

    const grouped = chunkArray(partners, 5);

    return (
        <div className='w-100 d-flex flex-column my-5 mx-auto'>
            <h1 className='text-center pb-2'>Our Esteemed Partner</h1>
            <div className='ourPartner_card_container w-80'>
                <div style={{ width: "100%", margin: "0 auto" }}>
                    <Carousel controls={grouped.length > 1} indicators={false} interval={null}>
                        {grouped.map((group, idx) => (
                            <Carousel.Item key={idx}>
                                <Container className="my-1">
                                    <Row className='d-flex justify-content-center w-100'>
                                        {group.map((partner, i) => (
                                            <div className='partner_logo' key={i}>
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
    );
};

export default OurPartner;
