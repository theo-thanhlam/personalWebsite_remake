import React from "react";
import SocialGroup from "./social";
import ContactSection from "./Contact/contact";

const Foot = () => {
  return (
    <div className="bg-transparent py-10 ">
      <div className="flex items-center md:items-start justify-center md:justify-start flex-col gap-5">
        <div>
          <ContactSection />
        </div>
        <div className="social-list items-center flex md:flex-row flex-col">
          <SocialGroup />
          <div className="pt-2 pl-2">
            <span>Theo Lam © 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foot;
