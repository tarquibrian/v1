import ProjectsWrapper from "@/components/projectsWrapper";
import React from "react";
import { ProjectsData } from "@/data/projectsData";

const ProjectsPage = () => {
  return (
    <>
      {ProjectsData.map((project) => {
        const { title, desc, picture } = project;
        return <ProjectsWrapper title={title} desc={desc} picture={picture} />;
      })}
    </>
  );
};

export default ProjectsPage;
