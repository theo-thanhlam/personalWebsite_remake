import React from "react";

const ProjectCreatedDate = (props: { createdAt: string }) => {
  return (
    <div className="bg-zinc-500 rounded-lg px-4 bg-opacity-10 border border-zinc-900">
      <div className="CreatedAt">
        <h1 className="text-4xl text-white py-3 font-bold">Created At</h1>
      </div>
      <div className="overView-content text-xl pb-4 font-medium text-zinc-300">
        <span> {new Date(props.createdAt).getFullYear()}</span>
      </div>
    </div>
  );
};

export default ProjectCreatedDate;
