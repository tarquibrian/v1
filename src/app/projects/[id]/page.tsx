import ProjectWrapper from "@/components/projectWrapper";
import React from "react";
import { ProjectsData } from "@/data/projectsData";

const getProject = async (id: string) => {
  console.log(process.env.API_URL)
  const res = await fetch(`${process.env.API_URL}/api/projects/${id}`, {
    next: {
      revalidate: 3600,
    },
  });
  return res.json();
};

const ProjectPage = async ({ params }: { params: { id: string } }) => {
  const { project } = await getProject(params.id);
  // const data = ProjectsData.find((project) => project.label === params.id);
  return <>{project ? <ProjectWrapper {...project} /> : "no data"}</>;
};

export default ProjectPage;
