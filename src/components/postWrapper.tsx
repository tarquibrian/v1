import React from "react";
import Wrapper from "./wrapper";

const PostWrapper = () => {
  return (
    <Wrapper htmlElement="section" id="postwrapper">
      <div className="postwrapper__section">
        <div className="postwrapper__section-header">
          <div className="header__author">
            <div className="header__author-picture">P</div>
            <div className="header__author-name">Brian Tarqui Rojas</div>
          </div>
          <div className="header__date">July 2023</div>
        </div>
        <div className="postwrapper__section-picture">
          <div className="picture__content">asdf</div>
        </div>
        <div className="postwrapper__section-desc">asd</div>
      </div>
    </Wrapper>
  );
};

export default PostWrapper;
