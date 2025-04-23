import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isValidEmail = /\S+@\S+\.\S+/;
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!isValidEmail.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }if (error) {
      document.querySelector('input[type="email"]').focus();
    }
    setIsLoading(true); // Disable the button while loading
  
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/ForgotPassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setMessage('Check your inbox for a password reset link!');
      } else {
        setError(data.message || 'Password reset failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false); // Re-enable the button after loading
    }
  };
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Forgot Your Password?</h2>
      <p style={styles.subheading}>Enter your email below and check your inbox for a reset link.</p>
      <form onSubmit={handleForgotPassword} style={styles.form}>
      <label htmlFor="email" style={styles.label}>Email Address</label>
        <input
          type="email"
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        {message && <p style={styles.message}>{message}</p>}
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button} disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  label: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#333',
    textAlign: 'left',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  subheading: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    outline: 'none',
    width: '100%',
  },
  message: {
  color: 'green',
  fontSize: '14px',
  padding: '10px',
  border: '1px solid green',
  borderRadius: '5px',
  backgroundColor: '#e8f8e8',
  },
  error: {
  color: 'red',
  fontSize: '14px',
  padding: '10px',
  border: '1px solid red',
  borderRadius: '5px',
  backgroundColor: '#f8d7da',
  },
  button: {
    padding: '14px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default ForgotPassword;