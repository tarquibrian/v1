import React from "react";
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

const WrapperView = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="wrapperview">
      <Wrapper className="wrapperview__picture">
        <div className="picture__content">
          <Image src={banner} alt="banner top picture" placeholder="blur" />
        </div>
      </Wrapper>
      <div className="wrapperview__content">
        <div className="wrapperview__content-aside">
          <div className="aside__content">
            <div className="aside__content-sticky">
              <Wrapper>
                <div className="sticky__header">
                  <div className="header__picture">
                    <div className="picture__content">
                      <Image
                        src={picture}
                        alt="picture profile content"
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error et assumenda aut enim tempore culpa odio rerum. Totam
                    sunt voluptas laborum! Quidem doloribus aliquam
                    necessitatibus doloremque obcaecati impedit quas optio.
                  </p>
                </div>
              </Wrapper>
              {/* <Wrapper>
                <h2>CONTACT</h2>
              </Wrapper> */}
              <Wrapper>
                <div className="sticky__contact">
                  {/* <div className="contact-link">tarquibrian@gmail.com</div> */}
                  {/* <div className="contact-link">+591 63909428</div> */}
                  <div className="sticky__contact-label">
                    <div className="">SOCIAL</div>
                  </div>
                  <div className="sticky__contact-icons">
                    <EmailIcon />
                    <LinkedinIcon />
                    <GithubIcon />
                    <DribbbleIcon />
                  </div>
                </div>
              </Wrapper>
              <Wrapper>
                <div className="sticky__resume">
                  <div className="sticky__resume-label">
                    <div className="">MY RESUME</div>
                  </div>
                  <div className="sticky__resume-link">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      resume
                    </a>
                  </div>
                </div>
              </Wrapper>
            </div>
          </div>
          <LineY />
        </div>
        <div className="wrapperview__content-main">
          <Wrapper className="nav">
            <nav>
              <Link href={"/"}>
                <span>POSTS</span>
              </Link>
              <LineY />
              <Link href={"/projects"}>
                <span>PROJECTS</span>
              </Link>
              <LineY />
              <Link href={"/"}>
                <span>STUDIO</span>
              </Link>
            </nav>
          </Wrapper>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default WrapperView;
