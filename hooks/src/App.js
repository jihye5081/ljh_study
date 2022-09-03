import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// class App extends Component {
//   state = {
//     count: 0,
//   };
//   modify = (n) => {
//     this.setState({
//       count: n,
//     });
//   };
//   render() {
//     const { count } = this.state;
//     return (
//       <>
//         <div>{count}</div>
//         <button onClick={() => this.modify(count + 1)}>Increment</button>
//       </>
//     );
//   }
// }

// export default App;

// useEffect는 component did mount, did update와 비슷
// 주로 API에서 데이터를 요청할 때 사용

const App = () => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const updateEmail = (e) => {
    const {
      target: { value },
    } = e;
    setEmail(value);
  };
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <input placeholder="Email" value={email} onChange={updateEmail} />
    </>
  );
};

export default App;
