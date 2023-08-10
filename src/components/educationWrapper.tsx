import React from "react";
import Wrapper from "./wrapper";
import LineY from "./liney";

const EducationWrapper = () => {
  return (
    <Wrapper id="education" htmlElement="section">
      <div className="experiencewrapper__section">
        <Wrapper>
          <div className="experiencewrapper__section-title">
            <h3>EDUCATION</h3>
          </div>
        </Wrapper>
        <div className="experiencewrapper__section-list">
          <Wrapper>
            <Wrapper className="list__header">
              <div className="list__header-year">2021 - 2022</div>
              <LineY />
              <div className="list__header-title">
                <h4>Developer - Municipality of Villa Rivero</h4>
              </div>
            </Wrapper>
            <div className="list__header-desc">
              <p>
                Development of a web application focused on the management of
                regional tourism, describing details such as: Analysis of the
                problematic situation and development of a new alternative model
                for the municipality. Use of geolocation for positioning of
                tourist sites using Google Maps Platform tools. Integration of
                progressive functionalities through PWA technology.Development,
                deployment and testing of the system.
              </p>
            </div>
          </Wrapper>
        </div>
      </div>
    </Wrapper>
  );
};

export default EducationWrapper;
