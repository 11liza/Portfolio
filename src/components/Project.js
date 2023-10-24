import React from 'react';

const Project = ({ project }) => {
  const { title, description, technologies, demoLink, githubLink } = project;

  return (
    <div className="project">
      <h2 className='projects-container'>Projects</h2>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <div>

        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default Project;
