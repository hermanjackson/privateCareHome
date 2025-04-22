import React , { useState } from 'react'

export const Contact = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/Contact`, {
           
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "Authorization": `Bearer ${tokenFromLogin}`
            },
            body: JSON.stringify(formData)
           
          });
    
          const result = await response.json();
          alert(result.message);
        } catch (error) {
          console.error('Error submitting form:', error);
          if (error.response) {
            console.error('Backend response:', error.response.data);
          }
          alert('Failed to submit form');
        }
      };
      const formStyle = {
        backgroundColor: '#f8f9fa',
        padding: '30px',
        borderRadius: '12px',
        width: '400px',
        margin: '50px auto',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif'
      };
    
      const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '6px',
        fontSize: '16px'
      };
    
      const buttonStyle = {
        width: '100%',
        padding: '12px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        fontSize: '16px',
        cursor: 'pointer'
      };
    
      return (
      <div className="App" style={formStyle}>
    <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Contact Form</h2>
    <p style={{ textAlign: 'center', marginBottom: '20px', fontSize: '14px', color: '#555' }}>
      An advisor will contact you shortly after you submit the form.
    </p>
    <form onSubmit={handleSubmit}>
      <input type="text" style={inputStyle} name="fullname" placeholder="Full Name" value={formData.fullname} onChange={handleChange} required />
      <input type="email" style={inputStyle} name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="tel" style={inputStyle} name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
      <textarea name="message"  style={{ ...inputStyle, height: '100px', resize: 'vertical' }} placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
      <button type="submit" style={buttonStyle}>Send</button>
    </form>
    
  </div>
      );
}
