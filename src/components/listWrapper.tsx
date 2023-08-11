import React from "react";
import Wrapper from "./wrapper";
import Image from "next/image";
import img from "../../public/img/banner-top.jpg";
import LineY from "./liney";

const ListWrapper = () => {
  return (
    <Wrapper className="listwrapper" htmlElement="section">
      <div className="listwrapper__section">
        <div className="listwrapper__section-picture">
          <div className="picture__content">
            <Image src={img} alt="picture project" placeholder="blur" />
          </div>
        </div>
        <LineY />
        <div className="listwrapper__section-info">
          <h4>Title proejct</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iure
            placeat libero doloremque soluta eum iusto repellat repellendus
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default ListWrapper;
