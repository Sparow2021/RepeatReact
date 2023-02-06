import React, { useState } from "react";
import PostList from "./components/PostList";
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Typescript', body: 'Description' },
    { id: 3, title: 'NodeJS', body: 'Description' },
    { id: 4, title: 'React', body: 'Description' }
  ])

  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Javascript2', body: 'Description' },
    { id: 2, title: 'Typescript2', body: 'Description' },
    { id: 3, title: 'NodeJS2', body: 'Description' },
    { id: 4, title: 'React2', body: 'Description' }
  ])

  const [posts3, setPosts3] = useState([
    { id: 1, title: 'Javascript3', body: 'Description' },
    { id: 2, title: 'Typescript3', body: 'Description' },
    { id: 3, title: 'NodeJS3', body: 'Description' },
    { id: 4, title: 'React3', body: 'Description' }
  ])
  return (
    <div className="App">
      <PostList posts={posts} title={'Список курсов: '}/>
      <PostList posts={posts2} title={'Список курсов 2: '}/>
      <PostList posts={posts3} title={'Список курсов 3: '}/>
    </div>
  );
}

export default App;
