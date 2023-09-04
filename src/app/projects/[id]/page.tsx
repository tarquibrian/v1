import ProjectWrapper from "@/components/projectWrapper";
import React from "react";
import { ProjectsData } from "@/data/projectsData";

const getProject = async (id: string) => {
  const res = await fetch(`v1-hxd0un1t2-tarquibrian.vercel.app/api/projects/${id}`, {
    cache: "no-store",
  });
  return res.json();
};

const ProjectPage = async ({ params }: { params: { id: string } }) => {
  const { project } = await getProject(params.id);
  // const data = ProjectsData.find((project) => project.label === params.id);
  return <>{project ? <ProjectWrapper {...project} /> : "no data"}</>;
};

export default ProjectPage;
