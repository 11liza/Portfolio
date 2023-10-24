import React from 'react';
import Project from './Project';

const Projects = ({ projectsData }) => {
  return (
    <div>
      {projectsData.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
