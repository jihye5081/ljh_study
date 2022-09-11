import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // useRef() ==> 우리의 component의 어떤 부분을 선택할 수 있는 방법
  const input = useRef();
  setTimeout(() => input.current.focus(), 5000);
  return (
    <div>
      <div>Hi</div>
      <input ref={input} placeholder="la" />
    </div>
  );
};

export default App;
