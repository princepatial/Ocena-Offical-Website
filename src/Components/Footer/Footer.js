import React, {useState} from 'react'
import axios from 'axios';
import './Footer.css'

const Footer = () => {
 

  const [form,setForm] = useState({});
  const [message, setMessage] = useState('');

  const handleForm =(e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    });
  }


  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the page from refreshing
  
    try {
      const response = await axios.post('https://ocena-backend2.onrender.com/contact-email', 
        { email: form.email },  // data object
        { headers: { 'Content-Type': 'application/json' } } // headers
      );
      
      // Set success message and reset form
      setMessage('Thank you for subscribing!');
      setForm({ email: '' });
  
      // Clear the message after 1 second
      setTimeout(() => {
        setMessage('');
      }, 1000);
  
      // Log the response data (Axios automatically parses the response)
      console.log(response.data);
  
    } catch (error) {
      console.error('Error sending the email:', error);
    }
  };
  



  return (
    <div className='footer'>
    <div className='left-footer1'>
        <img src='https://ocenass.s3.ap-southeast-2.amazonaws.com/ocenablue.png' alt='footer-icon' className='footer-logo' />
    </div>
    <div className='left-footer'>
        <h2>Contact Us</h2>
        <div className='footer-logos'>
            <a href='https://www.linkedin.com/company/ocena-smart-solutions/about/'><img src='https://ocenass.s3.ap-southeast-2.amazonaws.com/linkedinicon.jpg' alt='linkdin' /></a>
            <a href='https://www.instagram.com/ocenasmartsolutions?igsh=MXZneWVvazJnZ3pvcQ==/'><img src='https://ocenass.s3.ap-southeast-2.amazonaws.com/instagramicon.png' alt='instagram' /></a>
            <a href='https://www.facebook.com/profile.php?id=61555417004965'><img src='https://ocenass.s3.ap-southeast-2.amazonaws.com/fbicon.png' alt='fb' /></a>
            <a href='https://twitter.com/Ocenasolutions'><img src='https://ocenass.s3.ap-southeast-2.amazonaws.com/twittericon.png' alt='twitter' /></a>
            <img src='https://ocenass.s3.ap-southeast-2.amazonaws.com/whatsappicon.png' alt='whatsapp' />
        </div>
        <div className='links'>
            <div className='email-contact'>
                <h2>hr@ocena.in</h2>
            </div>
            <div className='website'>
                <h2>www.ocena.in</h2>
            </div>
        </div>
    </div>
    <div className='newsletter'>
        <h2>Sign Up to Our Newsletter</h2>
        <form onSubmit={handleSubmit} className='newsletter-form'>
          <input type='email' name='email' placeholder='Enter your email' value={form.email} onChange={handleForm} required />
          <button type='submit'>Subscribe</button>
        </form>
        {message  && <p className='thank-you-message'>{message}</p>}
      </div>
</div>


  )
}

export default Footer
