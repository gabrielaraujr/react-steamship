import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import GlobalStyle from "./assets/styles/global";

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
