import React from 'react';

const Skills = () => {
  const skillsList = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React Native",
    "Node.js",
    "Git",
    "UI/UX Design",
  ];

  const toolsList = [
    "Visual Studio Code",
    "Figma",
    "Github",
    "Jira",
    "Mongodb",
    "React Testing Library",
    "Trello",
  ];

  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Tools</h2>
      <ul>
        {toolsList.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
    </div>
    
  );
};

export default Skills;