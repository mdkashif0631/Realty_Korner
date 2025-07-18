import { useState, useEffect } from 'react';

const BASE_URL = process.env.REACT_APP_API_URL;

const EnquiryForm = ({ project }) => {
  const [formData, setFormData] = useState({
    Project_Name: '',
    fullName: '',
    email: '',
    phone_number: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Update Project_Name if project prop changes
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      Project_Name: project?.Project_Name || '',
    }));
  }, [project]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { Project_Name, fullName, email, phone_number, message } = formData;

    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Project_Name, fullName, email, phone_number, message }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Enquiry form submitted successfully!');
        setFormData({
          Project_Name: project?.Project_Name || '',
          fullName: '',
          email: '',
          phone_number: '',
          message: '',
        });
      } else {
        setError(data.error || 'Enquiry form submission failed.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {error && <p className="error" style={{ color: 'red' }}>{error}</p>}

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="phone_number"
        placeholder="Phone Number"
        value={formData.phone_number}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        rows="5"
        required
      ></textarea>

      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'SUBMIT'}
      </button>
    </form>
  );
};

export default EnquiryForm;
