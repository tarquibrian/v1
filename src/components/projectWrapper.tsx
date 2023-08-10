import React from "react";
import Wrapper from "./wrapper";
import img from "../../public/img/banner-top.jpg";
import Image from "next/image";
import LineY from "./liney";

const ProjectWrapper = () => {
  return (
    <Wrapper htmlElement="section" id="projectwrapper">
      <div className="projectwrapper__section">
        <Wrapper className="projectwrapper__section-title">
          <h3>Project title</h3>
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
            <div className="label">TIMELINE</div>
            <div className="desc">4 Weeks</div>
          </Wrapper>
          <Wrapper className="details__row">
            <div className="label">TIMELINE</div>
            <div className="desc">4 Weeks</div>
          </Wrapper>
          <Wrapper className="details__row">
            <div className="label">TIMELINE</div>
            <div className="desc">4 Weeks</div>
          </Wrapper>
        </div>
        <Wrapper className="projectwrapper__section-picture">
          <div className="picture__content">
            <Image src={img} alt="single project picutre" placeholder="blur" />
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
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio
                eius dolores rerum ducimus impedit illo in fugit consequuntur,
                iste voluptas neque placeat.
              </p>
            </div>
          </Wrapper>
          <Wrapper className="desc__row">
            <Wrapper className="row__sticky">
              <h5>GOAL</h5>
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
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio
                eius dolores rerum ducimus impedit illo in fugit consequuntur,
                iste voluptas neque placeat.
              </p>
            </div>
          </Wrapper>
          <div className="desc__row">
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
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Necessitatibus nam, eaque, nobis ab saepe sit eum distinctio
                eius dolores rerum ducimus impedit illo in fugit consequuntur,
                iste voluptas neque placeat.
              </p>
            </div>
          </div>
        </Wrapper>
        <div className="projectwrapper__section-gallery">
          <div className="gallery__content">
            <div className="one">
              <Wrapper className="picture__content">
                <Image src={img} alt="one" placeholder="blur" />
              </Wrapper>
              <div className="picture__content">
                <Image src={img} alt="one" placeholder="blur" />
              </div>
            </div>
            <LineY />
            <div className="two">
              <div className="picture__content">
                <Image src={img} alt="one" placeholder="blur" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectWrapper;
