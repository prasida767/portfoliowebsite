import React from 'react';
import './DownloadCV.css'; // Optional: for styling

const DownloadCV: React.FC = () => {
    return (
        <div id="download-cv">
            <h2>Download My CV</h2>
            <a href="/Prasiddha_CV_2024.pdf" download="Prasiddha_CV_2024.pdf" className="download-button">
                <span>Download CV</span>
            </a>
        </div>
    );
};

export default DownloadCV;