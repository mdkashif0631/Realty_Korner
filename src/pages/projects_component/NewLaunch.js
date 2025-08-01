import React, { useEffect, useState } from 'react';
import './css-all-project.css';
import { Carousel, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropertyCardTemplate from '../../PropertyCard/PropertyCardTemplate';


const BASE_URL = process.env.REACT_APP_API_URL;


const NewLaunch = ({ project }) => {
    const [chunked, setChunked] = useState([]);
    
        useEffect(() => {
            if (!project?.Project_type) return;


        let endpoint = '';
        if (project.Project_type === 'Commercial') {
            endpoint = '/commercialproperties';
        } else if (project.Project_type === 'Plot') {
            endpoint = '/plotproperties';
        } else {
            endpoint = '/properties';
        }

        fetch(`${BASE_URL}${endpoint}`) // Update if backend URL changes
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(item => item.Project_type === project.Project_type &&
                    item.Project_status === "New Launch"
                );
                const chunks = [];
                for (let i = 0; i < filtered.length; i += 4) {
                    chunks.push(filtered.slice(i, i + 4));
                }
                setChunked(chunks);
            })
            .catch(err => console.error("Error fetching properties:", err));
    }, [project.Project_type]);
    
  return (
    <div>
      <div className='project-container'>
            <div className='project-box'>
                <div className='project-header'>
                    <h2>
                        New Launch {project?.Project_type || ""} Property
                    </h2>
                </div>
                <Carousel controls={chunked.length > 1} indicators={false} interval={null}>
                    {chunked.map((group, idx) => (
                        <Carousel.Item key={idx}>
                            <div className="my-1 stickerback p-4">
                                <Row>
                                    {group.map((property, i) => (
                                        <Col key={i} xs={12} sm={6} md={3}>
                                            <PropertyCardTemplate property={property} />
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    </div>
  )
}

export default NewLaunch
