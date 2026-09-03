import React, { useState } from "react";
import "./Header.css";
import { Fade } from "../../lib/reveal";
import { greeting } from "../../portfolio.js";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { style } from "../../lib/style";

function HeaderSinglePage(props) {
  const theme = props.theme;

  const themeButtonStyles = style({
    cursor: "pointer",
    height: "45px",
    width: "45px",
    marginRight: "5px",
    marginLeft: "15px",
    paddingTop: "5px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: props.theme.name === "light" ? "#7CD1F7" : "#292C3F",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${
        props.theme.name === "light" ? "#F7D774" : "#646464"
      }`,
    },
  });

  const resumeButtonStyles = style({
    cursor: "pointer",
    padding: "8px 16px",
    borderRadius: "25px",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: `${theme.accentBright}`,
    color: "white",
    fontSize: "14px",
    fontWeight: "600",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    textDecoration: "none",
    display: "flex",
    gap: "5px",
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
      transform: "translateY(-1px)",
    },
  });

  const [currTheme, setCurrTheme] = useState(props.theme);

  function changeTheme() {
    if (currTheme === "light") {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
      setCurrTheme("dark");
    } else {
      props.setTheme("light");
      localStorage.setItem("theme", "light");
      setCurrTheme("light");
    }
  }

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  const icon =
    props.theme.name === "dark" ? (
      <HiMoon
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    ) : (
      <CgSun
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    );

  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <div className="logo" onClick={() => scrollToSection("home")}>
            <span style={{ color: theme.text }}></span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}></span>
          </div>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <a
                href="#home"
                className="homei"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
                style={{
                  borderRadius: 5,
                  color: theme.text,
                  cursor: "pointer",
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="xp"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("experience");
                }}
                style={{
                  borderRadius: 5,
                  color: theme.text,
                  cursor: "pointer",
                }}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
                style={{
                  borderRadius: 5,
                  color: theme.text,
                  cursor: "pointer",
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="ec"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("education");
                }}
                style={{
                  borderRadius: 5,
                  color: theme.text,
                  cursor: "pointer",
                }}
              >
                Education & Certifications
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="cr"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                style={{
                  borderRadius: 5,
                  color: theme.text,
                  cursor: "pointer",
                }}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                {...resumeButtonStyles}
                href={greeting.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiDownload size={16} />
                CV
              </a>
            </li>
            <button {...themeButtonStyles} onClick={changeTheme}>
              {icon}
            </button>
          </ul>
        </header>
      </div>
    </Fade>
  );
}

export default HeaderSinglePage;
