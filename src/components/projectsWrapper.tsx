import React from "react";
import Wrapper from "./wrapper";

const ProjectsWrapper = () => {
  return (
    <Wrapper className="projectswrapper" htmlElement="section">
      <div className="projectswrapper__section">
        <Wrapper>
          <div className="projectswrapper__section-top">TOP</div>
        </Wrapper>
        <Wrapper>
          <div className="projectswrapper__section-picture">PICTURE</div>
        </Wrapper>
        {/* <Wrapper> */}
        <div className="projectswrapper__section-details">DETAILS</div>
        {/* </Wrapper> */}
      </div>
    </Wrapper>
  );
};

export default ProjectsWrapper;
