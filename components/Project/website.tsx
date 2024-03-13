import Link from "next/link";
import React from "react";

const ProjectWebsite = (props: { href: string }) => {
  return (
    <div className="">
      {props.href ? (
        <Link href={props.href}>
          <button className="bg-zinc-500 rounded-lg px-4 bg-opacity-10 border border-zinc-900 w-full h-max">
            <div className="flex py-3 justify-between place-item-evenly">
              <h2 className="text-4xl text-white font-bold">Website</h2>
              <img
                width={36}
                height={40}
                src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/48/EAEAEA/external-arrow-upper-right-arrows-tanah-basah-basic-outline-tanah-basah.png"
              />
            </div>
          </button>
        </Link>
      ) : (
        <button className="bg-zinc-500 rounded-lg px-4 bg-opacity-10 border border-zinc-900 w-full h-max cursor-not-allowed">
          <div className="flex py-3 justify-between place-item-evenly">
            <h2 className="text-4xl text-white font-bold">Work In Progress</h2>
          </div>
        </button>
      )}
    </div>
  );
};

export default ProjectWebsite;
