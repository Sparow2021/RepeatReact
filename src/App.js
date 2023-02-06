import React, { useState } from "react";
import PostItem from "./components/PostItem";
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body:'Description'},
    {id: 2, title: 'Typescript', body:'Description'},
    {id: 3, title: 'NodeJS', body:'Description'},
    {id: 4, title: 'React', body:'Description'}
  ])
  return (
    <div className="App">
      {posts.map(post => 
        <PostItem post={post}/>
      )}
    </div>
  );
}

export default App;
