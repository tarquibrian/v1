import React from "react";
import ListProjectsWrapper from "../listProjectsWrapper";
import { ProjectsData } from "@/data/projectsData";
import ListWrapper from "@/components/listWrapper";

const List = () => {
  return ProjectsData.map((project) => {
    const { id, title, desc, status, href, squarePicture, year, services } =
      project;
    return (
      <ListWrapper
        key={id}
        id={id}
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
