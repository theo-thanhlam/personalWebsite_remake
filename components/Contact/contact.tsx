"use client";
import React, { useState } from "react";
import "@/styles/button.css";
import copy from "copy-to-clipboard";
const email = "theo.thanhlam@gmail.com";

const ContactSection = () => {
  const [copied, setCopied] = useState<boolean>(false);

  return (
    <div
      className="pt-10 flex flex-col items-center md:items-start"
      id="contact"
    >
      <div className="header-container pb-4">
        <h2 className="text-3xl">Get In Touch</h2>
      </div>
      <div className="">
        <button
          className="button-comic-border after:bg-zinc-700 py-2 px-6 flex hover:after:bg-zinc-500 active:after:bg-zinc-600"
          onClick={() => {
            copy(email);
            setCopied(true);
          }}
        >
          <img
            src={
              copied
                ? "https://img.icons8.com/ios/100/checked-checkbox--v1.png"
                : "https://img.icons8.com/ios/100/000000/copy--v1.png"
            }
            alt="copy icon"
            width={24}
            height={8}
          />
          <span className="pl-4"> {email}</span>
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
