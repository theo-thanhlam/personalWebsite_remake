import React from "react";

const ProjectHeader = (props: { name: string; type: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <div className="flex flex-col items-center md:items-start pt-4">
        <h1 className="project-name text-4xl text-zinc-200 md:text-5xl font-extrabold">
          {props.name}
        </h1>
        <h3 className="project-type text-xl text-zinc-300">{props.type}</h3>
      </div>
    </div>
  );
};

export default ProjectHeader;
