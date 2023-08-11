import React from "react";
import Wrapper from "./wrapper";
import Image, { StaticImageData } from "next/image";
import LineY from "./liney";
import StatusIcon from "./icons/status";
import OpenIcon from "./icons/open";

interface Project {
  id: string;
  title: string;
  desc: string;
  timeline: string;
  client: string;
  services: string[];
  picture: StaticImageData;
  challenge: string;
  result: string;
  solution: string;
  gallery: StaticImageData[];
  href: string;
  status: boolean;
}

const ProjectWrapper = ({
  id,
  title,
  desc,
  timeline,
  client,
  services,
  picture,
  challenge,
  solution,
  result,
  gallery,
  href,
  status,
}: Project) => {
  return (
    <Wrapper htmlElement="section" id="projectwrapper">
      <div className="projectwrapper__section">
        <Wrapper className="projectwrapper__section-title">
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
              {services.map((service) => (
                <span>{service}</span>
              ))}
            </div>
          </Wrapper>
        </div>
        <Wrapper className="projectwrapper__section-picture">
          <div className="picture__content">
            <Image
              src={picture}
              alt="single project picutre"
              placeholder="blur"
            />
          </div>
        </Wrapper>
        <Wrapper className="projectwrapper__section-desc">
          <Wrapper className="desc__row">
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
          </Wrapper>
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
              <p>{result}</p>
            </div>
          </div>
        </Wrapper>
        <div className="projectwrapper__section-gallery">
          <div className="gallery__content">
            <div className="one">
              <Wrapper className="picture__content">
                <Image src={gallery[0]} alt="one" placeholder="blur" />
              </Wrapper>
              <div className="picture__content">
                <Image src={gallery[1]} alt="one" placeholder="blur" />
              </div>
            </div>
            <LineY />
            <div className="two">
              <div className="picture__content">
                <Image src={gallery[2]} alt="one" placeholder="blur" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectWrapper;
