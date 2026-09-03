import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import SinglePageComponent from "../pages/SinglePage/SinglePageComponent";
import Splash from "../pages/splash/Splash";
import { settings } from "../portfolio.js";

export default function Main({ theme, setTheme }) {
  const pagina = <SinglePageComponent theme={theme} setTheme={setTheme} />;
  const splash = <Splash theme={theme} setTheme={setTheme} />;

  return (
    <div>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={settings.isSplash ? splash : pagina} />
          <Route path="/home" element={pagina} />
          {settings.isSplash && <Route path="/splash" element={splash} />}
        </Routes>
      </HashRouter>
    </div>
  );
}
