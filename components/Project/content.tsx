import React from "react";

const ProjectContent = (props: { content: string }) => {
  return (
    <div className="content-container  mt-5">
      <div className="Description">
        <h1 className="text-4xl text-white py-3 font-bold">
          Project Description
        </h1>
        <div className="bg-zinc-500 bg-opacity-5 rounded-lg text-zinc-200">
          <div dangerouslySetInnerHTML={{ __html: `${props.content}` }} />
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
