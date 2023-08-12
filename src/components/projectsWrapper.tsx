import React from "react";
import Wrapper from "./wrapper";
import Image, { StaticImageData } from "next/image";
import LineY from "./liney";
import OpenIcon from "./icons/open";
import Link from "next/link";
import StatusIcon from "./icons/status";

interface Project {
  id: string;
  title: string;
  desc: string;
  picture: StaticImageData;
  status: boolean;
  href: string;
}

const ProjectsWrapper = ({
  id,
  title,
  desc,
  picture,
  status,
  href,
}: Project) => {
  return (
    <Wrapper className="projectswrapper" htmlElement="section">
      <div className="projectswrapper__section">
        {/* <Wrapper>
          <div className="projectswrapper__section-top">
            <div className="top__title">
              <Link href={`/projects/${id}`}></Link>
            </div>
          </div>
        </Wrapper> */}
        <Wrapper className="projectswrapper__section-details">
          <div className="more">
            <Link href={`/projects/${id}`}>
              <h4>{title}</h4>
            </Link>
          </div>
          <LineY />
          <a
            className="link"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StatusIcon active={status} />
            <OpenIcon />
          </a>
        </Wrapper>
        <div className="projectswrapper__section-picture">
          <Link href={`/projects/${id}`} className="picture__content">
            <Image src={picture} alt="project picture " placeholder="blur" />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectsWrapper;
