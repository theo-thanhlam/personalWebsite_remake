import Image from "next/image";
import React from "react";
import profileImg from "@/public/profile.jpg";
import IconScroll from "./iconScroll";

const HeroImage = () => {
  return (
    <div className="border-x-5 border-y-5 border-solid rounded-full border-zinc-700 border-opacity-35">
      <div className="relative w-full h-full opacity-100 ">
        <div className="border-x-1 border-y-1 border-solid rounded-full border-transparent shadow-2xl opacity-100 shadow-zinc-700">
          <Image
            alt="profile image"
            src={profileImg}
            width={300}
            height={300}
            className="block rounded-[inherit] object-center object-cover border-transparent w-auto h-auto"
          />
          <div className="relative top-8">
            <IconScroll />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
