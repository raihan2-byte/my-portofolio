import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Experience History", logoSrc: "work-history.svg" },
    // { label: "Programming skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "Golang", ratingPercentage: 85 },
    { skill: "Node JS", ratingPercentage: 80 },
    { skill: "Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "React", ratingPercentage: 80 },
    { skill: "Tailwind", ratingPercentage: 85 },
    { skill: "PHP", ratingPercentage: 70 },
  ];

  const projectsDetails = [
    {
      title: "Green Welfare Indonesia",
      duration: { fromDate: "Jul 2023", toDate: "Present" },
      description: "integrated Midtrans for payments and donations, optimized SQL database performance using ACID properties, and secured access with JWT authentication and authorization.",
      subHeading: "Technology Used : Golang, Gorm, Mysql, Gin",
    },
    {
      title: "Annisa Salon Muslimah",
      duration: { fromDate: "Oct 2023", toDate: "Des 2024" },
      description: "Collaborated to align technical solutions with business goals, designed and maintained a Golang backend with efficient SQL structures, and optimized the UI using ReactJS and Tailwind CSS for a modern, responsive experience.",
      subHeading: "Technology Used : React JS, Tailwind, Golang, Mysql",
    },
    {
      title: "KMPF UNJ 204",
      duration: { fromDate: "Jul", toDate: "Sep 2023" },
      description: "Built efficient backend systems with Golang and SQL and implemented a dynamic, responsive front-end. Website has been successfully viewed by over 500 users in three months.",
      subHeading: "Technology Used : React JS, Scss, Golang, Mysql, Gin, Gorm",
    },
    {
      title: "Building API Shopping Store With Hacktiv8",
      duration: { fromDate: "May", toDate: "Jun 2023" },
      description: "Developed a Golang web shop API with efficient CRUD operations. Optimized PostgreSQL for fast data access and implemented role-based access control with authentication and authorization.",
      subHeading: "Technology Used : Golang, Mysql, Gin",
    },
    
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Brawijaya, Indonesia"}
        subHeading={"BACHELOR OF INFORMATION TECHNOLOGY"}
        fromDate={"2020"}
        toDate={"2024"}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Green Welfare Indonesia"}
          subHeading={"Director Of Technology"}
          fromDate={"Des 2024 "}
          toDate={" present"}
        />

        <div className="experience-description">
          <span className="resume-description-text">
            Improved GreenWelfare's web functionality by overseeing new feature
            development and ensuring smooth collaboration within the Technology
            team. Leading a diverse team of seven developers and designers, I
            boosted performance and project success through effective
            communication and a positive work environment.
          </span>
          <br />
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Hacktiv8"}
          subHeading={"Golang Independent Study for Back End Programmers"}
          fromDate={"Feb "}
          toDate={" Jun 2023"}
        />

        <div className="experience-description">
          <span className="resume-description-text">
            Developed expertise in dynamic web applications with Golang through
            dedicated learning and practice, built a REST API for website
            development using Golang, and strengthened my database management
            skills with hands-on experience in Golang backend programming.
          </span>
          <br />
        </div>
      </div>
      
    </div>,

    // <div
    //   className="resume-screen-container programming-skills-container"
    //   key="programming-skills"
    // >
    //   {programmingSkillsDetails.map((skill, index) => (
    //     <div className="skill-parent" key={index}>
    //       <div className="heading-bullet"></div>
    //       <span>{skill.skill}</span>
    //       <div className="skill-percentage">
    //         <div
    //           style={{ width: skill.ratingPercentage + "%" }}
    //           className="active-percentage-bar"
    //         ></div>
    //       </div>
    //     </div>
    //   ))}
    // </div>,

    <div className="resume-screen-container" key="propjects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Sport"
        description="Saya suka berolahraga khususnya bermain badminton dan futsal"
      />
      <ResumeHeading
        heading="Music"
        description="Saya suka bermain musik yaitu gitar"
      />
      <ResumeHeading
        heading="Games"
        description="Saya suka mengisi waktu luang saya dalam bermain game diantaranya mobile legend"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 460;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details"> {getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
