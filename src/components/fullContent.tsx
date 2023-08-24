import React from "react";
import { ProjectsData } from "@/data/projectsData";
import ProjectsWrapper from "./projectsWrapper";

const getProjects = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/projects", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const FullContent = async () => {
  // const { projects } = await getProjects();
  console.log("test");
  return (
    <>
      {ProjectsData.map((project) => {
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
      })}
    </>
  );
};

export default FullContent;
