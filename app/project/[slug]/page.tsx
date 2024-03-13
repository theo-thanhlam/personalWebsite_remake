import ProjectContent from "@/components/Project/content";
import ProjectCreatedDate from "@/components/Project/created";
import ProjectHeader from "@/components/Project/header";
import ProjectOverview from "@/components/Project/overview";
import ProjectTechStack from "@/components/Project/techStack";
import ProjectWebsite from "@/components/Project/website";
import { projectData } from "@/types/project";
import React from "react";
import dummyData from "@/dummy/data.json";
import { getProjectBySlug } from "@/lib/data";

const Project = async ({ params }: { params: { slug: string } }) => {
  //Change to fetch slug from api
  const data = await getProjectBySlug(params.slug);
  if (!data) return <div> Project Not Found</div>;
  return (
    <div>
      <div className="flex flex-col md:flex-nowrap items-center md:items-start">
        <ProjectHeader name={data.name} type={data.type} />
        <div>
          <div className="py-8">
            <img src={data.preview} alt="" className="rounded-xl" />
          </div>
          <div className="content-container">
            <div className="flex flex-col gap-4 xl:flex-row">
              <div className="w-full xl:w-2/3">
                <ProjectOverview content={data.overviewContent} />
              </div>
              <div className="side-bar w-full h-fit xl:w-1/3 ">
                <div className="mb-4">
                  <ProjectTechStack techs={data.techs} />
                </div>
                <div className="mb-4">
                  <ProjectCreatedDate createdAt={data.createdAt} />
                </div>
                <div className="h-content">
                  <ProjectWebsite href={data.website || null} />
                </div>
              </div>
            </div>
            <div className="post-content">
              <ProjectContent content={data.content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
