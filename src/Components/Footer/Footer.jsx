import React, { useState } from 'react';
import './Footer.css';
import logo from '../../assets/logo.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Check if the email is empty
    if (!email.trim()) {
      alert('Please enter your email address.');
      return;
    }

    // Check for valid email format using a regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // If validations pass
    alert('Subscribed to NewsLetter');
  };

  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>I am a Software Developer with hands-on skills in Flutter, Dart, Java, MySQL, Firebase.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input 
                      type="email" 
                      placeholder='Enter your email' 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="footer-subscribe" onClick={handleSubscribe}>
                    Subscribe
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'>© 2025 Yashwant Choure. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  );
};

export default Footer;
