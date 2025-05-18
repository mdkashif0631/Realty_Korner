// // import React from 'react'
// import React, { useState } from 'react';
// import "./filterForm.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//     Container, Row, Col, Form, Button, Dropdown, DropdownButton
// } from 'react-bootstrap';

// const FilterForm = () => {
//     const [formData, setFormData] = useState({
//       address: '',
//       country: '',
//       state: '',
//       city: '',
//       neighborhood: '',
//       status: '',
//       type: '',
//       label: '',
//       sortBy: 'Date Descending',
//       bedrooms: [1, 6],
//       bathrooms: [1, 4],
//       area: [3, 2030],
//       price: [570, 56000],
//       features: {
//         airConditioning: false,
//         kitchen: false,
//         barbeque: false,
//         laundry: false,
//         cableTV: false,
//         swimmingPool: false,
//         dryer: false,
//         wifi: false
//       }
//     });
  
//     const handleCheckboxChange = (e) => {
//       setFormData({
//         ...formData,
//         features: {
//           ...formData.features,
//           [e.target.name]: e.target.checked
//         }
//       });
//     };    return (
//         <div className='filterForm'>
//             <Container className="p-4 bg-light">
//                 <h2>Customer Requirement</h2>
//                 <Row className="mb-3">
//                     <Col md={4}>
//                         <Form.Control
//                             placeholder="Enter an address, city, ZIP or property ID"
//                             value={formData.address}
//                             onChange={(e) => setFormData({ ...formData, address: e.target.value })}
//                         />
//                     </Col>
//                     <Col md={2}>
//                         <Form.Select>
//                             <option>- Country -</option>
//                             <option>USA</option>
//                             <option>Canada</option>
//                         </Form.Select>
//                     </Col>
//                     <Col md={2}>
//                         <Form.Select>
//                             <option>- County/State -</option>
//                         </Form.Select>
//                     </Col>
//                     <Col md={2}>
//                         <Form.Select>
//                             <option>- City -</option>
//                         </Form.Select>
//                     </Col>
//                     <Col md={2}>
//                         <Form.Select>
//                             <option>- Neighborhood -</option>
//                         </Form.Select>
//                     </Col>
//                 </Row>

//                 <Row className="mb-3">
//                     <Col md={2}><Form.Select><option>- Status -</option></Form.Select></Col>
//                     <Col md={2}><Form.Select><option>- Type -</option></Form.Select></Col>
//                     <Col md={2}><Form.Select><option>- Labels -</option></Form.Select></Col>
//                     <Col md={2}><Form.Select><option>Date Descending</option></Form.Select></Col>
//                 </Row>

//                 <Row className="mb-3">
//                     <Col md={3}>
//                         <Form.Label>Bedrooms: {formData.bedrooms.join(' - ')}</Form.Label>
//                         <Form.Range
//                             min={1} max={6}
//                             value={formData.bedrooms[1]}
//                             onChange={(e) =>
//                                 setFormData({ ...formData, bedrooms: [1, parseInt(e.target.value)] })
//                             }
//                         />
//                     </Col>

//                     <Col md={3}>
//                         <Form.Label>Bathrooms: {formData.bathrooms.join(' - ')}</Form.Label>
//                         <Form.Range
//                             min={1} max={4}
//                             value={formData.bathrooms[1]}
//                             onChange={(e) =>
//                                 setFormData({ ...formData, bathrooms: [1, parseInt(e.target.value)] })
//                             }
//                         />
//                     </Col>

//                     <Col md={3}>
//                         <Form.Label>Area size: {formData.area.join(' - ')}</Form.Label>
//                         <Form.Range
//                             min={3} max={2030}
//                             value={formData.area[1]}
//                             onChange={(e) =>
//                                 setFormData({ ...formData, area: [3, parseInt(e.target.value)] })
//                             }
//                         />
//                     </Col>

//                     <Col md={3}>
//                         <Form.Label>Price: {formData.price.join(' - ')}</Form.Label>
//                         <Form.Range
//                             min={570} max={56000}
//                             value={formData.price[1]}
//                             onChange={(e) =>
//                                 setFormData({ ...formData, price: [570, parseInt(e.target.value)] })
//                             }
//                         />
//                     </Col>
//                 </Row>

//                 <Row className="mb-3">
//                     {[
//                         { name: 'airConditioning', label: 'Air Conditioning' },
//                         { name: 'kitchen', label: 'Kitchen' },
//                         { name: 'barbeque', label: 'Barbeque' },
//                         { name: 'laundry', label: 'Laundry' },
//                         { name: 'cableTV', label: 'Cable TV' },
//                         { name: 'swimmingPool', label: 'Swimming Pool' },
//                         { name: 'dryer', label: 'Dryer' },
//                         { name: 'wifi', label: 'Wi-Fi' },
//                     ].map((feature) => (
//                         <Col md={3} key={feature.name}>
//                             <Form.Check
//                                 type="checkbox"
//                                 label={feature.label}
//                                 name={feature.name}
//                                 checked={formData.features[feature.name]}
//                                 onChange={handleCheckboxChange}
//                             />
//                         </Col>
//                     ))}
//                 </Row>

//                 <Row>
//                     <Col>
//                         <Button variant="danger">Search</Button>
//                     </Col>
//                 </Row>
//             </Container>

//         </div>
//     )
// }

// export default FilterForm
