import ProjectsWrapper from "@/components/projectsWrapper";
import React from "react";
import { ProjectsData } from "@/data/projectsData";
import { NextResponse } from "next/server";

const getProject = async () => {
  const res = await fetch("http://localhost:3000/api/projects");
  return res.json();
};

const ProjectsPage = async () => {
  const { projects } = await getProject();
  console.log("data", projects);
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
