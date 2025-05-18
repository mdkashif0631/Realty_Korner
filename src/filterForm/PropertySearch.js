// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Nav, Tab, Form, Button, InputGroup, Row, Col, Badge } from 'react-bootstrap';
// import './PropertySearch.css'

// const PropertySearch = () => {
//     const [activeTab, setActiveTab] = useState('buy');

//     const localities = [
//         'Sohna Road',
//         'Golf Course Road'
//         // 'MG Road',
//         // 'Northern Peripheral Road',
//         // 'Dwarka Expressway',
//         // 'New Gurgaon'
//     ];

//     return (
//         <div className='searchBar'>
//             <Container className='searchContainer'>
//                 <Tab.Container className="tapContainer" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
//                     <Nav variant="tabs" className="justify-content">
//                         <Nav.Item>
//                             <Nav.Link eventKey="buy" className={activeTab === 'buy' ? 'text-danger fw-bold' : ''}>Buy</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link eventKey="rent">Rent</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link eventKey="new-launch">New Launch</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link eventKey="commercial">Commercial</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link eventKey="plots">Plots</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link eventKey="sco">SCO</Nav.Link>
//                         </Nav.Item>
//                     </Nav>
//                 </Tab.Container>

//                 <InputGroup className="mb-2 inputGroup">
//                     <Form.Control
//                         placeholder='Search "Best Properties"'
//                         aria-label="Property Search"
//                         className="rounded-start-pill"
//                     />
//                     <Button variant="danger" className="rounded-end-pill px-4">
//                         🔍 Search
//                     </Button>
//                 </InputGroup>

//                 <Row className="align-items-center">
//                     <Col xs="auto">
//                         <span className="fw-bold">📍 Top Locations:</span>
//                     </Col>
//                     <Col xs="auto">
//                         <Button variant="light" size="sm">←</Button>
//                     </Col>
//                     <Col className="d-flex flex-wrap gap-2">
//                         {localities.map((loc, idx) => (
//                             <Badge key={idx} bg="light" text="dark" className="p-2 rounded-pill border">
//                                 {loc}
//                             </Badge>
//                         ))}
//                     </Col>
//                     <Col xs="auto">
//                         <Button variant="light" size="sm">→</Button>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// };

// export default PropertySearch;
