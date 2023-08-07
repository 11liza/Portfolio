import React from 'react';
import { NavLink } from 'react-router-dom';
import CVFile from '../img/CV.pdf';
import myPicture from '../img/CV-Photo.jpg';

const Header = () => {
 
 /*  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    CVFile(selectedFile);
  }; */

  return (
    <header>
      <img src={myPicture} alt="Your Name" />
      
      <div className="container-header_container">
        <h5>Hello, I'm </h5>
        <h1>Liza Tällgård</h1>
        <h5>Frontend Developer</h5>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/skills">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/projects">
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="cv-download">
        <a href={CVFile} download className="cv-download-link">
          Download CV (PDF)
        </a>
      </div>
      
    </header>
  );
};

export default Header;