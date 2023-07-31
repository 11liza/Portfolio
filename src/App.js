import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';

const App = () => {
  const projectsData = [
    // Other project objects...
    {
      title: 'My Awesome Game',
      description: 'Rock paper scissors vs AI or human (local)',
      technologies: ['React', 'HTML5', 'CSS3'],
      demoLink: 'https://game-portfolio-bay.vercel.app/',
      githubLink: 'https://github.com/11liza/Game-Portfolio',
      // Include the correct image path for this project
    },
    {
      title: 'E-Commerce project',
      description: 'E-Commerce project done with group, dependencies are out of date',
      technologies: ['Vite', 'HTML5', 'CSS3'],
      githubLink: 'https://github.com/huenguyensw/ProjectEcommerce',
      // Include the correct image path for this project
    },
  ];

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          {/* Set the default route to the About component */}
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects projectsData={projectsData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
