import React from "react";
import ProjectCard from "./card";

const ProjectCardList = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-content-start  flex-col  gap-y-10  gap-x-10 pt-10"
      id="projects"
    >
      <ProjectCard />
      <ProjectCard />

      <ProjectCard />

      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default ProjectCardList;
