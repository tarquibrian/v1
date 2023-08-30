import ProjectsWrapper from "@/components/projectsWrapper";
import React from "react";
import { ProjectsData } from "@/data/projectsData";

const getProject = async () => {
  return await fetch("http://localhost:3000/projects");
};

const ProjectsPage = () => {
  const data = getProject();
  // console.log("data", data);
  return ProjectsData.map((project) => {
    const { id, title, picture, status, href } = project;
    return (
      <ProjectsWrapper
        key={id}
        id={id}
        title={title}
        picture={picture}
        status={status}
        href={href}
      />
    );
  });
};

export default ProjectsPage;
