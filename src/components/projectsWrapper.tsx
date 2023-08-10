import React from "react";
import Wrapper from "./wrapper";
import img from "../../public/img/banner-top.jpg";
import Image from "next/image";
import LineY from "./liney";
import OpenIcon from "./icons/open";
import Link from "next/link";

const ProjectsWrapper = () => {
  return (
    <Wrapper className="projectswrapper" htmlElement="section">
      <div className="projectswrapper__section">
        <Wrapper>
          <div className="projectswrapper__section-top">
            <div className="top__title">
              <Link href={"/"}>
                <h4>PROJECT TITLE</h4>
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                ipsum expedita quam doloremque molestias, reprehenderit ipsa
              </p>
            </div>
          </div>
        </Wrapper>
        <Wrapper>
          <div className="projectswrapper__section-picture">
            <div className="picture__content">
              <Image src={img} alt="project picture " placeholder="blur" />
            </div>
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="circle"
            >
              <circle cx="12" cy="12" r="12" />
            </svg>
            <OpenIcon />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectsWrapper;
