import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";
import PDF from "../../assets/Resume/CV_RaihanAlfarisi(1).pdf"

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  }; 
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
  const SCREEN_CONSTSANTS = {
    description:
      "Fresh Graduate of Information Technology at Brawijaya University who experienced in Back End with (Golang and Node Js) Programming also specializing in learning HTML, CSS, Javascript, React JS, Java, PHP, MySQL. Have finished my KMPF UNJ's first freelance website project and currently handling Green Welfare's Back End Website project. I'm such a fast learner and self-motivated person who love to work individually or team and looking further to develop my skills with professional experiences.",
    highlights: {
      bullets: ["Back End Developer", "Fullstack Developer", "Golang Developer"],
      heading: "Here are a Few Highlights:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container " id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"AboutMe"} subHeading={"Why Choose Me"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                Hire Me
              </button>
              <a
                href={PDF}
                download="raihan CV-Raihan-Alfarisi.pdf"
              >
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
