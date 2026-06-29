import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import login from "./images1/logins.png";
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
  <div style={styles.container}>
    <div style={styles.form}>
      <h2 style={styles.title}>Welcome Back</h2>

      <p style={styles.subtitle}>
        Sign in to access your account and continue shopping our luxury hair
        collections.
      </p>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email Address"
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

        <button
  type="submit"
  style={styles.button}
  disabled={isLoading}
  onMouseEnter={(e) => {
    e.target.style.background = "#c9a35d";
    e.target.style.color = "#fff";
  }}
  onMouseLeave={(e) => {
    e.target.style.background = "transparent";
    e.target.style.color = "#2b1a10";
  }}
>
  {isLoading ? "Signing In..." : "Sign In"}
</button>
      </form>

      <div style={styles.links}>
        <Link to="/ForgotPassword" style={styles.linkButton}>
          Forgot Password?
        </Link>

        <Link to="/Signup" style={styles.linkButton}>
          Create Account
        </Link>
      </div>
    </div>
  </div>
);
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundImage: `linear-gradient(rgba(35,25,15,.25), rgba(35,25,15,.25)), url(${login})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "20px",
  },

  form: {
    width: "100%",
    maxWidth: "420px",
    background: "transparent",      // Invisible form
    padding: "40px",
    border: "none",
    boxShadow: "none",
    textAlign: "center",
  },

  title: {
    fontSize: "3rem",
    color: "#2b1a10",
    fontWeight: "700",
    marginBottom: "10px",
    letterSpacing: "1px",
  },

  subtitle: {
    color: "#5f4630",
    marginBottom: "35px",
    lineHeight: "1.8",
    fontSize: "16px",
  },

  input: {
    width: "100%",
    padding: "15px",
    marginBottom: "18px",
    borderRadius: "8px",
    border: "1px solid #c9a35d",
    background: "rgba(255,248,238,.75)",
    color: "#2b1a10",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box",
  },

  button: {
    width: "100%",
    padding: "15px",
    background: "transparent",
    color: "#2b1a10",
    border: "2px solid #c9a35d",
    borderRadius: "40px",
    fontWeight: "600",
    fontSize: "17px",
    cursor: "pointer",
    transition: "all .3s ease",
  },

  error: {
    color: "#b22222",
    marginBottom: "15px",
    fontWeight: "600",
  },

  links: {
    marginTop: "25px",
    display: "flex",
    justifyContent: "space-between",
  },

  linkButton: {
    color: "#2b1a10",
    textDecoration: "none",
    fontWeight: "600",
    transition: ".3s",
  },
};

export default Login;