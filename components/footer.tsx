import React from "react";
import SocialGroup from "./social";

const Foot = () => {
  return (
    <div className="bg-transparent py-10 ">
      <div className="flex items-center justify-center md:justify-start">
        <div className="social-list">
          <SocialGroup />
        </div>
        <div className="pl-4">
          <span>Theo Lam © 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Foot;
