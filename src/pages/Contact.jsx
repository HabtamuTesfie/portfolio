/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './css/Contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_9nkl4lh',
        'template_xsvac5f',
        { to_email: email, message },
        'e0gy06CzeO43jndV_'
      )
      .then(
        (response) => {
          console.log('Email sent:', response);
          setSuccessMessage('Email sent successfully!');
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error('Error sending email:', error);
          setErrorMessage('Failed to send email. Please try again later.');
        }
      );
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me. You can also use the form below to send me
          an email.
        </p>
        {successMessage && <div className="success">{successMessage}</div>}
        {errorMessage && <div className="error">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
              style={{backgroundColor: 'white', color: 'black'}}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              required
              style={{backgroundColor: 'white', color: 'black'}}
            />
          </div>

          <button style={{backgroundColor: 'green'}} type="submit">Send Email</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
