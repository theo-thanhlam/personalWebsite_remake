"use client";
import Link from "next/link";
import React from "react";
import "@/styles/text.css";
import { useRouter } from "next/navigation";

const sections = [
  { id: 1, name: "Projects", href: "/#projects" },
  { id: 2, name: "Contact", href: "/#contact" },
];

const Sections = () => {
  return (
    <>
      {sections.map((section) => {
        return (
          <div
            className="px-4 py-3 outline-none cursor-pointer text-underline"
            key={section.id}
          >
            <Link href={section.href}>{section.name}</Link>
          </div>
        );
      })}
      {/* <AuthLink /> */}
    </>
  );
};

export default Sections;
