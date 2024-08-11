import React from 'react';
import './Experience.css'

const Experience: React.FC = () => {
    return (
        <div id="experience">
            <h2>Experience</h2>

            <div className="experience-item">
                <h3>Deerwalk Services Private Limited</h3>
                <div className="position">
                    <span>Senior Software Engineer</span>
                    <span className="date">January, 2022 - June, 2022</span>
                </div>
                <div className="position">
                    <span>Software Engineer</span>
                    <span className="date">May, 2020 - December, 2022</span>
                </div>
                <div className="position">
                    <span>Associate Software Engineer</span>
                    <span className="date">April, 2019 - April, 2020</span>
                </div>
                <div className="position">
                    <span>Intern</span>
                    <span className="date">September, 2018 - May, 2019</span>
                </div>
            </div>

            <div className="experience-item">
                <h3>Homerton Hospital University NHS</h3>
                <div className="position">
                    <span>Patient Pathway Administrator</span>
                    <span className="date">December, 2022 - Current</span>
                </div>
            </div>
        </div>
    );
};

export default Experience;