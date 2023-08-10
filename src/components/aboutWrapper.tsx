import React from "react";
import Wrapper from "./wrapper";
import Link from "next/link";

const AboutWrapper = () => {
  return (
    <Wrapper htmlElement="section" id="about">
      <div className="aboutwrapper__section">
        <p>
          I am a person who has a lot of passion for the world of technology and
          I recently got my degree in Systems Engineering. During the last years
          of my career I was self-taught in depth training in web development,
          interface design and user experience. I am responsible, curious and
          detail-oriented, as well as being able to function as a team under
          pressure and by objectives.
        </p>
        <p>
          My focus is fullstack web design and development and I keep up with
          the latest news, trends and updates in the web environment. This
          allows me to implement solid and innovative solutions in{" "}
          <Link href={"/projects"}>every project I do.</Link>
        </p>
        <p>
          Currently, I carry out my work independently and carried out various
          projects dedicated to both{" "}
          <a
            href="https://zonustech.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            small companies
          </a>{" "}
          with great aspirations and{" "}
          <a
            href="https://v2-sigma-eight.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            entrepreneurs
          </a>{" "}
          who are taking their first steps in the world of technology.
        </p>
      </div>
    </Wrapper>
  );
};

export default AboutWrapper;
