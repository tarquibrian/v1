import React from "react";
import Wrapper from "./wrapper";
import Image, { StaticImageData } from "next/image";
import img from "../../public/img/banner-top.jpg";
import LineY from "./liney";
import StatusIcon from "./icons/status";
import OpenIcon from "./icons/open";
import Link from "next/link";
import NextImage from "./NextImage";
import { getBase64ImageUrl } from "@/utils/base64image";

interface Project {
  id: string;
  title: string;
  desc?: string;
  timeline?: string;
  client?: string;
  services?: string[];
  year?: number;
  href: string;
  status: boolean;
  squarePicture: { src: string; alt: string };
}

const ListWrapper = async ({
  id,
  title,
  squarePicture,
  href,
  status,
  year,
  desc,
  services = [],
}: Project) => {
  return (
    <Wrapper className="listwrapper" htmlElement="section">
      <div className="listwrapper__section">
        <Link href={`/projects/${id}`} className="listwrapper__section-picture">
          <div className="picture__content">
            <NextImage
              src={squarePicture.src}
              alt="picture project"
              blurDataURL={await getBase64ImageUrl(squarePicture.src)}
            />
          </div>
        </Link>
        <LineY />
        <div className="listwrapper__section-info">
          <Wrapper className="info-title">
            <Link href={`/projects/${id}`} className="title-content">
              <h4>{title}</h4>
            </Link>
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
          <Wrapper className="info-desc">
            <p>{desc}</p>
          </Wrapper>
          <div className="info__details">
            <div className="info__details-row">
              <div className="label">Services</div>
              <div className="label-content">
                <span>{services[0]}</span>-<span>{services[1]}</span>
              </div>
            </div>
            <div className="info__details-row">
              <div className="label">Year</div>
              <div className="label-content">{year}</div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ListWrapper;
