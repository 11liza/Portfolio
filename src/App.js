import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';

const App = () => {
  useEffect(() => {
    document.title = "Liza's Portfolio";
  }, []);
  const projectsData = [
    // Other project objects...
    {
      title: 'My Awesome Game',
      description: 'Rock paper scissors vs AI or human (local)',
      technologies: ['React', 'HTML5', 'CSS3'],
      demoLink: 'https://game-portfolio-bay.vercel.app/',
      githubLink: 'https://github.com/11liza/Game-Portfolio',
    },
    {
      title: 'E-Commerce project',
      description: 'E-Commerce project done with group, dependencies are out of date',
      technologies: ['Vite', 'HTML5', 'CSS3'],
      githubLink: 'https://github.com/huenguyensw/ProjectEcommerce',
    },

    {
      title: 'My other github repositories',
      description: 'My github',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'UI/UX'],
      githubLink: 'https://github.com/11liza?tab=repositories',
    },
  ];

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          {/* Set the default route to the About component */}
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects projectsData={projectsData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
