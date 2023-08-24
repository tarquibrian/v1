import React from "react";
import { ProjectsData } from "@/data/projectsData";
import ProjectsWrapper from "./projectsWrapper";

const FullContent = () => {
  return (
    <>
      {ProjectsData.map((project) => {
        const { id, title, picture, status, href } = project;
        return (
          <ProjectsWrapper
            id={id}
            title={title}
            picture={picture}
            status={status}
            href={href}
          />
        );
      })}
    </>
  );
};

export default FullContent;
