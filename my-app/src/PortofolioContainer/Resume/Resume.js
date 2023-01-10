import React, { useState, useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import "./Resume.css";

export default function Resume(props) {
    const[selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const[carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
      if(screen.fadeInScreen !== props.id)
      return;
      Animations.animations.fadeInScreen(props.id);
  }
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
      return(
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'></div>
            <span>{props.heading ? props.heading : ''}</span>
            {props.fromDate && props.toDate ? (
              <div className='heading-date'>
                {props.fromDate + "-" + props.toDate }
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className='resume-sub-heading'>
            <span>{props.subHeading ? props.subHeading : ''}</span>
          </div>
          <div className='resume-heading-description'>
            <span>{props.description ? props.description : ''}</span>
          </div>
        </div>
      );
    };

    const resumeBullets = [
      {label: "Education", logoSrc : "education.svg"},
      {label: "Work History", logoSrc : "work-history.svg"},
      {label: "Programming skills", logoSrc : "programming-skills.svg"},
      {label: "Projects", logoSrc : "projects.svg"},
      {label: "Interests", logoSrc : "interests.svg"},
    ];

    const programmingSkillsDetails = [
      {skill: "Java Script", ratingPercentage: 85},
      {skill: "Java", ratingPercentage: 80},
      {skill: "HTML", ratingPercentage: 85},
      {skill: "CSS", ratingPercentage: 85},
      {skill: "React", ratingPercentage: 85},
      {skill: "Ruby", ratingPercentage: 85},
      {skill: "Phyton", ratingPercentage: 85},
    ];

    const projectsDetails = [
      {
        title: "Personal Portofolio Website", 
        duration: {fromDate: "2021", toDate: "2022"},
        description: "Portofolio Website untuk menunjukan detail tentang saya",
        subHeading: "Technology Used : React.js, Boostrap",
      },
      {
        title: "Develops Apps", 
        duration: {fromDate: "2020", toDate: "2022"},
        description: "aplikasi untuk menunjukan detail tentang kesehatan",
        subHeading: "Technology Used : Android Studio, Java",
      }
    ];

    const resumeDetails = [
      <div className='resume-screen-container' key="education">
        <ResumeHeading 
        heading = {"University of Brawijaya, Indonesia"}
        subHeading={"BACHELOR OF INFORMATION TECHNOLOGY"}
        fromDate={"2020"}
        toDate={"Present"}/>

      <ResumeHeading 
      heading= {"Senior High School, Indonesia"}
      subHeading={"MATH AND SCIENCE"}
      fromDate={"2016"}
      toDate={"2020"}/>
      </div>,

      <div className='resume-screen-container' key="work-experience">
        <div className='experience-container'>
        <ResumeHeading 
        heading = {"Ravins Tech"}
        subHeading={"FOUNDER AND DEVELOPER"}
        fromDate={"2020"}
        toDate={"present"}/>
        
        <div className='experience-description'>
          <span className='resume-description-text'>
            - One day im gonna be a founder and im gonna developing my apps with my self
          </span>
          <br/>
          <span className='resume-description-text'>
            Manage all my apps
          </span>
          <br/>
        </div>
        </div>
        </div>,
      

        <div className='resume-screen-container programming-skills-container' key='programming-skills'>
          {programmingSkillsDetails.map((skill, index)=>(
            <div className='skill-parent' key={index}>
              <div className='heading-bullet'></div>
              <span>{skill.skill}</span>
              <div className='skill-percentage'>
                <div style={{width: skill.ratingPercentage + "%"}} 
                className='active-percentage-bar'>
                </div>
              </div>
            </div>
          ))}
        </div>,

        <div className='resume-screen-container' key='propjects'>
            {projectsDetails.map((projectsDetails, index)=>(
              <ResumeHeading
              key={index}
              heading={projectsDetails.title}
              subHeading={projectsDetails.subHeading}
              description={projectsDetails.description}
              fromDate={projectsDetails.duration.fromDate}
              toDate={projectsDetails.duration.toDate}/>
            ))}
        </div>,
        <div className='resume-screen-container' key='interests'>
          <ResumeHeading
          heading='Sport'
          description='Saya suka berolahraga khususnya bermain badminton dan futsal'
          />
          <ResumeHeading
          heading='Music'
          description='Saya suka bermain musik yaitu gitar'
          />
          <ResumeHeading
          heading='Games'
          description='Saya suka mengisi waktu luang saya dalam bermain game diantaranya mobile legend'
          />
        </div>,
    ];

    const handleCarousal = (index)=>{
      let offsetHeight = 360;
      let newCarousalOffset = {
        style: {transform: "translateY("+ index * offsetHeight * -1 + "px)"},
      };
      setCarousalOffsetStyle(newCarousalOffset);
      setSelectedBulletIndex(index);
    };

    const getBullets = () =>{
      return resumeBullets.map((bullet, index) =>(
        <div onClick={()=> handleCarousal(index)} 
        className={index===selectedBulletIndex? "bullet selected-bullet" : "bullet"}
        key={index}
        >
          <img className='bullet-logo' 
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt='B'/>
          <span className='bullet-label'>{bullet.label}</span>
        </div>
      ))
    }

    const getResumeScreens = () =>{
      return(
        <div style={carousalOffsetStyle.style}
        className='resume-details-carousal'>
          {resumeDetails.map((ResumeDetail) => ResumeDetail)}
        </div>
      );
    };

  useEffect(()=>{
    return() => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className= 'resume-container screen-container ' id={props.id || ""}>
        <div className='resume-content'>
            <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
            <div className='resume-card'>
              <div className='resume-bullets'>
                <div className='bullet-container'>
                  <div className='bullet-icons'></div>
                  <div className='bullets'>{getBullets()}</div>
                </div>
              </div>
              <div className='resume-bullet-details'> {getResumeScreens()}</div>
            </div>
        </div>
    </div>
  );
};

