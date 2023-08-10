import React from "react";
import Wrapper from "./wrapper";
import LineY from "./liney";

const ExperienceWrapper = () => {
  return (
    <Wrapper htmlElement="section" id="experience">
      <div className="experiencewrapper__section">
        <Wrapper>
          <div className="experiencewrapper__section-title">
            <h3>EXPERIENCE</h3>
          </div>
        </Wrapper>
        <div className="experiencewrapper__section-list">
          <Wrapper>
            <div className="list__header">
              <div className="list__header-year">2022</div>
              <LineY />
              <div className="list__header-title">Experience title</div>
            </div>
          </Wrapper>
          <Wrapper>2</Wrapper>
        </div>
      </div>
    </Wrapper>
  );
};

export default ExperienceWrapper;
