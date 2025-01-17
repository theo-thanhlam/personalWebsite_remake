import React from "react";
import SectionLayout from "./layout";

const Section = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => {
  return (
    <SectionLayout>
      <h2 className="sm:text-right text-sm before:content-['/'] hidden sm:block text-zinc-400">
        {name}
      </h2>
      {children}
    </SectionLayout>
  );
};

export default Section;
