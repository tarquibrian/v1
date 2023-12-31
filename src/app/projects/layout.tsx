import LineY from "@/components/liney";
import Wrapper from "@/components/wrapper";
import React from "react";
import Link from "next/link";

const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Wrapper id="projects-nav">
        <div className="nav">
          <div className="nav-link">My works</div>
          <LineY />
          <div className="options">
            <Link href={"/projects"} className="option__gallery">
              <svg
                width="46"
                height="46"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
              >
                <path d="M18 4H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"></path>
                <path d="M18 14H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z"></path>
              </svg>
            </Link>
            <LineY />
            <Link href={"/projects/list"} className="option__gallery">
              <svg
                width="46"
                height="46"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
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
            </Link>
          </div>
        </div>
      </Wrapper>
      {children}
    </>
  );
};

export default ProjectsLayout;
