import React from "react";
import "./SoftwareSkill.css";

function SoftwareSkill(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo) => {
            return (
              <li
                key={logo.skillName}
                className="software-skill-inline"
                name={logo.skillName}
              >
                <span
                  className="iconify"
                  data-icon={logo.fontAwesomeClassname}
                  style={logo.style}
                  data-inline="false"
                  title={logo.skillName}
                ></span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SoftwareSkill;
