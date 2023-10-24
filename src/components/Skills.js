import React from 'react';

const Skills = () => {
  const skillsList = [
    /*     { name: "HTML", img: "/html.png" },
        { name: "CSS", img: "/css.png" },
        { name: "JavaScript", img: "/js.png" },
        { name: "React", img: "/react.png" },
        { name: "React Native", img: "/react-native.png" },
        { name: "Node.js", img: "/node-js.webp" },
        { name: "Git", img: "/Git-logo.png" },
        { name: "UX/UI Design", img: "/ux-ui.png" }, */

    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React Native",
    "Node.js",
    "Git",
    "UX/UI Design",
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
          <li key={index}>
            {skill}
          </li>
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