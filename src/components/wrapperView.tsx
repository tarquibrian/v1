import React from "react";
import Aside from "./aside";
import Link from "next/link";

const WrapperView = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="wrapperview">
      <div className="wrapperview__picture">
        <div className="picture__content">l</div>
      </div>
      <div className="wrapperview__content">
        <div className="wrapperview__content-aside">
          <div className="aside__content">
            <div className="aside__content-picture">
              <div className="picture__content">p</div>
            </div>
            <div className="aside__content-header">
              <header>
                <h1>Brian Tarqui Rojas</h1>
                <h2>Full Stack Developer</h2>{" "}
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                  unde aspernatur, praesentium velit ea reiciendis suscipit
                </p>
              </header>

              <div className="socials">
                <div className="">a</div>
                <div className="">a</div>
                <div className="">a</div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapperview__content-main">
          <nav>
            <Link href={"/"}>
              <span>Posts</span>
            </Link>
            <Link href={"/"}>
              <span>Projects</span>
            </Link>
            <Link href={"/"}>
              <span>Studio</span>
            </Link>
            <Link href={"/"}>
              <span>Contact</span>
            </Link>
          </nav>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default WrapperView;
