/* <!-- Christian Bocanegra - Student N° 301374226 -->*/
import Footer from './layout/Footer'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {    
  const history = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    history.push('/');
  };

    return (
        <div id="root">
          <main>
          <h1>Contact Me</h1>
          <div className="contact-info">
            <p><strong>Email:</strong> christianmbp95@gmail.com</p>
            <p><strong>Phone:</strong> (437) 551-3979</p>
            <p>If you have questions or need to contact me, please fill out the following form:</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number:</label>
              <input type="tel" name="contactNumber" id="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea name="message" id="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn-contact">Send Message</button>
          </form>

          </main>
          <Footer />
        </div>
      );
};

export default Contact;