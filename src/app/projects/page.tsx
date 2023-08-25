import ProjectsWrapper from "@/components/projectsWrapper";
import React from "react";
import { ProjectsData } from "@/data/projectsData";

const ProjectsPage = () => {
  return ProjectsData.map((project) => {
    const { id, title, picture, status, href, pictureBlur } = project;
    return (
      <ProjectsWrapper
        key={id}
        id={id}
        title={title}
        picture={picture}
        status={status}
        href={href}
        blurData={pictureBlur}
      />
    );
  });
};

export default ProjectsPage;
