import React from "react";

const Bottom = () => {
  return (
    <div className="mx-auto mt-8 flex w-max gap-2 rounded-2xl p-2 items-center">
      <span className="text-sm italic opacity-30">
        inspired by{" "}
        <a href="https://zoma.dev/" className="link">
          Dennis Zoma
        </a>{" "}
        website
      </span>
    </div>
  );
};

export default Bottom;
