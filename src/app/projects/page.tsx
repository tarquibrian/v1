import ProjectsWrapper from "@/components/projectsWrapper";
import React from "react";
import { ProjectsData } from "@/data/projectsData";

interface Project {
  id: string;
  title: string;
  desc: string;
  client: string;
  timeline: string;
  services: string[];
  year?: number;
  website?: string;
  picture: Picture;
  challenge: string;
  solution: string;
  result: string;
  gallery: Picture[];
  status: boolean;
  href: string;
  squarePicture: Picture;
}

interface Picture {
  src: string;
  alt: string;
}

const getProject = async () => {
  const res = await fetch("http://localhost:3000/api/projects", {
    cache: "no-store",
  });
  return res.json();
};

const ProjectsPage = async () => {
  const { projects } = await getProject();
  console.log("data", projects);
  return projects.map((project: Project) => {
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
