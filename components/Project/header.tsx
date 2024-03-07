import React from "react";

const ProjectHeader = (props: { name: string; type: string; icon: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <img width="120" height="120" src={props.icon} alt="software-box" />
      <div className="flex flex-col md:pl-6 items-center md:items-start pt-4">
        <h1 className="project-name text-4xl text-zinc-200 md:text-5xl">
          {props.name}
        </h1>
        <h3 className="project-type text-xl text-zinc-300">{props.type}</h3>
      </div>
    </div>
  );
};

export default ProjectHeader;
