import React, { useEffect, useState } from 'react';
import './EnquiryList.css';

const BASE_URL = process.env.REACT_APP_API_URL;

const EnquiryList = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const res = await fetch(`${BASE_URL}/enquiries`);
        const data = await res.json();

        if (res.ok) {
          setEnquiries(data);
        } else {
          setError(data.error || 'Failed to load enquiries');
        }
      } catch (err) {
        console.error('Error fetching enquiries:', err);
        setError('Server error. Please try again later.');
      }
    };

    fetchEnquiries();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Enquiries</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {enquiries.length === 0 && !error && <p>No enquiries found.</p>}
      <ul>
        {enquiries.map((enquiry) => (
          <li key={enquiry._id} style={{ marginBottom: '1.5rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
            <p><strong>Project:</strong> {enquiry.Project_Name}</p>
            <p><strong>Name:</strong> {enquiry.fullName}</p>
            <p><strong>Email:</strong> {enquiry.email}</p>
            <p><strong>Phone:</strong> {enquiry.phone_number}</p>
            <p><strong>Message:</strong> {enquiry.message}</p>
            <p><small><strong>Date:</strong> {new Date(enquiry.createdAt).toLocaleString()}</small></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnquiryList;
