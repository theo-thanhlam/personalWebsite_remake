import React from "react";
import ProjectCard from "./card";
import dummyData from "@/dummy/data.json";
import { projectData } from "@/types/project";
import { getAllProjects } from "@/lib/data";

const ProjectCardList = async () => {
  const projects: any = await getAllProjects();
  return (
    <div>
      <h2 className="text-3xl font-bold text-center md:text-start">Projects</h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  md:place-content-start  flex-col  gap-y-10  gap-x-10 pt-10"
        id="projects"
      >
        {projects.toReversed().map((project: projectData, index: number) => {
          return <ProjectCard data={project} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProjectCardList;
