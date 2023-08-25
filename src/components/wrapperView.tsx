"use client";
import React, { useEffect, useState, useRef } from "react";
import Aside from "./aside";
import Link from "next/link";
import Wrapper from "./wrapper";
import banner from "../../public/img/banner-top.jpg";
import Image from "next/image";
import LineY from "./liney";
import picture from "../../public/img/pf-white.jpg";
import EmailIcon from "./icons/email";
import LinkedinIcon from "./icons/linkedin";
import GithubIcon from "./icons/github";
import DribbbleIcon from "./icons/dribbble";
import OpenIcon from "./icons/open";
import BehanceIcon from "./icons/behance";
import Navbar from "./navbar";
import Footer from "./footer";
import NextImage from "./NextImage";

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
          <NextImage
            src={
              "https://res.cloudinary.com/dskypy0xt/image/upload/v1692899394/banner-top_enhqba.jpg"
            }
            width={1920}
            height={1080}
            // blurDataURL={
            //   "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPjxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScvPjwvZmlsdGVyPjxpbWFnZSBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSdub25lJyBmaWx0ZXI9J3VybCgjYiknIHg9JzAnIHk9JzAnIGhlaWdodD0nMTAwJScgd2lkdGg9JzEwMCUnIGhyZWY9J2RhdGE6aW1hZ2Uvd2VicDtiYXNlNjQsVWtsR1Jrb0FBQUJYUlVKUVZsQTRJRDRBQUFEUUFRQ2RBU29JQUFVQUFrQTRKWWdDZEFFZmc2WmtBQUQrK2c0T1pINzdIMW5yVzhhektLdGlDS2ZTeEgyczFnZ21ZMHh5UUJjWnB6cHJsa0FBQUE9PScvPjwvc3ZnPg=="
            // }
            blurDataURL="data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAACwAQCdASoIAAYAAkA4JaAAAp3Knm7AAP7m+4r6ad4PMiaEDu4I5UtiCq31gL96DLt7auvN/6ci67+VWEVu/Tf/tbrX+P3nuTu03a6kvZ9dT/BdwAA="
            label="picture banner"
          />
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
                      <NextImage
                        src={picture}
                        blurDataURL="data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoIAAgAAkA4JaQAAxf/LteA4AD+6K9XkBLkvdtlYOzlHYsIHBJvObj1L89oH47YjgYEliupwshT0U0LXeCCeFAcAAA="
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
          <Wrapper className="nav">
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
