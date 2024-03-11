import { techStacks } from "@/lib/techStack";
import React from "react";

const Tech = (props: { name: string }) => {
  const tech = techStacks.filter((value) => value.tech == props.name)[0];
  return (
    <div className="tech-container flex flex-row gap-4">
      <div className="tech-image">
        <img src={tech.img} alt={tech.name} width={52} height={52} />
      </div>
      <div className="tech-name pt-2 text-zinc-300">
        <span className="text-2xl"> {tech.name}</span>
      </div>
    </div>
  );
};

export default Tech;
