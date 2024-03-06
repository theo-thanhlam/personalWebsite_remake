import React from "react";
import "@/styles/iconsScroll.css";
import { techStacks } from "@/lib/techStack";
//MAX 8

const IconScroll = () => {
  return (
    <div className="iconsScroll">
      <div>
        {techStacks.map((values, index) => {
          return <img alt="icon" src={values.img} key={index} />;
        })}
      </div>
      <div>
        {techStacks.map((values, index) => {
          return <img alt="icon" src={values.img} key={index} />;
        })}
      </div>
    </div>
  );
};

export default IconScroll;
