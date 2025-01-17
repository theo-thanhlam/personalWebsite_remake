import React from "react";
import SectionLayout from "./section/layout";
import profileImage from "@/public/profile.png";
import Image from "next/image";

const Bio = () => {
  return (
    <SectionLayout>
      <div></div>
      <div className="flex flex-col gap-6 items-center sm:items-start">
        <div className="avatar justify-center sm:justify-start">
          <div className="rounded-full w-1/4 ring-4 ring-zinc-100 ringe-offset-2">
            <Image
              src={profileImage.src}
              alt="Theo Lam"
              width={profileImage.width}
              height={profileImage.height}
            />
          </div>
        </div>
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight text-white">
          Theo Lam
        </h1>
      </div>
    </SectionLayout>
  );
};

export default Bio;
