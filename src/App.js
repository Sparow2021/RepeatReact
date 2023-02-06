import React from "react";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. Javascript</strong>
          <div>Javascript - язык программирования</div>
        </div>
        <div className="post__btn">
          <button>Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default App;
