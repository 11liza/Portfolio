import React from 'react';
import { NavLink } from 'react-router-dom';
import myPicture from '../img/CV-Photo.jpg';

const Header = () => {
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
      
    </header>
  );
};

export default Header;