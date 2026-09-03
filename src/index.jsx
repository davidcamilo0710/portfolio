import React from "react";
import { createRoot } from "react-dom/client";
import { BaseProvider, DarkTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import "./index.css";
import App from "./App";
import "./assests/font-awesome/css/all.css";

const engine = new Styletron();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <BaseProvider theme={DarkTheme}>
        <App />
      </BaseProvider>
    </StyletronProvider>
  </React.StrictMode>,
);
