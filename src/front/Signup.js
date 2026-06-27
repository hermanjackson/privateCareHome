import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import login from "./images1/login.png"; // Change the path if yours is different
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
    <div style={styles.container}>
  <div style={styles.formCard}>
    <h2 style={styles.heading}>Create Your Account</h2>

    <p style={styles.subheading}>
      Join us today and discover premium hair bundles,
      wigs, and luxury beauty products.
    </p>

    <form onSubmit={handleSignup} style={styles.form}>

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

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        style={styles.input}
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        style={styles.input}
      />

      <button
        type="submit"
        style={styles.button}
        onMouseEnter={(e) => {
          e.target.style.background = "#c9a35d";
          e.target.style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "transparent";
          e.target.style.color = "#2b1a10";
        }}
      >
        Create Account
      </button>

    </form>

    {message && <p style={styles.message}>{message}</p>}

    <div style={styles.links}>
      <Link to="/Login" style={styles.linkButton}>
        Already have an account? Sign In
      </Link>
    </div>
  </div>
</div>
)
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

  formCard: {
    width: "100%",
    maxWidth: "430px",
    background: "transparent",
    padding: "40px",
    textAlign: "center",
  },

  heading: {
    fontSize: "2.8rem",
    color: "#2b1a10",
    fontWeight: "700",
    marginBottom: "10px",
  },

  subheading: {
    color: "#5f4630",
    fontSize: "16px",
    lineHeight: "1.8",
    marginBottom: "30px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  input: {
    width: "100%",
    padding: "15px",
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
    fontSize: "17px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all .3s ease",
  },

  message: {
    marginTop: "20px",
    color: "#2e7d32",
    background: "rgba(255,255,255,.8)",
    border: "1px solid #2e7d32",
    borderRadius: "8px",
    padding: "12px",
    fontWeight: "600",
  },

  links: {
    marginTop: "25px",
  },

  linkButton: {
    color: "#2b1a10",
    textDecoration: "none",
    fontWeight: "600",
    transition: ".3s",
  },
};

export default Signup;
