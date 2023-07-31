import React from 'react';
import Project from './Project';

const Projects = ({ projectsData }) => {
  return (
    <div>
      <h2 className='projects-container'>Projects</h2>
      {projectsData.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
