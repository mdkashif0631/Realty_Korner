import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminPanel.css';

const AdminPanel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/adminloginpage');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the auth token
    // navigate('/adminloginpage');
    window.location.reload('/adminloginpage');  // Redirect to home page
 // Redirect to login page
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <div className="admin-buttons">
        <Link to="/addproperty" className="admin-button">
          Add New Property
        </Link>
        <Link to="/enquirylist" className="admin-button">
          View Enquiries
        </Link>
        <button onClick={handleLogout} className="admin-button logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
