import React from 'react';
import './App.css';
import Header from './components/header/Header'; // Adjust the path as necessary
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
        </div>
    );
};

export default App;