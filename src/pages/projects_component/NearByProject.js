import React, { useEffect, useState } from 'react';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropertyCardTemplate from '../../PropertyCard/PropertyCardTemplate';

const BASE_URL = process.env.REACT_APP_API_URL;

const NearByProject = ({ project }) => {
    const [chunked, setChunked] = useState([]);
    const [allProjects, setAllProjects] = useState([]);
    const [cardsPerSlide, setCardsPerSlide] = useState(getCardsPerSlide(window.innerWidth));

    // ✅ Helper to normalize strings
    const normalize = (str) => str?.toLowerCase().trim();

    // ✅ Get number of cards per slide based on screen width
    function getCardsPerSlide(width) {
        if (width < 730) return 1;
        if (width < 1090) return 2;
        return 3;
    }

    // ✅ Fetch projects of same type & location
    useEffect(() => {
        if (!project?.Project_type || (!project?.Location && project?.Project_Name) ) return;

        let endpoint = '';
        if (project.Project_type === 'Commercial') {
            endpoint = '/commercialproperties';
        } else if (project.Project_type === 'Plot') {
            endpoint = '/plotproperties';
        } else {
            endpoint = '/properties';
        }

        fetch(`${BASE_URL}${endpoint}`)
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(item =>
                    item.Project_type === project.Project_type &&
                    (item.Project_Name !== project.Project_Name &&
                    normalize(item.Location) === normalize(project.Location))
                );
                setAllProjects(filtered);
                chunkProjects(filtered, cardsPerSlide);
            })
            .catch(err => console.error("Error fetching properties:", err));
    }, [project.Project_type, project.Project_Name, project.Location, cardsPerSlide]);

    // ✅ Handle window resize for responsive layout
    useEffect(() => {
        const handleResize = () => {
            const currentCards = getCardsPerSlide(window.innerWidth);
            setCardsPerSlide(currentCards);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // ✅ Re-chunk on data change or slide count change
    useEffect(() => {
        if (allProjects.length > 0) {
            chunkProjects(allProjects, cardsPerSlide);
        }
    }, [allProjects, cardsPerSlide]);

    // ✅ Utility to chunk array into groups
    const chunkProjects = (projects, size) => {
        const chunks = [];
        for (let i = 0; i < projects.length; i += size) {
            chunks.push(projects.slice(i, i + size));
        }
        setChunked(chunks);
    };

    return (
        <div className='near-by-project-container'>
            <div className='near-by-project-box'>
                {chunked.length === 0 ? (
                    <p className="text-center mt-4">No nearby projects found in this location.</p>
                ) : (
                    <Carousel controls={chunked.length > 1} indicators={false} interval={6000}>
                        {chunked.map((group, idx) => (
                            <Carousel.Item key={idx}>
                                <Container className="mt-2 stickerback">
                                    <Row>
                                        {group.map((property, i) => (
                                            <Col key={i} xs={12} sm={12 / cardsPerSlide}>
                                                <PropertyCardTemplate property={property} />
                                            </Col>
                                        ))}
                                    </Row>
                                </Container>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                )}
            </div>
        </div>
    );
};

export default NearByProject;
