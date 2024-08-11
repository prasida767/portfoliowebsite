import React from 'react';
import './Projects.css'; // Import the CSS file for styling

const Projects: React.FC = () => {
    return (
        <div id="projects">
            <h2 className="projectHeading">PROJECTS</h2>
            <div className="project-grid">
                <div className="project">
                    <h3>Creative Image Caption Generator</h3>
                    <p>Web app with Django backend and React frontend for training ML models to generate captions from images. Uses CNN-LSTM architecture trained on the Flickr8k dataset.</p>
                </div>
                <div className="project">
                    <h3>SayIt!</h3>
                    <p>Cloud-based API for posting and interacting with user thoughts. Built with Node.js and MongoDB.</p>
                </div>
                <div className="project">
                    <h3>Doodle Classifier</h3>
                    <p>Web platform using p5.js and Processing to predict user-drawn doodles. Employs a CNN trained on Google's QuickDraw dataset.</p>
                </div>
                <div className="project">
                    <h3>Fohor Aayo</h3>
                    <p>Android app providing notifications for garbage collection activities in Nepal. Uses Firebase messaging.</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;