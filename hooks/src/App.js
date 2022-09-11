import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    // hook을 조건문, 반복문, 중첩함수 내에서 호출 불가능
    // 따라서 useEffect 내에세 이벤트 바인딩을 막고 최종적으로 undefined를 리턴
    if (typeof onClick !== "function") {
      return;
    }
    // useEffect가 mount 되었을 때 if(element.current){~~~}를 call 한다.
    // useEffect 안에 함수를 넣으면 componentDidMount, componentDidUpdate 때 호출됨
    // 만약 밑에 dependency(==[])가 존재한다면 함수는 componentDidMount일 때만 호출
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    // useEffect는 componentWillUnmount 때 발생
    // 밑의 return 코드가 앞으로 발생할 일
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return typeof onClick !== "function" ? element : undefined;
};

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
