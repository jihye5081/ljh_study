import React, { useState } from "react";
import ReactDOM from "react-dom";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

// useTab => 버튼을 클릭했을 때 해당 버튼의 내용을 다르게 보여주는 것
const useTabs = (initalTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initalTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  // 최상위에서만 hook을 호출해야하는데 이 위치에 존재하면 에러 발생
  // 맨 위로 코드 옮겨주면 에러 해결
  // const [currentIndex, setCurrentIndex] = useState(initalTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
