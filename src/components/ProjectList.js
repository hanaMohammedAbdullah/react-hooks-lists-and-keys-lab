import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id='projects'>
      <h2>My Projects</h2>
      <div id='project-list'>
        {/* render ProjectItem components here */}
        {projects.map((data) => (
          <ProjectItem
            key={data.id}
            id={data.id}
            name={data.name}
            about={data.about}
            technologies={data.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
