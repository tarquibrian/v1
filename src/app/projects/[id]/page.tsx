import ProjectWrapper from "@/components/projectWrapper";
import React from "react";
import { ProjectsData } from "@/data/projectsData";

// const getProject = async (id: string) => {
//   const res = await fetch(`https://v1-gules.vercel.app/api/projects/${id}`, {
//     cache: "no-store",
//   });
//   return res.json();
// };

const ProjectPage = async ({ params }: { params: { id: string } }) => {
  // const { project } = await getProject(params.id);
  const data = ProjectsData.find((project) => project.label === params.id);
  return <>{data ? <ProjectWrapper {...data} /> : "no data"}</>;
};

export default ProjectPage;
