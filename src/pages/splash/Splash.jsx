import React, { useEffect, useState } from "react";
import "./Splash.css";
import { Navigate } from "react-router-dom";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="loading">
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
      </div>
    </div>
  );
}

function Splash(props) {
  const [redirect, setRedirect] = useState(false);

  // en un efecto, y con limpieza: antes se relanzaba en cada render
  useEffect(() => {
    const t = setTimeout(() => setRedirect(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return redirect ? (
    <Navigate to="/home" replace />
  ) : (
    <AnimatedSplash theme={props.theme} />
  );
}

export default Splash;
