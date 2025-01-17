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
      <h2 className="sm:text-right text-sm before:content-['/'] hidden sm:block ">
        {name}
      </h2>
      {children}
    </SectionLayout>
  );
};

export default Section;
