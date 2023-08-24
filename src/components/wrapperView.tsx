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
          <Image
            src={
              "https://res.cloudinary.com/dskypy0xt/image/upload/v1692899394/banner-top_enhqba.jpg"
            }
            // src={banner}
            width={1920}
            height={1080}
            alt="banner top picture"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRi4HAABXRUJQVlA4WAoAAAAgAAAANQMAzgEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggQAUAAFBmAJ0BKjYDzwE+7Xa4VqmnJSOgCAEwHYlpbuFs75TxKLZAy/tNowSbE7ul50+wBPYB77ZOQ99snIe+2Tkf88oonOIi5OQ99snIfglTDyXoLsP5n/GcWBiXJyH7Rl9OV/0S4g/bLKr6HFC6wwORmww38QDRfeYw9AlLw0XEf43dmpWAq2xxDrKidd/vI1sw3isb6jW5ubd53hWU18Bu1FVpXx0tikD4DHSlQpqF+U59suoogwTXs5aQlVSRmekzF0S0rREAsCIGLjoIxXJxZeoLKgAX05DehupKi0folFkOj2cWxld2K4lM783Ys0Sy+FobiHiQYGvUwDhP3nqKoBW4qeJXyeUXcGvlerd7sqPNolYj6chxBXWVONZOAy3tZtRtzbkHxH7da5R7ZnNpc/eCIevvPOGX96OEp6G3Nr3BAv27iQ9c30Wji5f6lgpG+jYJdd56ihvn5H/PJyVzUKQwWsnkN3IiQ1pUJtOIvF0R1dpr1pFMdOQ991pO2vRTPrv31NE6PiPv5r5OsdwgMf3ZLtKgWS7cNvvd6ErkeL+3aXP1MeVPu+XIb0M6DqLSoFku2W3Pork40oLfXamxAFss715C5UD/WPUiLk5D32yv7KVhJ7Ig4PDcRbUlCoFV4DQEYS7SoFku14uTxK/J3K0R8h0hrS7z5LWv/sx4hbjSoYV2lQLJdrxfeTGygZA9XWqtO7y9l7RaP0gW40/20qBZLteLk5GKuVVvp92XNCl1FVMLLuAZlEntk5D32ych77ZOSkxdCGIAsQPo1xneeTkPfbJyHvtk5D4D9LuoXYebwqTDZZkKoAQD32ych77ZOQ+A/TeghUU0XnuAXdnieoUtubXi5OQ99snIe+sSuqcwCmV90lT9prRO6Q99snIe+2TkPfbbZTJfMkgLdaHai5QnRYl9LteLk5D32ych77ZPTKkGYKKY6gXUsfqRwgu0qBZLteLk5D322OVYocJbKQrgV88zECyXa8XJyHvtk5D1i0QKsvCIwRuFAY9m+JFpUCyXa8XJyHvtk5D33E6GqmNmVzGhmuedPbJyHvtk5D32ych78AQD9nKFyAZRK3qvg3a8XJyHvtk5D3pAAP76m4eE6O4FqJzYM4vueNVQZyjGPUSPurLFZe/t4pJqr5Y0peJzkIFiKcC7e0KSKN4lkMGrScOPHzvDdX98H3UXcapvSnde8nb7/fO0unexuvgZN1ynjOYiEsU2VEfi4BN362sXhFpnHjlFY1879m2kpAJN8ic+nhLDjMvRIMcuGSqBtSmdMqpge2MBR1p6+0+AgFKYkrUV+81xYsTk6/wWWyGrpCdF2n7X3Ctl8HrdvHy6Ct7gvdOndaPYXbw2ZaJUMtQtpBuVbdM7nvhtUqr4q6QbGEMFkBmwKo8OusIRwYe98NBMhP4iXkcKZn8gbBsQGcPnli5CwMJFD3UpPNi0o0y3XTTuCt0aXx8bozNjZVd2cLIfYLCacRleq2V7CqC/esI3CScFFKviyg79QxmtYX9t9HuA1KXX+tq0XXAD44J6OAmJSIJwGC85mb1+siyJIOEBKqKr1Owm/kqVzGv2WVvv1IPLpwGItTPRaaGwJi78iKEOlNU8Ab+Vjxm+cBEc4ih6MPsg45bDhWUhAcaWxUZjTDr01vBzJn9oGOj/KXq0nRewjCLSOfqHwANZo4pSacusSNcAElpYyAJq7wprI8IAypj2s3E2yYqtAIPjh/G20AAm7cgJhV+AALm68IeCLgARDgAAADLF+MQBIOABD7sT2guvAASart/Xk94AAAAAAA=="
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
