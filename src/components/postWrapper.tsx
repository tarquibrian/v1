"use client";
import React, { useState, useEffect } from "react";
import Wrapper from "./wrapper";
import author from "../../public/img/pf-white.jpg";
import post from "../../public/img/banner-top.jpg";
import Image from "next/image";
import HeartIcon from "./icons/heart";
import FeedbackIcon from "./icons/feedback";
import LineY from "./liney";
import ShareIcon from "./icons/share";

const PostWrapper = () => {
  const [isActive, setIsActive] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [feedbackClick, setFeedbackClick] = useState(false);
  const active = () => {
    if (!isActive) {
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 1000);
    }
  };

  return (
    <Wrapper htmlElement="section" id="postwrapper">
      <div className="postwrapper__section">
        <Wrapper>
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
              <h4>Post Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                nihil alias quas? Quidem, accusantium quae dolorem fuga iste
                tempore corporis aliquam laudantium cum, minus voluptas
                expedita, ut nostrum
              </p>
            </div>
          </div>
        </Wrapper>

        <Wrapper className="postwrapper__section-picture">
          <div className="picture__content" onDoubleClick={() => active()}>
            <Image src={post} alt="picture post" placeholder="blur" />
            <div className={`icon ${isActive ? "like" : ""}`}>
              <HeartIcon />
            </div>
          </div>
        </Wrapper>
        <div className="postwrapper__section-options">
          <div className="options__content">
            <div className="box content__like">
              <button
                className={`heart__icon ${clicked ? "click" : ""}`}
                onClick={() => {
                  active();
                  setClicked(true);
                }}
              >
                <HeartIcon />
              </button>
            </div>
            <LineY />
            <div className="box content__comment">
              <input
                type="text"
                name="comment"
                id="comment"
                placeholder="Give me your feedback"
              />
            </div>
            <LineY />
            <div className="box content__send">
              <button
                className={`feedback__icon ${feedbackClick ? "click" : ""}`}
                onClick={() => setFeedbackClick(true)}
              >
                <FeedbackIcon />
              </button>
            </div>
            <LineY />
            <div className="box content__share">
              <button className={`share__icon`}>
                <ShareIcon />
              </button>
            </div>
            {/* <button
              className={`heart__icon ${clicked ? "click" : ""}`}
              onClick={() => {
                active();
                setClicked(true);
              }}
            >
              <HeartIcon />
            </button>
            <div className="feedback">
              <input
                type="text"
                name="desd"
                id="desc"
                placeholder="Give me your feedback"
              />
              <button
                className={`feedback__icon ${feedbackClick ? "click" : ""}`}
                onClick={() => setFeedbackClick(true)}
              >
                <FeedbackIcon />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PostWrapper;
