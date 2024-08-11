import React from 'react';
import './Skills.css';

const skills = [
    { name: 'Java', src: '/java.svg' },
    { name: 'Python', src: '/python.png' },
    { name: 'Elasticsearch', src: '/elasticsearch1.svg' },
    { name: 'MongoDB', src: '/mongodb1.svg' },
    { name: 'R', src: '/r.jpg' },
    { name: 'AWS', src: '/aws1.jpg' },
    { name: 'React', src: '/react-1.svg' },
    { name: 'MySql', src: '/mysql.svg' },
    { name: 'Docker', src: '/docker-1.png' },
    { name: 'Kubernetes', src: '/kubernests.png' },
    { name: 'Spring', src: '/spring.png' },
    { name: 'Github', src: '/github.png' },
    // Add more skills as needed
];

const Skills: React.FC = () => {
    return (
        <div id="skills">
            <h2 className="skills-heading">TECHNOLOGIES</h2>
            <div className="skills-grid">
                {skills.map(skill => (
                    <div key={skill.name} className="skill-item">
                        <img src={skill.src} alt={skill.name} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
