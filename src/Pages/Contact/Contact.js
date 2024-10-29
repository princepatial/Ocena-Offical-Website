import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    if (!form.name) {
      newErrors.name = 'Name is required.';
    }

    // Email validation: Should not be empty and should end with @gmail.com
    if (!form.email) {
      newErrors.email = 'Email is required.';
    } else if (!form.email.endsWith('@gmail.com')) {
      newErrors.email = 'Email must end with @gmail.com.';
    }

    // Phone validation: Should not be empty and should only contain numbers
    if (!form.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required.';
    } else if (!/^\d+$/.test(form.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must only contain digits.'; // Checks for digits only
    }

    if (!form.subject) {
      newErrors.subject = 'Subject is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Log the request payload
        console.log('Sending data:', form);
  
        const response = await axios.post('https://ocena-backend2.onrender.com/contact-info-user', form, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          // Add timeout to prevent hanging requests
          timeout: 10000,
        });
  
        console.log('Response status:', response.status);
        console.log('Response data:', response.data);
        
        setSuccessMessage('Thank you for submitting the data! We will contact you soon.');
        setForm({ name: '', phoneNumber: '', email: '', subject: '', message: '' }); // Corrected `phone` to `phoneNumber`
        setTimeout(() => setSuccessMessage(''), 2000);
      } catch (error) {
        console.error('Detailed error:', {
          message: error.message,
          response: error.response,
          status: error.response?.status,
          data: error.response?.data
        });
  
        let errorMessage = 'An error occurred while submitting the form. ';
        if (error.response) {
          errorMessage += `Server responded with: ${error.response.status} - ${JSON.stringify(error.response.data)}`;
        } else if (error.request) {
          errorMessage += 'No response received from server. Please check your connection.';
        } else {
          errorMessage += error.message;
        }
        
        setErrors({ submit: errorMessage });
      }
    }
  };

  return (
    <div className='contact-container'>
        <div className='btn-contact'>
            <button className='btn-bttn'>Get in Touch</button>
        </div>
        <div className='work'>
            <h1>Let's Start Working <br/> Together</h1>
        </div>
        <div className='contact-form'>
  <div className='flex-container'>
    <div className='left-contact'>
      <h1>Contact Information</h1>
      <p>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="icon-location">
    <path d="M8 0a6 6 0 0 1 6 6c0 5.25-6 10-6 10S2 11.25 2 6a6 6 0 0 1 6-6zm0 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
  </svg>
  Mohali, Punjab, India
</p>

<p>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="icon-phone">
    <path d="M3.654 1.328a.678.678 0 0 1 .558-.296h2.674a.678.678 0 0 1 .655.553l.391 1.958c.05.249-.007.512-.156.705l-1.007 1.311a1.745 1.745 0 0 0-.356 1.15c.032.304.116.6.25.872.15.3.369.594.637.856.268.263.559.491.862.675.291.175.624.316.98.422l1.578-.395a.678.678 0 0 1 .742.325l1.12 1.954a.678.678 0 0 1-.186.888l-1.519 1.146a2.445 2.445 0 0 1-2.727.333c-1.612-.801-3.226-1.998-4.688-3.518C.5 7.991-.547 4.587 2.228 2.005a2.445 2.445 0 0 1 1.426-.677z"/>
  </svg>
  +91-8476912345
</p>

<p>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="icon-email">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 0v1.2L8 8.6l6-3.4V4H2zm12 8V6.6L8 10.2 2 6.6V12h12z"/>
  </svg>
  hr@ocena.in
</p>

    </div>

    <div className='google-map'>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1714.1965057630762!2d76.62054859067982!3d30.763547243738884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffbfdee9110d5%3A0xff40102bd5ab506b!2sOcena%20smart%20solutions!5e0!3m2!1sen!2sin!4v1728037556102!5m2!1sen!2sin"
      width="400"
      height="250"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title='map'
    ></iframe>
  </div>
  </div>

  <div className='divider'>   </div> {/* Divider Line */}


  <div className='right-contact'>
  <h1>Contact Us</h1>
  <>
    <form onSubmit={handleSubmit}>
      <div className='form-grid'>
        <div className='form-group'>
          <label htmlFor='name'>Your Name</label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={handleForm}
            value={form.name}
          />
          {errors.name && <p className='error'>{errors.name}</p>}
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={handleForm}
            value={form.email}
          />
          {errors.email && <p className='error'>{errors.email}</p>}
        </div>

        <div className='form-group'>
          <label htmlFor='phone'>Phone Number</label>
          <input
            type='tel'
            id='phoneNumber'
            name='phoneNumber'
            onChange={handleForm}
            value={form.phoneNumber}
          />
          {errors.phoneNumber && <p className='error'>{errors.phoneNumber}</p>}
        </div>

        <div className='form-group'>
          <label htmlFor='subject'>Subject</label>
          <input
            type='text'
            id='subject'
            name='subject'
            onChange={handleForm}
            value={form.subject} 
          />
          {errors.subject && <p className='error'>{errors.subject}</p>}
        </div>

        <div className='form-group'>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            onChange={handleForm}
            value={form.message}
          ></textarea>
        </div>

        <div className='form-group'>
          <button id='submit-btn' type='submit'>Send Now</button>
        </div>
      </div>

      {/* Show success message after form submission */}
      {successMessage && (
        <div className='success-message'>
          {successMessage}
        </div>
      )}
    </form>
  </>
</div>
</div>
</div>


  )
}

export default Contact
