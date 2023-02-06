import React from "react";
import PostItem from "./components/PostItem";
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <PostItem post={{id: 1, title: 'Javascript', body:'Description'}}/>
      <PostItem post={{id: 2, title: 'Typescript', body:'Description'}}/>

    </div>
  );
}

export default App;
