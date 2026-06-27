import React, { useState } from 'react';
import contact from "./images1/contact.png";

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    const tokenFromLogin = localStorage.getItem('token'); // Get token from localStorage
  
    // Check if token exists
    if (!tokenFromLogin) {
      alert('Please log in or sign up to send a message!');
      setIsLoading(false);
      return;
    }
  
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenFromLogin}`,
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }
  
      alert(result.message);
      // Clear form after submit
      setFormData({
        fullname: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(error.message || 'Failed to submit form');
    } finally {
      setIsLoading(false);
    }
  };
  const pageStyle = {
  minHeight: "100vh",
  backgroundImage: `linear-gradient(rgba(255,255,255,.78), rgba(255,255,255,.78)), url(${contact})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "80px 20px",
};

const formStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.88)",
  padding: "35px",
  borderRadius: "18px",
  width: "100%",
  maxWidth: "460px",
  boxShadow: "0 12px 35px rgba(0, 0, 0, 0.18)",
  fontFamily: "Arial, sans-serif",
  border: "1px solid rgba(212, 175, 55, 0.45)",
};

const inputStyle = {
  width: "100%",
  padding: "13px",
  marginBottom: "16px",
  border: "1px solid #d6c7a1",
  borderRadius: "8px",
  fontSize: "16px",
  outline: "none",
  backgroundColor: "rgba(255,255,255,.95)",
};

const buttonStyle = {
  width: "100%",
  padding: "13px",
  backgroundColor: "#111",
  color: "#d4af37",
  border: "1px solid #d4af37",
  borderRadius: "40px",
  fontSize: "16px",
  fontWeight: "700",
  cursor: "pointer",
  letterSpacing: "1px",
};

return (
  <section style={pageStyle}>
    <div className="App" style={formStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "10px", color: "#111" }}>
        Contact Us
      </h2>

      <p
        style={{
          textAlign: "center",
          marginBottom: "25px",
          fontSize: "15px",
          color: "#555",
        }}
      >
        Have a question about our hair bundles, wigs, frontals, or products?
        Send us a message and we’ll contact you shortly.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          style={inputStyle}
          name="fullname"
          placeholder="Full Name"
          value={formData.fullname}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          style={inputStyle}
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          style={inputStyle}
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          style={{ ...inputStyle, height: "120px", resize: "vertical" }}
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" style={buttonStyle} disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  </section>
);
};
