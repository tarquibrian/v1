import React from "react";
import Wrapper from "./wrapper";
import Image, { StaticImageData } from "next/image";
import img from "../../public/img/banner-top.jpg";
import LineY from "./liney";

interface Project {
  id: string;
  title: string;
  desc: string;
  timeline: string;
  client: string;
  services: string[];
  picture: StaticImageData;
  challenge: string;
  result: string;
  solution: string;
  gallery: StaticImageData[];
  href: string;
  status: boolean;
  squarePicture: StaticImageData;
}

const ListWrapper = ({ title, squarePicture }: Project) => {
  return (
    <Wrapper className="listwrapper" htmlElement="section">
      <div className="listwrapper__section">
        <div className="listwrapper__section-picture">
          <div className="picture__content">
            <Image
              src={squarePicture}
              alt="picture project"
              placeholder="blur"
            />
          </div>
        </div>
        <LineY />
        <div className="listwrapper__section-info">
          <Wrapper className="info-title">
            <h4>{title}</h4>
          </Wrapper>
          <Wrapper className="info-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              iste earum esse beatae adipisci at est recusandae accusantium
              fugiat saepe veniam amet eius quam tenetur, impedit eveniet eos
              iure unde.
            </p>
          </Wrapper>
        </div>
      </div>
    </Wrapper>
  );
};

export default ListWrapper;
