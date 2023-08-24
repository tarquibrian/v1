// "use client";
import ProjectsWrapper from "@/components/projectsWrapper";
import React, { useState, useEffect } from "react";
import { ProjectsData } from "@/data/projectsData";
import Wrapper from "@/components/wrapper";
import LineY from "@/components/liney";
import ListWrapper from "@/components/listWrapper";

// const getProjects = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/projects", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch");
//     }

//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

const ProjectsPage = async () => {
  // const [mode, setMode] = useState("mode1");
  // const { projects } = await getProjects();

  return (
    <>
      {/* <Wrapper id="projects-nav">
        <div className="nav">
          <div className="nav-link">My works</div>
          <LineY />
          <div className="options">
            <button
              className="option__gallery"
              // onClick={() => setMode("mode1")}
            >
              <svg
                width="46"
                height="46"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 4H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"></path>
                <path d="M18 14H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z"></path>
              </svg>
            </button>
            <LineY />
            <button
              className="option__gallery"
              // onClick={() => setMode("mode2")}
            >
              <svg
                width="46"
                height="46"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 5h8"></path>
                <path d="M13 9h5"></path>
                <path d="M13 15h8"></path>
                <path d="M13 19h5"></path>
                <path d="M8 4H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z"></path>
                <path d="M8 14H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </Wrapper> */}
      {/* {mode === "mode1"
        ? ProjectsData.map((project) => {
            const { id, title, picture, status, href } = project;
            return (
              <ProjectsWrapper
                id={id}
                title={title}
                picture={picture}
                status={status}
                href={href}
              />
            );
          })
        : ProjectsData.map((project) => {
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
          })} */}
      {ProjectsData.map((project) => {
        const { id, title, picture, status, href } = project;
        return (
          <ProjectsWrapper
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

export default ProjectsPage;
