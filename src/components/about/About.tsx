import React from "react";
import './About.css';

const About: React.FC = () => {
    return (
        <div id="about">
            <div className="text-wrapper">
                <h2 className="intro-text">Hello World,</h2>
                <h2 className="name-text">I am Prasiddha Khadka.</h2>
            </div>
            <p>Welcome to my website</p>
            <p>Dynamic Software Engineer with 3+ years commercial experience who thrives on technical challenges.</p>
            <p>Passionate about collaboration and clean code, as well as being in environments which allow me to continuously learn and develop my skills.</p>
            <p>You have any ideas in mind? Let us connect and build something together.</p>
            <p>Connect, Communicate, Design, Build, Deploy</p>
        </div>
    );
};

export default About;