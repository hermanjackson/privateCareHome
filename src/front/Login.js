import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        // Safeguard against non-JSON responses
        const errorData = await response.json().catch(() => null);
        setError(errorData?.error || 'Login failed');
        return;
      }
  
      const data = await response.json();
      localStorage.setItem('token', data.token);
      history.push('/dashboard');
    } catch (err) {
      setError('An error occurred while logging in');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="login-container" style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button} disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <div style={styles.links}>
        <Link to="/ForgotPassword" style={styles.linkButton}>Forgot Password?</Link>
        <Link to="/Signup" style={styles.linkButton}>Sign Up</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f7fa',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    marginBottom: '1rem',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  error: {
    color: 'red',
    fontSize: '0.9rem',
    marginBottom: '10px',
  },
  links: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    textAlign: 'center',
  },
  linkButton: {
    backgroundColor: 'transparent',
    color: '#007bff',
    fontSize: '0.9rem',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};

export default Login;
