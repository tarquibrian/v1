import React from "react";
import { ProjectsData } from "@/data/projectsData";
import ListWrapper from "@/components/listWrapper";

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
  const res = await fetch(`http://localhost:3000/api/projects`, {
    cache: "no-store",
  });
  return res.json();
};

const List = async () => {
  const { projects } = await getProject();
  return projects.map((project: Project) => {
    const { label, title, desc, status, href, squarePicture, year, services } =
      project;
    return (
      <ListWrapper
        key={label}
        id={label}
        title={title}
        squarePicture={squarePicture}
        status={status}
        href={href}
        year={year}
        desc={desc}
        services={services}
        // desc={desc}
        // picture={picture}
        // status={status}
        // href={href}
      />
    );
  });
};

export default List;
