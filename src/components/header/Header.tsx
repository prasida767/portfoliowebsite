import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="App-header">
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item"><a href="#about">About</a></li>
                    <li className="navbar-item"><a href="#projects">Projects</a></li>
                    <li className="navbar-item"><a href="#skills">Technologies</a></li>
                    <li className="navbar-item"><a href="#experience">Experience</a></li>
                    <li className="navbar-item"><a href="#contact">Contact</a></li>
                </ul>
                <a href="/CV.pdf" download="CV.pdf" className="download-button">
                    Download CV
                </a>
            </nav>
        </header>
    );
};

export default Header;