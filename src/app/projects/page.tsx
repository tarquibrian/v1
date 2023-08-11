import ProjectsWrapper from "@/components/projectsWrapper";
import React from "react";
import { ProjectsData } from "@/data/projectsData";

const ProjectsPage = () => {
  return (
    <>
      {ProjectsData.map((project) => {
        const { id, title, desc, picture, status, href } = project;
        return (
          <ProjectsWrapper
            id={id}
            title={title}
            desc={desc}
            picture={picture}
            status={status}
            href={href}
          />
        );
      })}
    </>
  );
};

export default ProjectsPage;
