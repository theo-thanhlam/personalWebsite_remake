"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";

import "@/styles/hamburger.css";
import "@/styles/button.css";
import Sections from "./section";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav className="flex items-center justify-between pt-4 pb-8 ">
      <Link
        href={"/"}
        className="flex-center flex text-lg font-bold md:text-xl lg:text-3xl"
      >
        Theo Lam
      </Link>
      {/* <div className=" justify-center"></div> */}
      {/* Desktop Navigation */}
      <div className="text-md hidden gap-5 md:flex">
        <Sections />
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden">
        <div
          className="md:flex-end relative flex cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          <div className="flex h-4 w-4 flex-col justify-between">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          {open && (
            <div className="mobile_menu bg-zinc-950">
              <Sections />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
