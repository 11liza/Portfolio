import React from 'react';

const Project = ({ project }) => {
  const { title, description, technologies, demoLink, githubLink, imageSrc } = project;

  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <div>
        {/* Add target="_blank" to open the link in a new tab */}
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
      <img src={imageSrc} alt={title} />
    </div>
  );
};

export default Project;
