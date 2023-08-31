import ProjectWrapper from "@/components/projectWrapper";
import React from "react";
import { ProjectsData } from "@/data/projectsData";

const getProject = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/projects/${id}`, {
    cache: "no-store",
  });
  return res.json();
};

const ProjectPage = async ({ params }: { params: { id: string } }) => {
  const { project } = await getProject(params.id);
  console.log(project);
  const data = ProjectsData.find((project) => project.label === params.id);
  return <>{data ? <ProjectWrapper {...data} /> : "no data"}</>;
};

export default ProjectPage;
