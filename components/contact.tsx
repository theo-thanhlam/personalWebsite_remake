"use client";
import { useState } from "react";
import Section from "./section/section";
import copy from "copy-to-clipboard";

const email = "theo.thanhlam@gmail.com";

const Contact = () => {
  const [copied, setCopied] = useState<boolean>(false);

  return (
    <Section name="contact">
      <div className="tooltip" data-tip={copied ? "Copied!" : "Copy"}>
        <button
          onClick={() => {
            copy(email);
            setCopied(true);
          }}
          className="group flex items-center gap-1 border border-transparent hover:px-1  hover:border-gray-600 hover:text-gray-300 transition duration-200 hover:scale-110 rounded-lg"
        >
          <svg
            aria-label="Email icon"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="white"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>

          <span> {email}</span>
        </button>
      </div>
    </Section>
  );
};

export default Contact;
