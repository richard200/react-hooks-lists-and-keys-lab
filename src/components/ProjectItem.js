import React from "react";
// import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {
  let techList = technologies.map((item) => 
    <span key={item}>{item}</span>)
  
  return (
    <div className="project-item">
      <h3 key="name">{name}</h3>
      <p key="about">{about}</p>
      <div className="technologies">
        {techList}
        
      </div>
    </div>
  );
}

export default ProjectItem;

