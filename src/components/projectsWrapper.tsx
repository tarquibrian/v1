import React from "react";
import Wrapper from "./wrapper";
import LineY from "./liney";
import OpenIcon from "./icons/open";
import Link from "next/link";
import StatusIcon from "./icons/status";
import NextImage from "./NextImage";
import { getBase64ImageUrl } from "@/utils/base64image";

interface Project {
  id: string;
  title: string;
  picture: { src: string; alt: string };
  status: boolean;
  href: string;
}

const ProjectsWrapper = async ({
  id,
  title,
  picture,
  status,
  href,
}: Project) => {
  const blurData = await getBase64ImageUrl(picture.src);
  return (
    <Wrapper className="projectswrapper" htmlElement="section">
      <div className="projectswrapper__section">
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
            <NextImage
              src={picture.src}
              blurDataURL={blurData}
              alt={picture.alt}
            />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectsWrapper;
