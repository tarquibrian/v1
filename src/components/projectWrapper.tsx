import React from "react";
import Wrapper from "./wrapper";
import LineY from "./liney";
import StatusIcon from "./icons/status";
import OpenIcon from "./icons/open";
import Link from "next/link";
import NextImage from "./NextImage";
import { getBase64ImageUrl } from "@/utils/base64image";

interface Project {
  label: string;
  title: string;
  desc: string;
  timeline: string;
  client: string;
  services: string[];
  picture: Picture;
  challenge: string;
  result: string;
  solution: string;
  gallery: Picture[];
  href: string;
  status: boolean;
  techStack: string[];
}

interface Picture {
  src: string;
  alt: string;
}

const ProjectWrapper = async ({
  label,
  title,
  desc,
  timeline,
  client,
  services,
  picture,
  // challenge,
  // solution,
  // result,
  gallery,
  href,
  status,
  techStack,
}: Project) => {
  // const blur = await getBase64ImageUrl(picture.src);
  console.log("proj", techStack);

  return (
    <Wrapper htmlElement="section" id="projectwrapper">
      <div className="projectwrapper__section">
        <Wrapper className="projectwrapper__section-title">
          <Link href={"/projects"} className="link-back">
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
              <path d="M19 12H5"></path>
              <path d="m12 19-7-7 7-7"></path>
            </svg>
          </Link>
          <LineY />
          <h3>{title}</h3>
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
        <div className="projectwrapper__section-details">
          <Wrapper className="details__title row__sticky">
            <h4>PROJECT DETAILS</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"></path>
            </svg>
          </Wrapper>
          <Wrapper className="details__row">
            <div className="label">CLIENT</div>
            <div className="desc">{client}</div>
          </Wrapper>
          <Wrapper className="details__row">
            <div className="label">TIMELINE</div>
            <div className="desc">{timeline}</div>
          </Wrapper>
          <Wrapper className="details__row">
            <div className="label">SERVICES</div>
            <div className="desc">
              {services.map((service, i) => (
                <div className="service" key={i}>
                  {`${service}`} <span>-</span>
                </div>
              ))}
            </div>
          </Wrapper>
          <Wrapper className="details__row">
            <div className="label">TECH STACK</div>
            <div className="desc">
              {techStack.map((tech, i) => (
                <div className="service" key={i}>
                  {`${tech}`} <span>-</span>
                </div>
              ))}
            </div>
          </Wrapper>
        </div>
        <Wrapper className="projectwrapper__section-picture">
          <div className="picture__content">
            <NextImage
              src={picture.src}
              alt={picture.alt}
              blurDataURL={await getBase64ImageUrl(picture.src)}
            />
          </div>
        </Wrapper>
        <Wrapper className="projectwrapper__section-desc">
          {/* <Wrapper className="desc__row">
            <Wrapper className="row__sticky">
              <h5>CHALLENGE</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"></path>
              </svg>
            </Wrapper>
            <div className="row__desc">
              <p>{challenge}</p>
            </div>
          </Wrapper>
          <Wrapper className="desc__row">
            <Wrapper className="row__sticky">
              <h5>SOLUTION</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"></path>
              </svg>
            </Wrapper>
            <div className="row__desc">
              <p>{solution}</p>
            </div>
          </Wrapper> */}
          <div className="desc__row">
            <Wrapper className="row__sticky">
              <h5>RESULT</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"></path>
              </svg>
            </Wrapper>
            <div className="row__desc">
              <p>{desc}</p>
            </div>
          </div>
        </Wrapper>
        <div className="projectwrapper__section-gallery">
          <div className="one">
            <div className="picture__contents">
              <NextImage
                src={gallery[0].src}
                alt={gallery[0].alt}
                blurDataURL={await getBase64ImageUrl(gallery[0].src)}
              />
            </div>
            <div className="picture__contents">
              <NextImage
                src={gallery[1].src}
                alt={gallery[1].alt}
                blurDataURL={await getBase64ImageUrl(gallery[1].src)}
              />
            </div>
          </div>
          <LineY />
          <div className="two">
            <div className="picture__contents">
              <NextImage
                src={gallery[2].src}
                alt={gallery[2].alt}
                blurDataURL={await getBase64ImageUrl(gallery[2].src)}
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectWrapper;
