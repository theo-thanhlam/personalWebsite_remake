import React from "react";
import Tech from "./tech";

const ProjectTechStack = (props: { techs: string[] }) => {
  //   const matchedTechs = techStacks.filter((stack) =>
  //   data.techs.includes(stack.tech),
  // );
  return (
    <div className="bg-zinc-500 rounded-lg px-4 bg-opacity-10 border border-zinc-900">
      <div className="TechStack">
        <h1 className="text-4xl text-white py-3 font-bold">Tech Stack</h1>
      </div>
      <div className="tech ">
        {props.techs.map((tech: string, index: number) => {
          return (
            <div key={index} className="pb-3">
              <Tech name={tech} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectTechStack;
