import React from "react";
import Wrapper from "./wrapper";
import LineY from "./liney";

const EducationWrapper = () => {
  return (
    <Wrapper id="education" htmlElement="section">
      <div className="educationwrapper__section">
        <Wrapper>
          <div className="educationwrapper__section-title">
            <h3>EDUCATION</h3>
          </div>
        </Wrapper>
        <div className="educationwrapper__section-list">
          <div>
            <Wrapper className="list__header">
              <div className="list__header-year">2017 - 2022</div>
              <LineY />
              <div className="list__header-title">
                <h4>EMI - Military School of Engineering</h4>
              </div>
            </Wrapper>
            <div className="list__header-desc">
              <p>
                I earned a Bachelor's degree in Systems Engineering, equipping
                me with versatile skills in technology, software development,
                and complex problem-solving. This knowledge empowers me to
                contribute effectively to the dynamic field of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default EducationWrapper;
