import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords don't match!");
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, confirmPassword , password, phone }),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Signup successful!');
        setTimeout(() => history.push('/Login'), 2000); // Redirect after 2 seconds
      } else {
        setMessage(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup Error:', error);
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="login-container" style={styles.container}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup} style={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>

      {message && <p style={styles.message}>{message}</p>}

      <div style={styles.links}>
        <Link to="/Login" style={styles.linkButton}>Already have an account? Log In</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '30px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '10px',
    fontSize: '14px',
  },
  links: {
    marginTop: '15px',
  },
  linkButton: {
    backgroundColor: 'transparent',
    color: '#007bff',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
};

export default Signup;
