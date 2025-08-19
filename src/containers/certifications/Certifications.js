import React, { useState } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import { style } from "glamor";

function Certifications(props) {
  const theme = props.theme;
  const [showAll, setShowAll] = useState(false);

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  const certificationsToShow = showAll
    ? certifications.certifications
    : certifications.certifications.slice(0, 9);

  return (
    <div className="main" id="certs">
      <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="certs-header" style={{ color: theme.text }}>
            Certifications
          </h1>
        </Fade>
      </div>
      <div className="certs-body-div">
        {certificationsToShow.map((cert) => {
          return (
            <CertificationCard
              key={cert.title}
              certificate={cert}
              theme={theme}
            />
          );
        })}
      </div>
      {certifications.certifications.length > 9 && (
        <div className="certs-toggle-btn-div">
          <button
            {...styles}
            className="general-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Ver Menos" : "Mostrar Todos"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Certifications;
