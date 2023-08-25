import ListWrapper from '@/components/listWrapper';
import { ProjectsData } from '@/data/projectsData';
import React from 'react'

const ListProjectsWrapper = () => {
  return (
    ProjectsData.map((project) => {
      const {
        id,
        title,
        desc,
        status,
        href,
        squarePicture,
        year,
        services,
      } = project;
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
    })
  )
}

export default ListProjectsWrapper