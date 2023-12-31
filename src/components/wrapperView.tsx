"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Wrapper from "./wrapper";
import banner from "../../public/img/banner-top.jpg";
import Image from "next/image";
import LineY from "./liney";
import picture from "../../public/img/pf-white.jpg";
import LinkedinIcon from "./icons/linkedin";
import GithubIcon from "./icons/github";
import DribbbleIcon from "./icons/dribbble";
import OpenIcon from "./icons/open";
import BehanceIcon from "./icons/behance";
import Navbar from "./navbar";
import Footer from "./footer";

const WrapperView = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleOnMouseMove = (e: MouseEvent) => {
    const rect = ref?.current?.getBoundingClientRect(),
      x = e?.clientX - (rect?.left || 0),
      y = e?.clientY - (rect?.top || 0);

    ref?.current?.style?.setProperty("--mouse1-x", `${x}px`);
    ref?.current?.style?.setProperty("--mouse1-y", `${y}px`);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleOnMouseMove);
  }, []);

  return (
    <div id="wrapperview" ref={ref}>
      <Wrapper className="wrapperview__picture">
        <div className="picture__content">
          <Image src={banner} alt="picture top banner" placeholder="blur" />
        </div>
      </Wrapper>
      <Wrapper className="wrapperview__content">
        <div className="wrapperview__content-aside">
          <div className="aside__content">
            <div className="aside__content-sticky">
              <Wrapper>
                <div className="sticky__header">
                  <div className="header__picture">
                    <div className="picture__content">
                      <Image
                        src={picture}
                        alt="picture profile"
                        placeholder="blur"
                      />
                    </div>
                  </div>
                  <LineY />
                  <div className="header__title">
                    <h1>BRIAN TARQUI</h1>
                    <h2>Digital Freelancer</h2>
                  </div>
                </div>
              </Wrapper>
              <Wrapper>
                <div className="sticky__profile">
                  <div className="profile__content">
                    <h3>Web Developer</h3>
                  </div>
                  <LineY />
                  <div className="profile__content">
                    <h3>UX/UI Designer</h3>
                  </div>
                  <LineY />
                  <div className="profile__content">
                    <h3>System Engineer</h3>
                  </div>
                </div>
              </Wrapper>
              <Wrapper>
                <div className="sticky__desc">
                  <p>
                    Crafting unique digital products and web experiences is my
                    expertise, making the online world accessible to everyone.
                    Let's collaborate to build a more inclusive digital
                    landscape.
                  </p>
                </div>
              </Wrapper>
              <Wrapper className="content__row">
                <div className="label">CONTACT DETAILS</div>
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"></path>
                </svg>
              </Wrapper>
              <Wrapper>
                <div className="sticky__email contact__detail">
                  <div className="sticky__email-label">
                    <div className="">EMAIL</div>
                  </div>
                  <div className="sticky__email-link">
                    <a
                      href="mailto:tarquibrian@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      tarquibrian@gmail.com
                      <OpenIcon />
                    </a>
                  </div>
                </div>
              </Wrapper>
              <Wrapper>
                <div className="sticky__contact contact__detail">
                  <div className="sticky__contact-label">
                    <div className="">SOCIAL</div>
                  </div>
                  <div className="sticky__contact-icons">
                    <a
                      href="https://www.linkedin.com/in/tarquibrian/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedinIcon />
                    </a>
                    <a
                      href="https://github.com/tarquibrian"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon />
                    </a>
                    <a
                      href="https://dribbble.com/tarquibrian"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DribbbleIcon />
                    </a>
                    <a
                      href="https://www.behance.net/briantarqui"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BehanceIcon />
                    </a>
                  </div>
                </div>
              </Wrapper>
              <Wrapper>
                <div className="sticky__resume contact__detail">
                  <div className="sticky__resume-label">
                    <div className="">MY RESUME</div>
                  </div>
                  <div className="sticky__resume-link">
                    <Link
                      href="resumeV1en.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="resume link"
                    >
                      resume
                      <OpenIcon />
                    </Link>
                  </div>
                </div>
              </Wrapper>
            </div>
          </div>
          <LineY view={false} className="aside-line" />
        </div>
        <div className="wrapperview__content-main">
          <Wrapper className="nav" id="navbar">
            <Navbar />
          </Wrapper>
          <main>{children}</main>
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default WrapperView;
