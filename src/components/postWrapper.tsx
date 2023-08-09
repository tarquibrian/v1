import React from "react";
import Wrapper from "./wrapper";
import author from "../../public/img/pf-white.jpg";
import post from "../../public/img/banner-top.jpg";
import Image from "next/image";
import HeartIcon from "./icons/heart";
import FeedbackIcon from "./icons/feedback";

const PostWrapper = () => {
  return (
    <Wrapper htmlElement="section" id="postwrapper">
      <div className="postwrapper__section">
        <div className="top">
          <div className="postwrapper__section-header">
            <div className="header__picture">
              <div className="picture__content">
                <Image src={author} alt="author picture" placeholder="blur" />
              </div>
            </div>
            <div className="header__title">
              <div className="name">Brian Tarqui</div>
              <div className="date">July 2023</div>
            </div>
          </div>
          <div className="postwrapper__section-title">
            <h4>Title Post</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              nihil alias quas? Quidem, accusantium quae dolorem fuga iste
              tempore corporis aliquam laudantium cum, minus voluptas expedita,
              ut nostrum
            </p>
          </div>
        </div>

        <div className="postwrapper__section-picture">
          <div className="picture__content">
            <Image src={post} alt="picture post" placeholder="blur" />
          </div>
        </div>
        <div className="postwrapper__section-options">
          <div className="options__content">
            <div className="heart__icon">
              <HeartIcon />
            </div>
            <div className="feedback">
              <input
                type="text"
                name="desd"
                id="desc"
                placeholder="dame tu feedback"
              />
              <FeedbackIcon />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PostWrapper;
