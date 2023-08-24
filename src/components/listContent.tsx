import { ProjectsData } from "@/data/projectsData";
import React from "react";
import ListWrapper from "./listWrapper";

const ListContent = () => {
  return (
    <>
      {ProjectsData.map((project) => {
        const {
          id,
          title,
          desc,
          picture,
          status,
          href,
          squarePicture,
          year,
          services,
        } = project;
        return (
          <ListWrapper
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
      })}
    </>
  );
};

export default ListContent;
