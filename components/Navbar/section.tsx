"use client";
import Link from "next/link";
import React from "react";
import "@/styles/text.css";

const sections = [
  { id: 1, name: "Projects", href: "/#projects" },
  { id: 2, name: "Contact", href: "/#contact" },
];

const Sections = () => {
  const currentPath = location.pathname;

  return (
    <>
      {sections.map((section) => {
        return (
          <div
            className="px-4 py-3 outline-none cursor-pointer text-underline"
            key={section.id}
          >
            <Link href={location.origin + section.href}>{section.name}</Link>
          </div>
        );
      })}
      {/* <AuthLink /> */}
    </>
  );
};

export default Sections;
