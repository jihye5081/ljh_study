import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  // 더이상 영화들을 보여주지 않고 router(URL을 보고 있는 component)를 render함
  // URL에 따라 Home.js 나 Detail.js를 보여주게 됨
  return (
    <Router>
      {/*  Switch가 하는 일 ==> Route(== URL)를 찾는 것 
          한 번에 하나의 Route만 렌더링 하기 위해 사용  */}
      <Switch>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
