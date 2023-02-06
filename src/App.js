import React from "react";
import PostItem from "./components/PostItem";
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <PostItem value={22222}/>
      <PostItem/>
      <PostItem/>
      <PostItem/>
      <PostItem/>
    </div>
  );
}

export default App;
