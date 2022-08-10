// import { useState, useEffect } from "react";

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);
//   // useEffect => 2개의 인자를 갖는 함수, 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 hook
//   // 첫 번째 인자는 실행시키고 싶은 코드
//   // 두 번째 인자는 dependencies(== react.js가 지켜보아야하는 것들) -> 지켜보고 변화할 때 react.js가 코드를 실행
//   // const iRunOnlyOnce = () => {
//   //   console.log("i run only once");
//   // };
//   useEffect(() => {
//     // 두 번째 인자가 비어있으므로(react.js가 지켜볼 대상이 없음을 의미) 딱 한 번만 실행
//     console.log("i run only once");
//   }, []);
//   // 시작할 때, keyword가 변화할 때 한 번 실행
//   // [keyword] => keyword가 변화할 때마다 실행됨
//   useEffect(() => {
//     console.log("i run when 'keyword' changes.");
//   }, [keyword]);
//   useEffect(() => {
//     console.log("i run when 'counter' changes.");
//   }, [counter]);
//   useEffect(() => {
//     console.log("i run when keyword & counter changes.");
//   }, [keyword, counter]);
//   return (
//     <div>
//       <input
//         value={keyword}
//         onChange={onChange}
//         type="text"
//         placeholder="Search here..."
//       />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";

function Hello() {
  // 밑의 코드와 같은 것
  // function byFn() {
  //   console.log("bye :(");
  // }
  // function hiFn() {
  //   console.log("created :)");
  //   return byFn;
  // }
  // useEffect(hiFn, []);
  useEffect(() => {
    console.log("created :)");
    // clean up 함수
    return () => console.log("destroyed :(");
  }, []);
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  // 위의 코드와 같은 것
  // useEffect(function () {
  //   console.log("hi :)");
  //   return function () {
  //     console.log("bye :(");
  //   };
  // }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
