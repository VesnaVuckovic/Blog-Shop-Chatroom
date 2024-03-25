import { Link } from 'react-router-dom';
import React from 'react';
import ContactForm from './ContactForm';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer>
        <div className="contact-form">
            <ContactForm/>
        </div>   
        
        <div className="social-icons">
        <a href="link_to_facebook"><FaFacebook /></a>
        <a href="link_to_instagram"><FaInstagram /></a>
        <a href="link_to_linkedIn"><FaLinkedin /></a>      
        <p className="copyright">&copy; copyrightBy</p>        
        </div>
        
      </footer>
    );
} 

export default Footer;