import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const sayHello = () => console.log("Hello");
  // useEffect(sayHello, ); => 이런식의 형태일 때만
  // useEffect는 ComponentDidMount, ComponentWillUnMount, ComponentDidUpdate 이다
  // useEffect가 sayHello를 component가 mount 되었을 때 실행, [number]가 바뀌면 update
  // 만약 배열 안이 비어있다면 변화에 상관없이 무조건 1번만 실행
  // useEffect(sayHello, [number]);
  useEffect(() => {
    sayHello();
  });
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  return (
    <div>
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

export default App;
