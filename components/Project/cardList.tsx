import React from "react";
import ProjectCard from "./card";

const ProjectCardList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-4 md:gap-8">
      <ProjectCard />
      <ProjectCard />

      <ProjectCard />

      <ProjectCard />

      <ProjectCard />

      <ProjectCard />
    </div>
  );
};

export default ProjectCardList;
