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
}

const ProjectsWrapper = ({ title, desc, picture }: Project) => {
  return (
    <Wrapper className="projectswrapper" htmlElement="section">
      <div className="projectswrapper__section">
        <Wrapper>
          <div className="projectswrapper__section-top">
            <div className="top__title">
              <Link href={"/projects/123"}>
                <h4>{title}</h4>
              </Link>
              <p>{desc}</p>
            </div>
          </div>
        </Wrapper>
        <Wrapper>
          <div className="projectswrapper__section-picture">
            <Link href={"/"} className="picture__content">
              <Image src={picture} alt="project picture " placeholder="blur" />
            </Link>
          </div>
        </Wrapper>
        <div className="projectswrapper__section-details">
          <div className="more">
            <Link href={"/"}>More information</Link>
          </div>
          <LineY />
          <a
            className="link"
            href="http://tarquibrian.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StatusIcon />
            <OpenIcon />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectsWrapper;
