import React, { useState } from 'react';
import login from "./images1/logins.png"
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
  <div style={styles.form}>
    <h2 style={styles.heading}>Forgot Your Password?</h2>

    <p style={styles.subheading}>
      Enter your email below and we'll send you a secure password reset link.
    </p>

    <form onSubmit={handleForgotPassword} style={styles.formFields}>
      <label htmlFor="email" style={styles.label}>
        Email Address
      </label>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={styles.input}
      />

      {message && <p style={styles.message}>{message}</p>}
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
        {isLoading ? "Sending..." : "Send Reset Link"}
      </button>
    </form>
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
    maxWidth: "430px",
    background: "transparent",
    padding: "40px",
    textAlign: "center",
  },

  heading: {
    fontSize: "2.8rem",
    fontWeight: "700",
    color: "#2b1a10",
    marginBottom: "10px",
  },

  subheading: {
    fontSize: "16px",
    color: "#5f4630",
    marginBottom: "30px",
    lineHeight: "1.8",
  },

  formFields: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  label: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#2b1a10",
    textAlign: "left",
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
    color: "#2e7d32",
    background: "rgba(255,255,255,.8)",
    border: "1px solid #2e7d32",
    borderRadius: "8px",
    padding: "12px",
    fontWeight: "600",
  },

  error: {
    color: "#b22222",
    background: "rgba(255,255,255,.8)",
    border: "1px solid #b22222",
    borderRadius: "8px",
    padding: "12px",
    fontWeight: "600",
  },
};

export default ForgotPassword;