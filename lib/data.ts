import { projectData } from "@/types/project";
import { db } from "./db";

export async function getAllProjects() {
  return await db.project.findMany();
}

export async function getProjectBySlug(slug: string) {
  return await db.project.findFirst({
    where: {
      slug,
    },
  });
}
