import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  // strictmode -> 개발 과정 중 안전을 위해 켜는 기능으로 배포시 자동으로 해제됨
  // <StrictMode>
  <App />,
  // </StrictMode>,
  document.getElementById("root")
);
