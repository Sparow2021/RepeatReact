import React, { useState } from "react";

function App() {
  const state = useState(0)
  console.log(state)

  function increment() {
   
  }
  
  function decrement() {
  
  }
  //developer
  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
