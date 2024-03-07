import { techStacks } from "@/lib/techStack";
import "@/styles/card.css";
import { projectData } from "@/types/project";
import Link from "next/link";

const ProjectCard = (props: { data: projectData }) => {
  const { data } = props;

  const matchedTechs = techStacks.filter((stack) =>
    data.techs.includes(stack.tech),
  );

  return (
    <Link href={`/project/${data.slug}`}>
      <div className="relative flex max-w-[32rem] flex-col overflow-hidden rounded-xl bg-neutral-700  bg-opacity-20 bg-clip-border  shadow-md card-shadow max-h-[26rem]">
        <div className="relative m-0 overflow-hidden  rounded-none shadow-none bg-clip-border">
          <img src={data.preview} alt="ui/ux review check" height={400} />
        </div>
        <div className="p-6 text-white">
          <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal ">
            {data.name}
          </h4>
          <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed ">
            {data.description}
          </p>
        </div>
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center ">
            {matchedTechs.map((value: any, index: number) => {
              return (
                <img
                  src={value.img}
                  alt={value.name}
                  width={48}
                  height={48}
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
