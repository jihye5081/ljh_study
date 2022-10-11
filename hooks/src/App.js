import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const useComfirm = (message = "", callback) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      callback;
    }
  };
};

const App = () => {
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
};

export default App;
