import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import ReactDOM from "react-dom";

const useInput = (initualValue, validator) => {
  const [value, setValue] = useState(initualValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    // validator가 function이 아닌 다른 타입이 들어오면 validator(value)에서 에러가 발생하므로 함수인지 타입 확인
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length <= 10;
  // @가 포함되어 있으면 동작하지 x
  // const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
      {/* value={name.value} == {...name}
          ...name => name 안에 있는 모든 것들을 풀어줌
      */}
    </div>
  );
};

export default App;
