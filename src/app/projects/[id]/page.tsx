import ProjectWrapper from "@/components/projectWrapper";
import React from "react";
import { ProjectsData } from "@/data/projectsData";

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const data = ProjectsData.find((project) => project.id === params.id);
  return <>{data ? <ProjectWrapper {...data} /> : "no data"}</>;
};

export default ProjectPage;
