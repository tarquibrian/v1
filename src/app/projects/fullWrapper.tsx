import ProjectsWrapper from "@/components/projectsWrapper";
import { ProjectsData } from "@/data/projectsData";
import React from "react";

const FullWrapper = () => {
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

export default FullWrapper;
