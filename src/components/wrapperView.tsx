import React from "react";
import Aside from "./aside";

const WrapperView = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="wrapperview">
      <div className="wrapperview__picture">
        <div className="picture__content">l</div>
      </div>
      <div className="wrapperview__content">
        <div className="wrapperview__content-aside">
          <div className="aside__content">aside</div>
        </div>
        <div className="wrapperview__content-main">
          <nav>nav</nav>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default WrapperView;
