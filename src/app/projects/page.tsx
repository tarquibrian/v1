import ProjectsWrapper from "@/components/projectsWrapper";
import { ProjectsData } from "@/data/projectsData";
import React from "react";

interface Project {
  label: string;
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
  const res = await fetch(`https://v1-gules.vercel.app/api/projects`, {
    next: {
      revalidate: 10,
    },
  });
  return res.json();
};

const ProjectsPage = async () => {
  const { projects } = await getProject();
  return projects.map((project: Project) => {
    const { label, title, picture, status, href } = project;
    return (
      <ProjectsWrapper
        key={label}
        id={label}
        title={title}
        picture={picture}
        status={status}
        href={href}
      />
    );
  });
};

export default ProjectsPage;
