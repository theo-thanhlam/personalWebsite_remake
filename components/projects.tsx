"use server";
import Section from "./section/section";
import ProjectCard from "./projectCard";
import { mdTohtml } from "@/utils/mdRender";
import fs from "fs";
/*
 * This component will read all the markdown files in the markdown/projects folder and render them as ProjectCard components
 */

const Projects = () => {
  const mdFilesList = fs.readdirSync("markdown/projects");

  return (
    <Section name="projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mdFilesList.map(async (file, index) => {
          const content = await mdTohtml(`markdown/projects/${file}`);

          return (
            <ProjectCard
              name={file.split(".")[0]} // remove the .md extension
              // description="This is a short description of the project"
              markdownContent={content}
              key={index}
            />
          );
        })}
        {/* <div className="hidden sm:block "> (Coming soon...)</div> */}
      </div>
    </Section>
  );
};

export default Projects;
