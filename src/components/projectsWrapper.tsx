import React from "react";
import Wrapper from "./wrapper";
import Image, { StaticImageData } from "next/image";
import LineY from "./liney";
import OpenIcon from "./icons/open";
import Link from "next/link";
import StatusIcon from "./icons/status";
import NextImage from "./NextImage";
import { getBase64ImageUrl } from "@/utils/base64image";

interface Project {
  id: string;
  title: string;
  picture: string;
  status: boolean;
  href: string;
  blurData: string;
}

const ProjectsWrapper = async ({
  id,
  title,
  picture,
  status,
  href,
  blurData,
}: Project) => {
  const Blur = await getBase64ImageUrl(picture);
  const getsized = async () => {
    const r = await fetch(
      `https://res.cloudinary.com/dskypy0xt/image/upload/v1692899385/${picture}`
    ).then((res) => console.log(res));
  };
  console.log(getsized());
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
              src={picture}
              blurDataURL={Blur}
              width={1000}
              height={600}
            />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectsWrapper;
