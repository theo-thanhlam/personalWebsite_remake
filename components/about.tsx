import React from "react";
import Section from "./section/section";
import { mdTohtml } from "@/utils/mdRender";

const aboutMDPath = "markdown/about.md";
const About = async () => {
  const content = await mdTohtml(aboutMDPath);

  return (
    <Section name="about">
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="prose prose-zinc text-zinc-200 prose-strong:text-zinc-50 font-mono"
      />
    </Section>
  );
};

export default About;
