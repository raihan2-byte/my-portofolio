import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";
import PDF from "../../assets/Resume/CV_RaihanAlfarisi_BackEnd.pdf"

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  }; 
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
  const SCREEN_CONSTSANTS = {
    description:
      "Software Engineer with experience in several development projects, specializing in back-end development using Golang and Java. I also have hands-on experience with front-end technologies such as HTML, CSS, JavaScript, and React.js, as well as proficiency in PHP, Node JS, Phyton, MySQL, and PostgreSQL. As a fast learner and self-motivated individual, i am known for adaptability skill that enable to learn new things quickly and enjoy working on a team or individually. I also eager to further develop my skills through professional experiences, especially in Back End Developer.",
    highlights: {
      bullets: ["Back End Developer", "Fullstack Developer", "Golang Developer", "Java Developer"],
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
