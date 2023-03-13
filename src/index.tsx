import React from "react";
import ReactDOM from "react-dom";
import "./styles/header.scss";
import "./styles/main.scss";

const App = () => (
  <h1>
    My React and TypeScript App!!{" "}
    {new Date().toLocaleDateString()}
  </h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
