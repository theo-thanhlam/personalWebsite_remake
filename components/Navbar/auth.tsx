import React from "react";
import "@/styles/button.css";
const AuthLink = () => {
  return (
    <button className="button-border-animation before:bg-zinc-800 after:bg-zinc-800 after:bg-opacity-30 hover:after:bg-opacity-100">
      Sign In
    </button>
  );
};

export default AuthLink;
