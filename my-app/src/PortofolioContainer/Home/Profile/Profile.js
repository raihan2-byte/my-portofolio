import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";
import PDF from "../../../assets/Resume/CV_RaihanAlfarisi(1).pdf"

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://www.github.com/raihan2-byte/">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.instagram.com/raihanalfarisi2/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/raihan-alfarisi-a155bb217/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, Iam <span className="highlighted-text">Raihan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              {/* <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Back-End Development Enthusiast",
                    1000,
                    "Freelance Website Developer",
                    1000,
                    "fast learner",
                    1000,
                    // "Amiin Ya Allah",1000
                  ]}
                />
              </h1> */}
              <span className="profile-role-tagline">
                Fresh Graduate Information Technology at Brawijaya
                University | Director of Technology at Green Welfare Indonesia |
                Freelance Website Developer | Back-End Development Enthusiast{" "}
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a
              href={PDF}
              download="CV_RaihanAlfarisi(1).pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
