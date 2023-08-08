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
            <div className="aside__content-header"></div>
          </div>
        </div>
        <div className="wrapperview__content-main">
          <nav>
            <Link href={"/"}>
              <span>POSTS</span>
            </Link>
            <Link href={"/projects"}>
              <span>PROJECTS</span>
            </Link>
            <Link href={"/"}>
              <span>STUDIO</span>
            </Link>
          </nav>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default WrapperView;
