import React from "react";
import Wrapper from "./wrapper";
import Image from "next/image";
import img from "../../public/img/banner-top.jpg";

const ListWrapper = () => {
  return (
    <Wrapper className="listwrapper" htmlElement="section">
      <div className="listwrapper__section">
        <div className="listwrapper__section-picture">
          <div className="picture__content">
            <Image src={img} alt="picture project" placeholder="blur" />
          </div>
        </div>
        <div className="listwrapper__section-info">
          
        </div>
      </div>
    </Wrapper>
  );
};

export default ListWrapper;
