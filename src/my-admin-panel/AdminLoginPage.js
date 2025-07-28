// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLoginPage.css'; // Optional styling

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded admin credentials (for now)
    const validAdminId = 'Kashif123';
    const validPassword = 'Gaya123';

    if (adminId === validAdminId && password === validPassword) {
      localStorage.setItem('token01', 'admin-token'); // Simulated token
      navigate('/adminpanel');
      window.location.reload('/adminpanel');
    } else {
      setError('Incorrect Admin ID or Password');
    }
  };

  return (
    <div className="login-page">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Admin ID"
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLoginPage;
