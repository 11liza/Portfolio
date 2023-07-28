import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Skills from './components/Skills';
import Project from './components/Project';
import Projects from './components/Projects';
import './App.css';



const App = () => {
  const projectsData = [
    // Other project objects...
    {
      title: 'My Awesome Game',
      description: 'A description of my game project.',
      technologies: ['React', 'HTML5', 'CSS3'],
      demoLink: 'https://game-portfolio-bay.vercel.app/',
      githubLink: 'https://github.com/11liza/Game-Portfolio',
      imageSrc: '..src/img/game-thumbnail.png', // Replace with the actual image path
    },
  ];
  
  
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects projectsData={projectsData} />} />

          {/* <Route path="/project" element={<Project />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

