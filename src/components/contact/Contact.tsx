import React from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact: React.FC = () => {
    return (
        <div id="contact">
            <h2 className="contact-heading">CONTACT</h2>
            <p>Lets Connect</p>
            <div className="contact-info">
                <a href="mailto:prasi.kdk21@gmail.com" className="contact-link">
                    <i className="fas fa-envelope"></i> prasi.kdk21@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/prasiddha-khadka-87833a1b6/" className="contact-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://github.com/prasida767" className="contact-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                </a>
            </div>
        </div>
    );
};

export default Contact;