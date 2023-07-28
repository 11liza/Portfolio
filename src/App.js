import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Skills from './components/Skills';
import Project from './components/Project';
import './App.css';



const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          {/* <Route path="/project" element={<Project />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

