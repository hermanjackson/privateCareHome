import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = ({ token }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
  
    const handleResetPassword = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/ResetPassword/${token}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ password }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          setMessage(data.message);
        } else {
          setError(data.message || 'Password reset failed');
        }
      } catch (err) {
        setError('An error occurred');
        console.error(err);
      }
    };
  
    return (
      <div>
        <h2>Reset Password</h2>
        <form onSubmit={handleResetPassword}>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {message && <p>{message}</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Reset Password</button>
        </form>
      </div>
    );
  };
export default ResetPassword;