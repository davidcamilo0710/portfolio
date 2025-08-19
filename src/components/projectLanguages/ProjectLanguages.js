import React from "react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function ProjectLanguages(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-languages">
          {props.logos.map((logo) => {
            return (
              <li
                key={logo.name}
                className="software-skill-inline-languages"
                name={logo.skillName}
              >
                <span
                  className="iconify"
                  data-icon={logo.iconifyClass}
                  style={logo.color ? { color: logo.color } : {}}
                  data-inline="false"
                  title={logo.name}
                ></span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectLanguages;
