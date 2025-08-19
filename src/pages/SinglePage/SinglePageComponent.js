import React from "react";
import HeaderSinglePage from "../../components/header/HeaderSinglePage";
import Footer from "../../components/footer/Footer";

// Home section components
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";

// Education section components
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "../education/EducationImg";
import { Fade } from "react-reveal";

// Experience section components
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import { experience } from "../../portfolio.js";
import ExperienceImg from "../experience/ExperienceImg";

// Projects section components
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projectsHeader, projects } from "../../portfolio.js";
import ProjectsImg from "../projects/ProjectsImg";
import { style } from "glamor";

// Contact section components
import SocialMedia from "../../components/socialMedia/SocialMedia";
import BlogsImg from "../contact/BlogsImg";
import { greeting, contactPageData } from "../../portfolio.js";

import "./SinglePageComponent.css";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function SinglePageComponent(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="single-page-main">
      <HeaderSinglePage theme={props.theme} setTheme={props.setTheme} />

      {/* Home Section */}
      <section id="home" className="section">
        <Greeting theme={theme} />
        <Skills theme={theme} />
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
                <br />
                <a
                  {...styles}
                  className="general-btn"
                  href="https://public.tableau.com/app/profile/david.camilo.mu.oz.garcia"
                >
                  Visualizations (TableaU)
                </a>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {projects.data.map((repo, index) => {
            return <ProjectCard key={index} repo={repo} theme={theme} />;
          })}
        </div>
        <br />
        <br />
        <br />
        <a
          {...styles}
          className="general-btn"
          href="https://github.com/davidcamilo0710/"
        >
          More Projects (Github)
        </a>
        <br />
        <br />
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Basic Qualification and Certifications
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  I actively participate in hackathons and other tech-related
                  activities. Below are some of my major certifications.
                </p>
              </div>
            </div>
          </Fade>
          <Educations theme={theme} />
          <Certifications theme={theme} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  className="profile-pic"
                  src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia />
                <br />
                <br />
                <a
                  {...styles}
                  className="general-btn"
                  href={greeting.resumeLink}
                >
                  See my Resume
                </a>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <h1 className="blog-heading-text" style={{ color: theme.text }}>
                  {blogSection["title"]}
                </h1>
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {blogSection["subtitle"]}
                </p>
                <div className="blogsite-btn-div">
                  <a
                    {...styles}
                    className="general-btn"
                    href={blogSection.link}
                  >
                    Medium Blogs
                  </a>
                </div>
              </div>
              <div className="blog-heading-img-div">
                <BlogsImg theme={theme} />
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <Footer theme={theme} />
    </div>
  );
}

export default SinglePageComponent;
