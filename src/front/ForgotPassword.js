import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';

export const ForgotPassword = () => {
  return (
    <div className="login-container">
      <h2>Forgot Password</h2>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" placeholder="Enter your registered email" />
        </div>
        <button type="submit" className="btn btn-primary">Reset Password</button>
      </form>
      <div className="login-links">
        <Link to="/login">Back to Login</Link>
      </div>
    </div>
  );
};

  