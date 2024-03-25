import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // api/server/fetch/axios/HTTPreq  
    try {      
      await sendFormDataToServer(formData);
      setFormSubmitted(true);      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending data:', error);
      //msg:error
    }
  };

  const sendFormDataToServer = async (formData) => {
    // fetch/axios/api/server   
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Data sent to the server:', formData);
        resolve();
      }, 1000);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Contact Us</h2>
      {formSubmitted && <p style={{ color: 'green' }}>Thank you. Your message has been successfully sent!</p>}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
