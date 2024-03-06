import { techStacks } from "@/lib/techStack";
import "@/styles/card.css";
import Link from "next/link";
const dummyData = {
  name: "<Project Name>",
  description: "<Project Description>",
  img:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80",
  techUsed: techStacks.filter(
    (values) =>
      values.tech == "nextjs" ||
      values.tech == "tailwindcss" ||
      values.tech == "typescript",
  ),
};

const ProjectCard = () => {
  return (
    <Link href={"#"}>
      <div className="relative flex max-w-[32rem] flex-col overflow-hidden rounded-xl bg-neutral-700  bg-opacity-20 bg-clip-border  shadow-md card-shadow">
        <div className="relative m-0 overflow-hidden  rounded-none shadow-none bg-clip-border">
          <img
            src={dummyData.img}
            alt="ui/ux review check"
          />
        </div>
        <div className="p-6 text-white">
          <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal ">
            {dummyData.name}
          </h4>
          <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed ">
            {dummyData.description}
          </p>
        </div>
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center ">
            {dummyData.techUsed.map((values, index) => {
              return (
                <img
                  alt="tech icon"
                  src={values.img}
                  className="relative inline-block h-9 w-9 !rounded-full   object-cover object-center hover:z-10"
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
