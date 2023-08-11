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
            <Wrapper className="list__header">
              <Wrapper id="year" className="list__header-year">2021 - 2022</Wrapper>
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
              <div className="desc__tech">
                <div className="tech">React</div>
                <div className="tech">JavaScript</div>
                <div className="tech">Styled Components</div>
                <div className="tech">NodeJS</div>
                <div className="tech">GMP</div>
                <div className="tech">JWT</div>
                <div className="tech">PWA</div>
              </div>
            </div>
          </Wrapper>
          <div>
            <Wrapper className="list__header">
              <Wrapper id="year" className="list__header-year">July - Dec 2021</Wrapper>
              <LineY />
              <div className="list__header-title">
                <h4>Internships at the Military School of Engineering</h4>
              </div>
            </Wrapper>
            <div className="list__header-desc">
              <p>
                Computer systems assistant with the main responsibility of
                managing and ensuring the optimal functioning of operating
                systems, as well as carrying out the precise and efficient
                configuration of internal networks. In this role, my focus was
                on ensuring that operating systems are up to date and fully
                operational, while working diligently to implement and maintain
                internal network configurations that allow for seamless and
                secure connectivity.
              </p>
              <div className="desc__tech">
                <div className="tech">Visual Studio</div>
                <div className="tech">.Net</div>
                <div className="tech">Wordpress</div>
                <div className="tech">MySQL</div>
                <div className="tech">Cisco Packet Tracer</div>
                <div className="tech">Microsoft Office</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ExperienceWrapper;
