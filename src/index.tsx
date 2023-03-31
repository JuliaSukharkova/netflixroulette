import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Global, theme } from "./costants/costants";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </>
);
